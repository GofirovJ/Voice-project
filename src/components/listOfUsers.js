import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_all_user,
  code_of_user,
  phone_of_user,
  id_of_user,
} from "../store/action";
import axios from "axios";

const baseURL = "https://open-budget-pro.herokuapp.com";

const ListOfUsers = ({ setModal, setLoader }) => {
  let num = 0;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const getCodeRequest = (phoneNumber, userId) => {
    dispatch(phone_of_user(phoneNumber));
    dispatch(id_of_user(userId));

    axios
      .post(`${baseURL}/v1/users/send_code/${phoneNumber}`)
      .then((response) => {
        // console.log("send code request post",response);
      })
      .catch((err) => {
        return err;
      });

    const getCode = async () => {
      await axios
        .get(`${baseURL}/v1/users/${userId}`)
        .then((res) => {
          // console.log("user's details",res);
          if (res?.data?.object?.code !== null) {
            // console.log("code found");
            dispatch(code_of_user(res.data.object.code));
            clearInterval(interval);
          } else {
            // console.log("Code not found", res?.data.object.code);
            num++;
            // console.log(num);
            if (num === 9) {
              clearInterval(interval);
              dispatch(code_of_user("Kod yuborilmadi qayta urunib ko'ring"));
              // console.log("cleared");
            }
          }
        })
        .catch((error) => {
          return error;
        });
    };

    var interval = setInterval(() => {
      getCode();
    }, 10000);

    setLoader(true);
    setModal(true);
  };
  useEffect(() => {
    axios
      .get(`${baseURL}/v1/users/new_users`)
      .then((response) => {
        // console.log("new users", response);
        // console.log(response.data.object);
        dispatch(get_all_user(response.data));
      })
      .catch((error) => {
        return error;
      });
  }, [dispatch]);

  const copyElement = (phone, id) => {
    let element = document.getElementById(id)
    navigator.clipboard.writeText(phone)
    element.classList.remove("hidden")
    setTimeout(() => {
      element.classList.add("hidden")
    }, 800);
  }

  return (
    <>
      <div className="w-[80%] h-full bg-[#F7F9FB] p-20">
        <h1 className="text-[30px] text-[#2c384a] font-bold leading-[40px] py-2">
          Yangi foydalanuvchilar
        </h1>
        <ul className="text-[20px] flex justify-between items-center bg-[#433aeb] text-white font-medium tracking-wider rounded-md p-6 my-4 ">
            <li className="w-[5%] ">No:</li>
            <li className="w-[20%] ">Telefon raqam:</li>
            <li className="w-[15%] ">Sana:</li>
            <li className="w-[25%] ">Loyiha nomi:</li>
            <li className="w-[15%] ">Kodni olish:</li>
            <li className="w-[10%] ">Nusxa</li>
        </ul>
        <div className="h-[75%] overflow-y-scroll">
          {state?.allUsers?.object?.map((user, i) => {
            return (
              <ul
                key={user.id}
                className="list p-6 my-4 border  hover:border-[#433aeb] font-medium tracking-wider text-[#2c384a] flex justify-between items-center transition duration-300 rounded-md"
              >
                <li className="w-[5%]">{i+1}</li>
                <li className="w-[20%]">{user?.phoneNumber}</li>
                <li className="w-[15%]">{user?.createdAt.slice(0, 10)}</li>
                <li className="w-[25%]">{user?.project.title}</li>
                <li className="w-[15%]">
                  <button
                    onClick={() => getCodeRequest(user?.phoneNumber, user?.id)}
                    className="border border-solid border-[#433aeb] px-4 py-1 rounded-md hover:bg-[#433aeb] hover:text-white"
                  >
                    So'rov
                  </button>
                </li>
                <li className="w-[10%] relative flex justify-center items-center">
                  <svg
                    onClick={() => copyElement(user?.phoneNumber, user?.id)}
                    className="cursor-pointer"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3.25C5.82436 3.25 3.25 5.82436 3.25 9V16.1069C3.25 16.5211 3.58579 16.8569 4 16.8569C4.41421 16.8569 4.75 16.5211 4.75 16.1069V9C4.75 6.65279 6.65279 4.75 9 4.75H16.0129C16.4271 4.75 16.7629 4.41421 16.7629 4C16.7629 3.58579 16.4271 3.25 16.0129 3.25H9Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.4026 6.79326C15.1616 6.43104 11.8384 6.43104 8.59748 6.79326C7.6742 6.89645 6.93227 7.62304 6.82344 8.55348C6.43906 11.84 6.43906 15.16 6.82344 18.4465C6.93227 19.377 7.6742 20.1035 8.59748 20.2067C11.8384 20.569 15.1616 20.569 18.4026 20.2067C19.3258 20.1035 20.0678 19.377 20.1766 18.4465C20.561 15.16 20.561 11.84 20.1766 8.55348C20.0678 7.62304 19.3258 6.89645 18.4026 6.79326ZM8.76409 8.28398C11.8943 7.93413 15.1057 7.93413 18.2359 8.28398C18.4733 8.3105 18.6599 8.49821 18.6867 8.72773C19.0576 11.8984 19.0576 15.1016 18.6867 18.2723C18.6599 18.5018 18.4733 18.6895 18.2359 18.716C15.1057 19.0659 11.8943 19.0659 8.76409 18.716C8.52674 18.6895 8.34013 18.5018 8.31329 18.2723C7.94245 15.1016 7.94245 11.8984 8.31329 8.72773C8.34013 8.49821 8.52674 8.3105 8.76409 8.28398Z"
                      fill="black"
                    />
                  </svg>
                    <p id={user?.id} className="absolute -bottom-4 text-[10px] hidden">Nusxalandi</p>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListOfUsers;

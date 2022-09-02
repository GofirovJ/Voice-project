import React, { useEffect } from "react";
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

  return (
    <>
      <div className="w-[80%] h-full bg-[#F7F9FB] p-20">
        <h1 className="text-[30px] text-[#2c384a] font-bold leading-[40px] py-2">
         Yangi foydalanuvchilar
        </h1>
        <div className="py-10 h-full overflow-y-scroll">
          <ul className="text-[20px] flex justify-between items-center bg-[#433aeb] text-white font-medium tracking-wider rounded-md p-6 my-4 ">
            <li className="w-[10%]">No:</li>
            <li className="w-[25%]">Telefon raqam:</li>
            <li className="w-[20%]">Sana:</li>
            <li className="w-[25%]">Loyiha nomi:</li>
            <li className="w-[20%]">Kodni olish:</li>
          </ul>
          {state?.allUsers?.object?.map((user) => {
            return (
              <ul
                key={user.id}
                className="list p-6 my-4 border  hover:border-[#433aeb] font-medium tracking-wider text-[#2c384a] flex justify-between items-center transition duration-300 rounded-md"
              >
                <li className="w-[10%]">{user?.id}</li>
                <li className="w-[25%]">{user?.phoneNumber}</li>
                <li className="w-[20%]">{user?.createdAt.slice(0, 10)}</li>
                <li className="w-[25%]">{user?.project.title}</li>
                <li className="w-[20%]">
                  <button
                    onClick={() => getCodeRequest(user?.phoneNumber, user?.id)}
                    className="border border-solid border-[#433aeb] px-4 py-1 rounded-md hover:bg-[#433aeb] hover:text-white"
                  >
                    So'rov
                  </button>
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

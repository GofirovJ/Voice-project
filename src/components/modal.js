import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { code_of_user, phone_of_user, get_all_user } from "../store/action";
import axios from "axios";
const baseURL = "https://open-budget-pro.herokuapp.com";

const Modal = ({ setModal }) => {
  let num = 0;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const refreshUsers = () => {
    axios
      .get(`${baseURL}/v1/users/new_users`)
      .then((response) => {
        // console.log("new users",response);
        // console.log(response.data.object);
        dispatch(get_all_user(response.data));
      })
      .catch((error) => {
        return error;
      });
  };

  // const closeModal = () => {
  //   dispatch(code_of_user(""));
  //   dispatch(phone_of_user(""));
  //   setModal(false);
  //   refreshUsers();
  // };

  const verifiedCode = () => {
    let phoneNumber = state?.phoneNumber;
    // console.log("verify");
    axios
      .post(`${baseURL}/v1/users/verify/${phoneNumber}`)
      .then((response) => {
        // console.log("verify post",response);
        setModal(false);
        dispatch(phone_of_user(phoneNumber));
      })
      .catch((err) => {
        return err;
      });
    refreshUsers();
  };
  const resendCode = () => {
    state.code = "";
    // unsubmitted notification should be sent
    // console.log("resend");
    let phoneNumber = state?.phoneNumber;
    console.log("verify");
    axios
      .post(`${baseURL}/v1/users/resend_code/${phoneNumber}`)
      .then((response) => {
        // console.log("resend code", response);
        // setModal(false);
        dispatch(phone_of_user(phoneNumber));
      })
      .catch((err) => {
        return err;
      });

    let userId = state?.userId;
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
              dispatch(code_of_user("Request failed try again !"));
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
  };
  const failedCode = () => {
    // unsubmitted notification should be sent
    // console.log("failed");
    let phoneNumber = state?.phoneNumber;
    console.log("verify");
    axios
      .post(`${baseURL}/v1/users/code_not_received/${phoneNumber}`)
      .then((response) => {
        // console.log("failed request post",response);
        setModal(false);
        dispatch(phone_of_user(phoneNumber));
      })
      .catch((err) => {
        return err;
      });
    refreshUsers();
  };

  // const disableBtns = () => {
  //   const submitBtn = document.querySelector(".submitBtn");
  //   const unSubmitBtn = document.querySelector(".unSubmitBtn");
  //   const failedBtn = document.querySelector(".failedBtn");
  //   const closeBtn = document.querySelector(".closeButton");

  //   if (state?.code.length > 0) {
  //     submitBtn.disabled = false;
  //     unSubmitBtn.disabled = false;
  //     failedBtn.disabled = false;
  //     closeBtn.disabled = false;
  //   } else {
  //     submitBtn.disabled = true;
  //     unSubmitBtn.disabled = true;
  //     failedBtn.disabled = true;
  //     closeBtn.disabled = true;
  //   }
  // }

  // if (state?.code.length > 0) {
  // disableBtns()
  // }

  // useEffect(() => {
  //   // console.log("useEffect");
  //   disableBtns()
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <div className="absolute w-full h-full top-0 left-0 bg-transparent">
        <div
          className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.4)]"
        ></div>
        <div className="absolute w-[45%] h-[300px] translate-x-[65%] translate-y-[35%] bg-white rounded-lg ">
          {/* <div className="absolute right-1 top-3">
            <button
              onClick={closeModal}
              className={`closeButton cursor-pointer w-[35px] h-[35px] bg-transparent relative mx-4 p-0 overflow-hidden text-[0] close`}
            >
              <span className="absolute block bg-white w-[30px] h-[3px] top-[16px] left-[2px] right-[2px] rounded-[2px]">
                close button
              </span>
            </button>
          </div> */}
            {/* <div className="w-[40%] h-full py-4 px-6 ">
              <ul>
                <li className="mt-5">
                  <form className="flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="Type your message"
                      className="w-[75%] outline-none border border-[#433aeb] py-2 px-6 rounded-md text-[14px]"
                    />
                    <input
                      type="submit"
                      value="Send"
                      className="bg-[#433aeb]  text-white cursor-pointer px-4 py-2 rounded-md"
                    />
                  </form>
                </li>
                <li className="mt-5 text-[14px] font-bold tracking-wider">
                  Deafult messages:
                </li>
                <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">
                  Message 1
                </li>
                <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">
                  Message 2
                </li>
                <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">
                  Message 3
                </li>
                <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">
                  Message 4
                </li>
                <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">
                  Message 5
                </li>
              </ul>
            </div> */}
            <div className="w-full flex flex-col justify-around items-center h-full py-4 px-6 ">
              {state?.code.length > 0 ? (
                <div className="h-[50%] flex flex-col justify-center items-center ">
                  <h2 className="text-[25px] font-medium tracking-wider my-2">
                    Kod :
                  </h2>
                  <h2
                    className={`text-[27px] font-bold tracking-wider transition-all duration-300 ${
                      state.code === "error" ? `text-[#cc3838]` : ``
                    }`}
                  >
                    {state?.code}
                  </h2>
                </div>
              ) : (
                <div className="loader h-[50%] w-full flex justify-center items-center"></div>
              )}
              <div className="w-full flex justify-around items-center">
                <button
                  onClick={verifiedCode}
                  className={`submitBtn px-6 py-2 bg-[#42c07d] text-white cursor-pointer rounded-md`}
                >
                  Tekshirildi
                </button>
                <button
                  onClick={resendCode}
                  className={`unSubmitBtn px-4 py-2 bg-[#c3cc42] text-white cursor-pointer rounded-md`}
                >
                  Qayta so'rov
                </button>
                <button
                  onClick={failedCode}
                  className={`failedBtn px-4 py-2 bg-[#cc4242] text-white cursor-pointer rounded-md`}
                >
                 Qabul qilinmadi
                </button>
                {/* ${state?.code.length > 0 ? `` : `cursor-not-allowed`}  */}
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

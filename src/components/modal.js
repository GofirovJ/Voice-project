import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { code_of_user } from "../store/action";
const Modal = ({ setModal }) => {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const closeModal = () => {
    dispatch(code_of_user(""));
    setModal(false);
  };
  
  const verifiedCode = () => {
    console.log("verify");
  };

  const errorCode = () => {
    // unsubmitted notification should be sent
    console.log("error");
  };
  const failedCode = () => {
    // unsubmitted notification should be sent
    console.log("failed");
  };

  const disableBtns = () => {
    const submitBtn = document.querySelector(".submitBtn");
    const unSubmitBtn = document.querySelector(".unSubmitBtn");
    const failedBtn = document.querySelector(".failedBtn");
    const closeBtn = document.querySelector(".closeButton");

    if (state?.code.length > 0) {
      submitBtn.disabled = false;
      unSubmitBtn.disabled = false;
      failedBtn.disabled = false;
      closeBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
      unSubmitBtn.disabled = true;
      failedBtn.disabled = true;
      closeBtn.disabled = true;
    }
  }

  if (state?.code.length > 0) {
  disableBtns()    
  }

  useEffect(() => {
    // console.log("useEffect");
    disableBtns()
  }, [disableBtns]);

  return (
    <>
      <div className="absolute w-full h-full top-0 left-0 bg-transparent">
        <div
          // onClick={closeModal}
          className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.4)]"
        ></div>
        <div className="absolute w-[45%] h-[350px] translate-x-[65%] translate-y-[35%] bg-white rounded-lg ">
          <div className="absolute right-1 top-3">
            <button
              onClick={closeModal}
              className={`${
                state?.code.length > 0 ? `` : `cursor-not-allowed`
              } closeButton cursor-pointer w-[35px] h-[35px] bg-transparent relative mx-4 p-0 overflow-hidden text-[0] close`}
            >
              <span className="absolute block bg-white w-[30px] h-[3px] top-[16px] left-[2px] right-[2px] rounded-[2px]">
                close button
              </span>
            </button>
          </div>
          <div className="flex justify-center items-center h-full">
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
                    Code :
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
              <div className=" h-[50%] w-full flex justify-around items-center">
                <button
                  onClick={verifiedCode}
                  className={`${
                    state?.code.length > 0 ? `` : `cursor-not-allowed`
                  } submitBtn px-6 py-2 bg-[#42c07d] text-white cursor-pointer rounded-md`}
                >
                  Verified
                </button>
                <button
                  onClick={errorCode}
                  className={`${
                    state?.code.length > 0 ? `` : `cursor-not-allowed`
                  } unSubmitBtn px-4 py-2 bg-[#c3cc42] text-white cursor-pointer rounded-md`}
                >
                  Error Code
                </button>
                <button
                onClick={failedCode}
                  className={`${
                    state?.code.length > 0 ? `` : `cursor-not-allowed`
                  } failedBtn px-4 py-2 bg-[#cc4242] text-white cursor-pointer rounded-md`}
                >
                  Request failed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

import React, { useEffect, useState } from "react";

const Modal = ({ setModal, loader, setLoader, }) => {
  const [code, setCode] = useState(false);
  const [disableUnSubmit, setDisableUnSubmit] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);

  const getCodeRequest = () =>{
    const submitBtn = document.querySelector(".submitBtn");
    const unSubmitBtn = document.querySelector(".unSubmitBtn");

    setLoader(false)
    setCode(true)
   
    
      // setDisableUnSubmit()
      // setDisableSubmit()
  }

  const closeModal = () => {
    setModal(false);
    setCode(true)
    setLoader(true);
    console.log("Loader" , loader, code);
    // setDisableSubmit(false);
    // setDisableUnSubmit(false);
  };
  const unsibmittedCode = () => {
    // unsubmitted notification should be sent
    console.log("unsubmitted");
    if (!code) {
      console.log("code false");
      setModal(false);
    } 
  };

  const submittedCode = () => {
    console.log("submitted");
  }

  useEffect(() => {
    console.log(("useEffect"));
    const submitBtn = document.querySelector(".submitBtn");
    const unSubmitBtn = document.querySelector(".unSubmitBtn");

    if (loader) {
      submitBtn.disabled = true;
      unSubmitBtn.disabled = true;
    }
    if(!loader && code) {
      submitBtn.disabled = true;
      unSubmitBtn.disabled = false;
    }
    if(!loader && !code){
      submitBtn.disabled = false;
      unSubmitBtn.disabled = true;
    }
    // if(code){
    //   unSubmitBtn.disabled = true;
    //   setDisableUnSubmit(true)
    // }else{
    //   submitBtn.disabled = true;
    //   setDisableSubmit(true)
    // }
  }, []);

  return (
    <>
      <div className="absolute w-full h-full top-0 left-0 bg-transparent">
        <div
          onClick={closeModal}
          className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.4)]"
        ></div>
        <div className="absolute w-[50%] h-[50%] translate-x-[55%] translate-y-[40%] bg-white rounded-lg ">
          <div className="absolute right-1 top-3">
            <div
              onClick={closeModal}
              className="closeButton cursor-pointer w-[35px] h-[35px] bg-transparent relative mx-4 p-0 overflow-hidden text-[0] close"
            >
              <span className="absolute block bg-white w-[30px] h-[3px] top-[16px] left-[2px] right-[2px] rounded-[2px]">
                close button
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center h-full">
            <div className="w-[40%] h-full py-4 px-6 ">
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
            </div>
            <div className="w-[50%]  flex flex-col justify-around items-center h-full py-4 px-6 ">
              {loader ? (
                <div className="loader h-[50%] w-full flex justify-center items-center"></div>
              ) : (
                <div className="h-[50%] flex flex-col justify-center items-center ">
                  <h2 className="text-[25px] font-medium tracking-wider my-2">
                    {code ? "Code" : ""}
                  </h2>
                  <h2
                    className={`text-[27px] font-bold tracking-wider transition-all duration-300 ${
                      code ? `` : `text-[#cc3838]`
                    }`}
                  >
                    {code ? 1111 : "Request failed try again !"}
                  </h2>
                </div>
              )}
              <div className="  h-[50%] w-full flex justify-around items-center">
                <button
                  onClick={submittedCode}
                  className={`${loader ? `cursor-not-allowed` : ``}  ${disableSubmit ? `cursor-not-allowed` : ``} submitBtn px-6 py-2 bg-[#42c07d] text-white cursor-pointer rounded-md`}
                >
                  Submitted
                </button>
                <button
                  onClick={unsibmittedCode}
                  className={`${loader ? `cursor-not-allowed` : ``} ${disableUnSubmit ? `cursor-not-allowed` : ``} unSubmitBtn px-4 py-2 bg-[#cc4242] text-white cursor-pointer rounded-md`}
                >
                  Unsubmitted
                </button>
                <button onClick={getCodeRequest}>Ok</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

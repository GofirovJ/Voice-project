import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { notify } from "../store/action";

const baseURL = "https://open-budget-pro.herokuapp.com";
const Login = ({ setAccess }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(true);

  const show = () => {
    const input = document.querySelector(".password");
    if (eye) {
      setEye(false);
      input.type = "text";
    } else {
      setEye(true);
      input.type = "password";
    }
  };

  const errorNotify = () => {
    toast.error("Login yoki Parol xato kiritildi", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/v1/admins/login`, { username, password })
      .then((response) => {
        if (response?.data.success) {
          navigate("/");
          dispatch(notify(true));
          setAccess(true);
        } else {
          errorNotify();
          setUserName("");
          setPassword("");
        }
      })
      .catch((error) => {
        errorNotify();
        setUserName("");
        setPassword("");
        return error;
      });
  };
  return (
    <>
      <div className="loginContainer w-full h-[100vh]">
        <div className="container mx-auto flex flex-col justify-around items-center">
          <div className="h-[30vh] w-[40%] flex flex-col justify-end items-center">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.0724 4.02447C15.1063 3.04182 13.7429 2.5 12.152 2.5C10.5611 2.5 9.19773 3.04182 8.23167 4.02447C7.26636 5.00636 6.73644 6.38891 6.73644 8C6.73644 10.169 7.68081 11.567 8.8496 12.4062C9.07675 12.5692 9.3115 12.7107 9.54832 12.8327C8.24215 13.1916 7.18158 13.8173 6.31809 14.5934C4.95272 15.8205 4.10647 17.3993 3.53633 18.813C3.43305 19.0691 3.55693 19.3604 3.81304 19.4637C4.06914 19.567 4.36047 19.4431 4.46375 19.187C5.00642 17.8414 5.78146 16.4202 6.98653 15.3371C8.1795 14.265 9.82009 13.5 12.152 13.5C14.332 13.5 15.9058 14.1685 17.074 15.1279C18.252 16.0953 19.0453 17.3816 19.6137 18.6532C19.9929 19.5016 19.3274 20.5 18.2827 20.5H6.74488C6.46874 20.5 6.24488 20.7239 6.24488 21C6.24488 21.2761 6.46874 21.5 6.74488 21.5H18.2827C19.9348 21.5 21.2479 19.8588 20.5267 18.2452C19.9232 16.8952 19.0504 15.4569 17.7087 14.3551C16.9123 13.7011 15.9603 13.1737 14.8203 12.8507C15.43 12.5136 15.9312 12.0662 16.33 11.5591C17.1929 10.462 17.5676 9.10016 17.5676 8C17.5676 6.38891 17.0377 5.00636 16.0724 4.02447ZM15.3593 4.72553C16.1144 5.49364 16.5676 6.61109 16.5676 8C16.5676 8.89984 16.2541 10.038 15.544 10.9409C14.8475 11.8265 13.7607 12.5 12.152 12.5C11.5014 12.5 10.3789 12.2731 9.43284 11.5938C8.51251 10.933 7.73644 9.83102 7.73644 8C7.73644 6.61109 8.18963 5.49364 8.94477 4.72553C9.69916 3.95818 10.7935 3.5 12.152 3.5C13.5105 3.5 14.6049 3.95818 15.3593 4.72553Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div className="h-[70vh] w-[40%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center"
            >
              <label
                htmlFor="username"
                className="w-[60%] border-none bg-white outline-none rounded-md my-4"
              >
                <input
                  id="username"
                  autoComplete="off"
                  className="w-full h-full border-none outline-none rounded-md px-4 py-4 bg-white"
                  placeholder="Login"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </label>
              <label 
                htmlFor="password"
                className="w-[60%] flex items-center border-none bg-white outline-none rounded-md my-4"
              >
                <input
                  id="password"
                  className="password w-[90%] h-full border-none outline-none rounded-md px-4 py-4 bg-white"
                  placeholder="Parol"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <img
                  onClick={show}
                  className="w-[20px] h-[20px] cursor-pointer"
                  src={eye ? "./eye-hide.svg" : "./eye-show.svg"}
                  alt="icon"
                />
              </label>
              <input
                className="w-[60%] border-none bg-[#5046E5] text-white my-4 cursor-pointer outline-[#11088f] rounded-md py-4 px-4"
                type="submit"
                value="Kirish"
              />
            </form>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </div>
    </>
  );
};

export default Login;

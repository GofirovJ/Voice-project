import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_admins } from "../store/action";
import axios from "axios";

const baseURL = "https://open-budget-pro.herokuapp.com";
const ListAdmin = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [modal, setModal] = useState(false);
  const [askModal, setAskModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);
  const [id, setId] = useState("");
  const [adminName, setAdminName] = useState("");
  const [passwordofadmin, setPasswordOfAdmin] = useState("");
  const [pw, setPw] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  // get all admin
  const getAdmin = () => {
    axios
      .get(`${baseURL}/v1/admins`)
      .then((response) => {
        // console.log("get admins", response);
        dispatch(get_admins(response.data));
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    getAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // axios add admin-user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === rePassword) {
      axios
        .post(`${baseURL}/v1/admins`, {
          username: login,
          password: password,
        })
        .then((response) => {
          //   console.log("add admin", response);
          setModal(false);
          setLogin("");
          setPassword("");
          setRePassword("");
        })
        .catch((err) => {
          // return err;
          // console.log(err)
          if (err?.response.status === 409) {
            setError2(true);
            setLogin("");
            setPassword("");
            setRePassword("");
            setTimeout(() => {
              setError2(false);
            }, 1500);
          }
          return err;
        });
      setTimeout(() => {
        getAdmin();
      }, 200);
    } else {
      setError(true);
      setLogin("");
      setPassword("");
      setRePassword("");
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  // axios delete admin-user
  const deleteAdmin = (e) => {
    e.preventDefault();
    axios
      .delete(`${baseURL}/v1/admins/${id}`)
      .then((response) => {
        // console.log("admin deleted", response);
        setAskModal(false);
        setId("");
        setAdminName("");
      })
      .catch((err) => {
        return err;
      });
    setTimeout(() => {
      getAdmin();
    }, 200);
  };
  //  axios edit admin-details
  const editAdminDetails = (e) => {
    e.preventDefault();
    if (passwordofadmin === checkPassword) {
      axios
        .patch(`${baseURL}/v1/admins/${id}`, {
          username: login,
          password: pw,
        })
        .then((response) => {
          // console.log("admin edited", response);
          setPw("");
          setLogin("");
          setId("");
        })
        .catch((err) => {
          return err;
        });
      setTimeout(() => {
        getAdmin();
      }, 200);
      setEditModal(false);
      setPasswordOfAdmin("");
      setCheckPassword("");
    } else {
      setError3(true);
      setPw("");
      setLogin("");
      setCheckPassword("");
      setTimeout(() => {
        setError3(false);
      }, 2000);
    }
  };
  // Add User modal
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setLogin("");
    setCheckPassword("");
    setRePassword("");
  };
  // edit modal
  const openEditModal = (id, passwordofadmin) => {
    setId(id);
    setPasswordOfAdmin(passwordofadmin);
    setEditModal(true);
  };
  const closeEditModal = () => {
    setEditModal(false);
    setPasswordOfAdmin("");
    setCheckPassword("");
    setLogin("");
    setId("");
    setPw("");
  };
  // Delete modal
  const openAskModal = (id, name) => {
    setId(id);
    setAdminName(name);
    setAskModal(true);
  };
  const closeAskModal = () => {
    setAskModal(false);
    setId("");
    setAdminName("");
  };

  // input password visible
  const show = () => {
    const input = document.querySelector(".passwordAdmin");
    if (eye) {
      setEye(false);
      input.type = "text";
    } else {
      setEye(true);
      input.type = "password";
    }
  };
  const showAgain = () => {
    const input = document.querySelector(".repassword");
    if (eye2) {
      setEye2(false);
      input.type = "text";
    } else {
      setEye2(true);
      input.type = "password";
    }
  };

  return (
    <>
      {!modal ? (
        <div className="w-[80%] h-full bg-[#F7F9FB] p-20">
          <div className="flex justify-between items-center">
            <h1 className="text-[30px] text-[#2c384a] font-bold leading-[40px] py-2">
              Adminlar
            </h1>
            <button
              onClick={openModal}
              className="px-6 py-2 font-medium text-[20px] text-white rounded-md bg-[#433aeb]"
            >
              Admin qo'shish
            </button>
          </div>
          <ul className="text-[20px] flex justify-start items-center bg-[#433aeb] text-white font-medium tracking-wider rounded-md p-6 my-4 ">
            <li className="w-[10%]">No</li>
            <li className="w-[30%]">Admin</li>
            <li className="w-[55%] flex justify-end px-4">Tahrirlash</li>
            <li className="w-[15%] flex justify-end px-4">O'chirish</li>
          </ul>
          <div className="h-[75%] overflow-y-scroll">
            {state?.admins?.object?.map((admin, i) => {
              return (
                <ul
                  key={admin.id}
                  className="list p-6 my-4 border  hover:border-[#433aeb] font-medium tracking-wider text-[#2c384a] flex justify-start items-center transition duration-300 rounded-md"
                >
                  <li className="w-[10%]">{i + 1}</li>
                  <li className="w-[30%]">{admin?.username}</li>
                  <li className="w-[55%] flex justify-end px-4">
                    <svg
                      onClick={() => openEditModal(admin?.id, admin?.password)}
                      className="cursor-pointer"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.361 2.91158C16.5764 1.69614 18.547 1.69614 19.7625 2.91158L21.0884 4.23753C22.3039 5.45297 22.3039 7.4236 21.0884 8.63904L8.63904 21.0884C8.05536 21.6721 7.26373 22 6.43828 22H2.84882C2.38003 22 2 21.62 2 21.1512V17.5617C2 16.7363 2.32791 15.9446 2.91158 15.361L15.361 2.91158ZM18.5621 4.112C18.0096 3.55952 17.1138 3.55952 16.5614 4.112L14.2351 6.43828L17.5617 9.76491L19.888 7.43863C20.4405 6.88615 20.4405 5.99042 19.888 5.43794L18.5621 4.112ZM16.3613 10.9653L13.0347 7.6387L4.112 16.5614C3.84669 16.8267 3.69764 17.1865 3.69764 17.5617V20.3024H6.43828C6.81349 20.3024 7.17332 20.1533 7.43863 19.888L16.3613 10.9653Z"
                        fill="#030D45"
                      />
                    </svg>
                  </li>
                  <li
                    className={`${
                      admin.id === 1
                        ? `invisible w-[15%] flex justify-end px-10 `
                        : `w-[15%] flex justify-end px-10`
                    }`}
                  >
                    <svg
                      onClick={() => openAskModal(admin?.id, admin?.username)}
                      className="cursor-pointer"
                      version="1.1"
                      id="Uploaded to svgrepo.com"
                      x="0px"
                      y="0px"
                      width="25px"
                      height="25px"
                      viewBox="0 0 32 32"
                    >
                      <path
                        className="feather_een"
                        d="M20,26.5v-16c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v16c0,0.276-0.224,0.5-0.5,0.5
	S20,26.776,20,26.5z M28,5v1c0,0.552-0.448,1-1,1l-1.847,22.166C25.066,30.203,24.2,31,23.16,31H8.84
	c-1.04,0-1.907-0.797-1.993-1.834L5,7C4.448,7,4,6.552,4,6V5c0-1.105,0.895-2,2-2h7V2c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1v1
	h7C27.105,3,28,3.895,28,5z M14,3h4V2h-4V3z M25.997,7H6.003l1.84,22.083C7.887,29.601,8.32,30,8.84,30H23.16
	c0.52,0,0.953-0.399,0.997-0.917L25.997,7z M27,5c0-0.552-0.448-1-1-1H6C5.448,4,5,4.448,5,5v1h22V5z M17.5,27
	c0.276,0,0.5-0.224,0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5S17,10.224,17,10.5v16C17,26.776,17.224,27,17.5,27z M14.5,27
	c0.276,0,0.5-0.224,0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5S14,10.224,14,10.5v16C14,26.776,14.224,27,14.5,27z M11.5,27
	c0.276,0,0.5-0.224,0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5S11,10.224,11,10.5v16C11,26.776,11.224,27,11.5,27z"
                      />
                    </svg>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="absolute w-full h-full top-0 left-0 bg-transparent">
          <div
            // onClick={closeModal}
            className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.4)]"
          ></div>
          <div className="absolute w-[60%] h-[250px] translate-x-[40%] translate-y-[40%] bg-white rounded-lg ">
            <div className="absolute right-1 top-3">
              <button
                onClick={closeModal}
                className={`closeButton cursor-pointer w-[35px] h-[35px] bg-transparent relative mx-4 p-0 overflow-hidden text-[0] close`}
              >
                <span className="absolute block bg-white w-[30px] h-[3px] top-[16px] left-[2px] right-[2px] rounded-[2px]">
                  close button
                </span>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col justify-between items-center"
              >
                <label
                  htmlFor="adminLogin"
                  className="w-[25%] flex items-center bg-white outline-none rounded-md border border-[#433aeb] my-1"
                >
                  <input
                    id="adminLogin"
                    onChange={(e) => setLogin(e.target.value)}
                    type="text"
                    placeholder="Login:"
                    value={login}
                    className="w-[90%] h-full border-none outline-none rounded-md px-2 py-2 bg-white text-[14px]"
                  />
                </label>
                <label
                  htmlFor="password"
                  className="w-[25%] flex items-center bg-white outline-none rounded-md border border-[#433aeb] my-1"
                >
                  <input
                    id="password"
                    className="passwordAdmin w-[90%] h-full border-none outline-none rounded-md px-2 py-2 bg-white text-[14px]"
                    placeholder="Parol kiriting:"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />

                  <img
                    onClick={show}
                    className="w-[20px] h-[20px] cursor-pointer mr-2"
                    src={eye ? "./eye-hide.svg" : "./eye-show.svg"}
                    alt="icon"
                  />
                </label>
                <label
                  htmlFor="repassword"
                  className="w-[25%] flex items-center bg-white outline-none rounded-md border border-[#433aeb] my-1"
                >
                  <input
                    id="repassword"
                    className="repassword w-[90%] h-full border-none outline-none rounded-md px-2 py-2 bg-white text-[14px]"
                    placeholder="Parolni qayta kiriting:"
                    type="password"
                    value={rePassword}
                    onChange={(e) => {
                      setRePassword(e.target.value);
                    }}
                  />
                  <img
                    onClick={showAgain}
                    className="w-[20px] h-[20px] cursor-pointer mr-2"
                    src={eye2 ? "./eye-hide.svg" : "./eye-show.svg"}
                    alt="icon"
                  />
                </label>
                <input
                  type="submit"
                  value="Qo'shish"
                  className="bg-[#433aeb] my-1  text-white cursor-pointer px-8 py-2 rounded-md"
                />
                {error ? (
                  <p className="text-[14px] font-normal text-red-600">
                    Parol mos kelmadi!
                  </p>
                ) : null}
                {error2 ? (
                  <p className="text-[14px] font-normal text-red-600">
                    Ushbu login avval ro'yxatdan o'tgan
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      )}
      {askModal ? (
        <div className="absolute w-full h-full top-0 left-0 bg-transparent">
          <div className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.4)]"></div>
          <div className="absolute w-[40%] h-[180px] translate-x-[90%] translate-y-[80%] bg-white rounded-lg ">
            <div className="absolute right-1 top-3">
              <button
                onClick={closeAskModal}
                className={`closeButton cursor-pointer w-[35px] h-[35px] bg-transparent relative mx-4 p-0 overflow-hidden text-[0] close`}
              >
                <span className="absolute block bg-white w-[30px] h-[3px] top-[16px] left-[2px] right-[2px] rounded-[2px]">
                  close button
                </span>
              </button>
            </div>
            <p className="text-[20px] font-medium mt-10 text-center">
              Haqiqatdan ham {adminName}ni o'chirmoqchimisiz ?
            </p>
            <div className="mt-6">
              <form
                onSubmit={deleteAdmin}
                className="w-full flex justify-center items-center"
              >
                <input
                  type="submit"
                  value="Ha"
                  className="bg-[#433aeb] my-1  text-white cursor-pointer px-6 py-2 rounded-md mx-8"
                />
                <button
                  onClick={closeAskModal}
                  className="bg-[#d32b2b] my-1  text-white cursor-pointer px-6 py-2 rounded-md mx-8"
                >
                  Yo'q
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      {editModal ? (
        <div className="absolute w-full h-full top-0 left-0 bg-transparent">
          <div className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.4)]"></div>
          <div className="absolute w-[40%] h-[240px] translate-x-[90%] translate-y-[80%] bg-white rounded-lg ">
            <div className="absolute right-1 top-3">
              <button
                onClick={closeEditModal}
                className={`closeButton cursor-pointer w-[35px] h-[35px] bg-transparent relative mx-4 p-0 overflow-hidden text-[0] close`}
              >
                <span className="absolute block bg-white w-[30px] h-[3px] top-[16px] left-[2px] right-[2px] rounded-[2px]">
                  close button
                </span>
              </button>
            </div>
            <div className="mt-6">
              <form
                onSubmit={editAdminDetails}
                className="w-full flex flex-col justify-between items-center"
              >
                <label
                  htmlFor="passwordre"
                  className="w-[40%] flex items-center bg-white outline-none rounded-md border border-[#433aeb] my-1"
                >
                  <input
                    id="passwordre"
                    className="repassword w-[90%] h-full border-none outline-none rounded-md px-2 py-2 bg-white text-[14px]"
                    placeholder="Eski parolingizni kiriting:"
                    type="password"
                    value={checkPassword}
                    onChange={(e) => {
                      setCheckPassword(e.target.value);
                    }}
                  />

                  <img
                    onClick={showAgain}
                    className="w-[20px] h-[20px] cursor-pointer mr-2"
                    src={eye2 ? "./eye-hide.svg" : "./eye-show.svg"}
                    alt="icon"
                  />
                </label>
                <label
                  htmlFor="adminLoginEdit"
                  className="w-[40%] flex items-center bg-white outline-none rounded-md border border-[#433aeb] my-1"
                >
                  <input
                    id="adminLoginEdit"
                    onChange={(e) => setLogin(e.target.value)}
                    type="text"
                    placeholder="Yangi login:"
                    value={login}
                    className="w-full h-full border-none outline-none rounded-md px-2 py-2 bg-white text-[14px]"
                  />
                </label>
                <label
                  htmlFor="passwordEdit"
                  className="w-[40%] flex items-center bg-white outline-none rounded-md border border-[#433aeb] my-1"
                >
                  <input
                    id="passwordEdit"
                    className="passwordAdmin w-[90%] h-full border-none outline-none rounded-md px-2 py-2 bg-white text-[14px]"
                    placeholder="Yangi parol kiriting:"
                    type="password"
                    value={pw}
                    onChange={(e) => {
                      setPw(e.target.value);
                    }}
                  />

                  <img
                    onClick={show}
                    className="w-[20px] h-[20px] cursor-pointer mr-2"
                    src={eye ? "./eye-hide.svg" : "./eye-show.svg"}
                    alt="icon"
                  />
                </label>

                <input
                  type="submit"
                  value="O'zgartirish"
                  className="bg-[#433aeb] my-1  text-white cursor-pointer px-8 py-2 rounded-md"
                />
                {error3 ? (
                  <p className="text-[14px] font-normal text-red-600">
                    Parolingizni noto'g'ri kiritdingiz qayta urunib ko'ring
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ListAdmin;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_projects } from "../store/action";
import axios from "axios";

const baseURL = "https://open-budget-pro.herokuapp.com";
const Listverified = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [modal, setModal] = useState(false);
  const [askModal, setAskModal] = useState(false);
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState(null);
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const getPaid = () => {
    axios
      .get(`${baseURL}/v1/projects`)
      .then((response) => {
        // console.log("get projects", response);
        dispatch(get_projects(response.data));
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    getPaid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${baseURL}/v1/projects`, {
        title: title,
        title_id: number,
        status: true,
      })
      .then((response) => {
        setTitle("");
        setNumber("");
        // console.log("add project", response);
        setModal(false);
      })
      .catch((err) => {
        if (err?.response.status === 409) {
          setError(true);
          setTitle("");
          setNumber("");
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
        return err;
      });
    setTimeout(() => {
      getPaid();
    }, 200);
  };

  const deleteProject = (event) => {
    event.preventDefault();
    // let data = {}

    axios
      .delete(`${baseURL}/v1/projects/${id}`)
      .then((response) => {
        // console.log("project deleted", response);
        setAskModal(false);
      })
      .catch((err) => {
        return err;
      });
    setTimeout(() => {
      getPaid();
    }, 200);
  };

  const openAskModal = (id) => {
    setId(id);
    setAskModal(true);
  };
  const closeAskModal = () => {
    setAskModal(false);
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setTitle("");
    setNumber("");
  };
  return (
    <>
      {!modal ? (
        <div className="w-[80%] h-full bg-[#F7F9FB] p-20">
          <div className="flex justify-between items-center">
            <h1 className="text-[30px] text-[#2c384a] font-bold leading-[40px] py-2">
              Loyihalar
            </h1>
            <button
              onClick={openModal}
              className="px-6 py-2 font-medium text-[20px] text-white rounded-md bg-[#433aeb]"
            >
              Loyiha qo'shish
            </button>
          </div>
          <ul className="text-[20px] flex justify-start items-center bg-[#433aeb] text-white font-medium tracking-wider rounded-md p-6 my-4 ">
            <li className="w-[10%]">No:</li>
            <li className="w-[30%]">Loyiha nomi</li>
            <li className="w-[60%] flex justify-end px-4">O'chirish</li>
          </ul>
          <div className="h-[75%] overflow-y-scroll">
            {state?.projects?.object?.map((project, i) => {
              return (
                <ul
                  key={project.id}
                  className="list p-6 my-4 border  hover:border-[#433aeb] font-medium tracking-wider text-[#2c384a] flex justify-start items-center transition duration-300 rounded-md"
                >
                  <li className="w-[10%]">{i + 1}</li>
                  <li className="w-[30%]">{project?.title}</li>
                  <li className="w-[60%] flex justify-end px-10">
                    <svg
                      onClick={() => openAskModal(project?.id)}
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
                <input
                  onChange={(e) => setNumber(e.target.value)}
                  type="number"
                  placeholder="Loyiha id raqami:"
                  value={number}
                  className="my-1 outline-none border border-[#433aeb] py-2 px-6 rounded-md text-[14px]"
                />
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Loyiha nomi:"
                  value={title}
                  className="my-1 outline-none border border-[#433aeb] py-2 px-6 rounded-md text-[14px]"
                />
                <input
                  type="submit"
                  value="Qo'shish"
                  className="bg-[#433aeb] my-1  text-white cursor-pointer px-6 py-2 rounded-md"
                />
                {error ? (
                  <p className="text-[14px] font-normal text-red-600">
                    Ushbu id lik loyiha avval ro'yxatdan o'tgan!
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      )}
      {askModal ? (
        <div className="absolute w-full h-full top-0 left-0 bg-transparent">
          <div
            // onClick={closeModal}
            className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.4)]"
          ></div>
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
              Haqiqatdan ham loyihani o'chirmoqchimisiz ?
            </p>
            <div className="mt-6">
              <form
                onSubmit={deleteProject}
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
    </>
  );
};

export default Listverified;

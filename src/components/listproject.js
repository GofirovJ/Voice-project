import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { get_projects } from "../store/action";
// import axios from "axios";

// const baseURL = "https://open-budget1.herokuapp.com";
const Listverified = () => {
  // const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");

//   useEffect(() => {
//     axios
//       .get(`${baseURL}/v1/projects`)
//       .then((response) => {
//         // console.log(response.data.object);
//         dispatch(get_projects(response.data));
//       })
//       .catch((error) => {
//         return error;
//       });
//   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    // axios
    //   .post(
    //     `${baseURL}/v1/projects`,
    //     { title: title },
    //   )
    //   .then((response) => {
    //     setTitle("");
    //       console.log(response);
    //       setModal(false);
    //   })
    //   .catch((err) => {
    //     setTitle("");
    //     return err;
    //   });
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {!modal ? (
        <div className="w-[85%] h-full bg-[#F7F9FB] p-20">
          <div className="flex justify-between items-center">
            <h1 className="text-[30px] text-[#2c384a] font-bold leading-[40px] py-2">
              All Projects
            </h1>
            <button
              onClick={openModal}
              className="px-6 py-2 font-medium text-[20px] text-white rounded-md bg-[#433aeb]"
            >
              Add Project
            </button>
          </div>

          <div className="py-10 h-full overflow-y-scroll">
            <ul className="text-[20px] flex justify-start items-center bg-[#433aeb] text-white font-medium tracking-wider rounded-md p-6 my-4 ">
              <li className="w-[10%]">No:</li>
              <li className="w-[30%]">Project Title:</li>
            </ul>
            {state?.projects?.object?.map((project) => {
              return (
                <ul
                  key={project.id}
                  className="list p-6 my-4 border  hover:border-[#433aeb] font-medium tracking-wider text-[#2c384a] flex justify-between items-center transition duration-300 rounded-md"
                >
                  <li className="w-[10%]">{project?.id}</li>
                  <li className="w-[20%]">{project?.project.title}</li>
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
                className={`${
                  state?.code.length > 0 ? `` : `cursor-not-allowed`
                } closeButton cursor-pointer w-[35px] h-[35px] bg-transparent relative mx-4 p-0 overflow-hidden text-[0] close`}
              >
                <span className="absolute block bg-white w-[30px] h-[3px] top-[16px] left-[2px] right-[2px] rounded-[2px]">
                  close button
                </span>
              </button>
            </div>
            <div className="flex flex-col justify-center items-center h-full">
              <form
                onSubmit={handleSubmit}
                className="flex justify-between items-center"
              >
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Title of project:"
                  className="w-[75%] outline-none border border-[#433aeb] py-2 px-6 rounded-md text-[14px]"
                />
                <input
                  type="submit"
                  value="Add"
                  className="bg-[#433aeb]  text-white cursor-pointer px-4 py-2 rounded-md"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Listverified;

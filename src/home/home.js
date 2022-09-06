import React, { useEffect, useState } from "react";
import ListOfUsers from "../components/listOfUsers";
import Modal from "../components/modal";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../store/action";

const Home = () => {
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const state = useSelector((state) => state);
  const succesNotify = () => {
    toast.success("Tizimga hush kelibisiz", {
      toastId: 'success1',
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  useEffect(() => {
    if (state?.notify) {
      succesNotify()
    }
    dispatch(notify(false))
  },[dispatch, state?.notify])
  return (
    <>
      <div className="h-[100vh]">
        <Navbar />
        <div className="h-[92%] flex justify-between item-center">
          <Sidebar />
          <ListOfUsers setModal={setModal} setLoader={setLoader} />
        </div>
      </div>
      {modal ? <Modal setModal={setModal} loader={loader} /> : null}
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
    </>
  );
};

export default Home;

import React from "react";
import ListPaid from "../components/listPaid";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const VerifiedUsers = () => {
  return (
    <>
      <div className="h-[100vh]">
        <Navbar />
        <div className="h-[92%] flex justify-between item-center">
          <Sidebar />
          <ListPaid />
        </div>
      </div>
    </>
  );
};

export default VerifiedUsers;

import React from "react";
import ListVerified from "../components/listverified";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const VerifiedUsers = () => {
  return (
    <>
      <div className="h-[100vh]">
        <Navbar />
        <div className="h-[92%] flex justify-between item-center">
          <Sidebar />
          <ListVerified />
        </div>
      </div>
    </>
  );
};

export default VerifiedUsers;

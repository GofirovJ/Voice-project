import React from "react";
import ListAdmin from "../components/listadmin";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Admin = () => {
  return (
    <>
      <div className="h-[100vh]">
        <Navbar />
        <div className="h-[92%] flex justify-between item-center">
          <Sidebar />
          <ListAdmin />
        </div>
      </div>
    </>
  );
};

export default Admin;
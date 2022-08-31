import React from "react";
import ListProject from "../components/listproject";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

const Projects = () => {
  return (
    <>
      <div className="h-[100vh]">
        <Navbar />
        <div className="h-[92%] flex justify-between item-center">
          <Sidebar />
          <ListProject />
        </div>
      </div>
    </>
  );
};

export default Projects;

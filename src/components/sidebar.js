import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="w-[15%] h-full  py-2 px-4 bg-[#ffffff]">
        <ul className="text-[18px] font-medium py-6 text-[#2c384aae]">
          <Link to="/">
            <li className="mt-4 mb-6 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              Users
            </li>
          </Link>
          <span className="text-[14px] font-bold tracking-wider px-2">
            Status of Users
          </span>
          <Link to="/verified_users">
            <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              Verified Users
            </li>
          </Link>
          <Link to="/paid_users">
            <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              Paid Users
            </li>
          </Link>
          <span className="text-[14px] font-bold tracking-wider px-2">
            Projects
          </span>
          <Link to="/projects">
            <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              All Projects
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

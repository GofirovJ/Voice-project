import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="w-[15%] h-full  py-2 px-4 bg-[#ffffff]">
        <ul className="text-[18px] font-medium py-6 text-[#2c384aae]">
          <li className="mt-4 mb-6 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
           <Link to='/'>Users</Link>
          </li>
          <span className="text-[14px] font-bold tracking-wider px-2">
            Status of Users
          </span>
          <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
            <Link to="/verified_users">Verified Users</Link>
          </li>
          <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
          <Link to="/paid_users">Paid Users</Link>
          </li>
          <span className="text-[14px] font-bold tracking-wider px-2">
            Projects
          </span>
          <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
            <Link to="/projects">All Projects</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

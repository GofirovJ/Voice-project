import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] h-full  py-2 px-4 bg-[#ffffff]">
        <ul className="text-[14px] font-medium py-6 text-[#2c384aae]">
          <Link to="/">
            <li className="mt-4 mb-6 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              Foydalanuvchilar
            </li>
          </Link>
          <span className="text-[12px] font-bold tracking-wider px-2 opacity-40">
            Foydalanuvchilar bo'limi
          </span>
          <Link to="/verified_users">
            <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              Tekshirilgan foydalanuvchilar
            </li>
          </Link>
          <Link to="/paid_users">
            <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              To'langan foydalanuvchilar
            </li>
          </Link>
          <span className="text-[12px] font-bold tracking-wider px-2 opacity-40">
            Loyihalar bo'limi
          </span>
          <Link to="/projects">
            <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              Barcha loyihalar
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

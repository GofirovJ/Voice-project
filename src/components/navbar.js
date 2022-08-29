import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#5046E5] h-[8%] flex">
        <div className="w-[15%] flex justify-between items-center px-8">
          <h2 className="text-[20px] text-white">Logo</h2>
        </div>
        <div className="w-[85%] flex justify-between items-center px-6">
          <label htmlFor="search">
            <input
              className="outline-none border-none py-[6px] px-6 rounded-md text-[14px]"
              type="search"
              placeholder="Searching ..."
              id="search"
            />
          </label>
          <h2 className="text-[20px] text-white cursor-pointer">J. Gofirov</h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;

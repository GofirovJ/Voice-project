import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#5046E5] h-[8%] flex">
        <div className="w-[20%] flex justify-between items-center px-8">
          <Link to="/" className="text-[20px] text-white">
            Logo
          </Link>
        </div>
        <div className="w-[80%] flex justify-end items-center px-6">
          {/* <label htmlFor="search">
            <input
              className="outline-none border-none py-[6px] px-6 rounded-md text-[14px]"
              type="search"
              placeholder="Searching ..."
              id="search"
            />
          </label> */}
          <button className="text-[20px] text-white cursor-pointer">
            <svg
              version="1.1"
              id="Ebene_1"
              x="0px"
              y="0px"
              width="30px"
              height="30px"
              viewBox="0 0 64 64"
              enableBackground="#fff"
            >
              <g>
                <path
                  fill="#fff"
                  d="M32,42c8.271,0,15-8.523,15-19S40.271,4,32,4s-15,8.523-15,19S23.729,42,32,42z M32,8c5.963,0,11,6.869,11,15
		s-5.037,15-11,15s-11-6.869-11-15S26.037,8,32,8z"
                />
                <path
                  fill="#fff"
                  d="M4.103,45.367l-4,12c-0.203,0.61-0.101,1.28,0.275,1.802C0.753,59.691,1.357,60,2,60h60c0.643,0,1.247-0.309,1.622-0.831
		c0.376-0.521,0.479-1.191,0.275-1.802l-4-12c-0.209-0.626-0.713-1.108-1.348-1.29l-14-4c-0.482-0.139-0.996-0.09-1.444,0.134
		L32,45.764l-11.105-5.553c-0.448-0.224-0.962-0.272-1.444-0.134l-14,4C4.815,44.259,4.312,44.741,4.103,45.367z M19.802,44.137
		l11.304,5.652c0.562,0.281,1.227,0.281,1.789,0l11.304-5.652l12.238,3.496L59.226,56H4.774l2.789-8.367L19.802,44.137z"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

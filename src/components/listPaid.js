import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_paid_user } from "../store/action";
import axios from "axios";

const baseURL = "https://open-budget-pro.herokuapp.com";
const PaidUsers = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    axios
      .get(`${baseURL}/v1/users/paid_users`)
      .then((response) => {
        // console.log("paid users",response);
        dispatch(get_paid_user(response.data));
      })
      .catch((error) => {
        return error;
      });
  }, [dispatch]);
  return (
    <>
      <div className="w-[80%] h-full bg-[#F7F9FB] p-20">
        <h1 className="text-[30px] text-[#2c384a] font-bold leading-[40px] py-2">
          To'lov qilingan foydalanuvchilar
        </h1>
        <div className="py-10 h-full overflow-y-scroll">
          <ul className="text-[20px] flex justify-between items-center bg-[#433aeb] text-white font-medium tracking-wider rounded-md p-6 my-4 ">
            <li className="w-[10%]">No:</li>
            <li className="w-[20%]">Telefon raqam:</li>
            <li className="w-[20%]">Sana:</li>
            <li className="w-[20%]">Loyiha nomi:</li>
            <li className="w-[10%]">Status</li>
          </ul>
          {state?.paidUsers?.object.map((user) => {
            return (
              <ul
                key={user.id}
                className="list p-6 my-4 border  hover:border-[#433aeb] font-medium tracking-wider text-[#2c384a] flex justify-between items-center transition duration-300 rounded-md"
              >
                <li className="w-[10%]">{user?.id}</li>
                <li className="w-[20%]">{user?.phoneNumber}</li>
                <li className="w-[20%]">{user?.createdAt.slice(0, 10)}</li>
                <li className="w-[20%]">{user?.project.title}</li>
                <li className="w-[10%] text-[#58e683] font-semibold text-[20px] tracking-wider">
                  To'landi
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PaidUsers;

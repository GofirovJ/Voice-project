import React from 'react'

const ListOfUsers = ({setModal}) => {
    const users = [
        {
          id: 1,
          phoneNumber: 991234567,
          createdAt: "29.08.2022",
          projectTitle: "Nutra",
        },
        {
          id: 2,
          phoneNumber: 991225555,
          createdAt: "29.08.2022",
          projectTitle: "Nutra",
        },
        {
          id: 3,
          phoneNumber: 991225555,
          createdAt: "29.08.2022",
          projectTitle: "Nutra",
        },
        {
          id: 4,
          phoneNumber: 991225555,
          createdAt: "29.08.2022",
          projectTitle: "Nutra",
        },
        {
          id: 5,
          phoneNumber: 991225555,
          createdAt: "29.08.2022",
          projectTitle: "Nutra",
        },
        {
          id: 6,
          phoneNumber: 991225555,
          createdAt: "29.08.2022",
          projectTitle: "Nutra",
        },
        {
          id: 7,
          phoneNumber: 991225555,
          createdAt: "29.08.2022",
          projectTitle: "Nutra",
        },
         {
          id: 8,
          phoneNumber: 991225555,
          createdAt: "29.08.2022",
          projectTitle: "Nutra",
        },
      ];
    const openModal = () =>{
        setModal(true)
      }
  return (
    <>
<div className="h-[92%] flex justify-between item-center">
        <div className="w-[15%] h-full  py-2 px-4 bg-[#ffffff]">
          <ul className="text-[18px] font-medium py-6 text-[#2c384aae]">
            <li className="mt-4 mb-6 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              Users
            </li>
            <span className="text-[14px] font-bold tracking-wider px-2">Status of Users</span>
            <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              Verified Users
            </li>
            <li className="my-2 cursor-pointer hover:bg-[#5046E5] hover:text-white transition duration-300 py-2 px-4 rounded-md">
              Paid Users
            </li>
          </ul>
        </div>
        <div className="w-[85%] h-full bg-[#F7F9FB] p-20">
          <h1 className="text-[30px] text-[#2c384a] font-bold leading-[40px] py-2">
            All users' details
          </h1>
          <div className="py-10 h-full overflow-y-scroll">
            <ul className="text-[20px] flex justify-between items-center bg-[#433aeb] text-white font-medium tracking-wider rounded-md p-6 my-4 ">
              <li className="w-[10%]">No:</li>
              <li className="w-[20%]">Phone Number:</li>
              <li className="w-[20%]">Date:</li>
              <li className="w-[20%]">Project title:</li>
              <li className="w-[10%]">Get Code:</li>
            </ul>
            {users.map((user) => {
              return (
                <ul
                  key={user.id}
                  className="list p-6 my-4 border  hover:border-[#433aeb] font-medium tracking-wider text-[#2c384a] flex justify-between items-center transition duration-300 rounded-md"
                >
                  <li className="w-[10%]">{user.id}</li>
                  <li className="w-[20%]">{user.phoneNumber}</li>
                  <li className="w-[20%]">{user.createdAt}</li>
                  <li className="w-[20%]">{user.projectTitle}</li>
                  <li className="w-[10%]"><button onClick={openModal} className="border border-solid border-[#433aeb] px-4 py-1 rounded-md hover:bg-[#433aeb] hover:text-white">Request</button></li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListOfUsers
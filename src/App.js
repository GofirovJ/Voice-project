// import { useEffect } from "react";
import axios from "axios"
function App() {
  const func = async () => {
      await  axios.get("http://192.168.4.162/v1/users")
      .then((res) => {
      console.log(res)
      }).catch((err) => {
        console.log(err);
    })
  }
  func()
  const users = [
    {
      id: 1,
      phoneNumber: 991234567,
      code: false,
      createdAt: "time",
      done: false,
    },
    {
      id: 2,
      phoneNumber: 991225555,
      code: false,
      createdAt: "time",
      done: false,
    },
  ];

  return (
    <>
      <div className="container h-[100vh] mx-auto flex justify-between item-center border border-black">
        <div className="w-[20%] h-full border-2 border-red-500 py-2">
          <ul className="text-[25px] font-medium py-2">
            <li className="my-2">Users</li>
            <li className="my-2">Unpaid Users</li>
            <li className="my-2">Paid Users</li>
          </ul>
        </div>
        <div className="main w-[80%] h-full border-2 border-red-500 py-2">
          <h1 className="text-[30px] font-bold leading-[40px] text-center">All users' details</h1>
          <div className="users">
            <ul className="list border border-black p-2 bg-slate-500">
              <li>No:</li>
              <li>Phone Number:</li>
              <li>Code:</li>
              <li>Date:</li>
              <li>Status</li>
            </ul>
            {users.map((user) => {
              return (
                <ul key={user.id} className="list_details">
                  <li>{user.id}</li>
                  <li>{user.phoneNumber}</li>
                  <li>{user.code}</li>
                  <li>{user.createdAt}</li>
                  <li>{user.done}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ListOfUsers from "./components/listOfUsers";
import Modal from "./components/modal";
import Navbar from "./components/navbar";
function App() {
  const [modal, setModal] = useState(false);
  // const func = async () => {
  //   await axios
  //     .get("http://192.168.4.162/v1/users")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // func();
 
  return (
    <>
    <div className="h-[100vh]">
      <Navbar />
      <ListOfUsers setModal={setModal} />
    </div>
      {modal ?
        (
         <Modal setModal={setModal}  />
        )
      :null}
    </>
  );
}

export default App;

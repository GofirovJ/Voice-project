import React, { useState } from 'react'
import ListOfUsers from '../components/listOfUsers'
import Modal from '../components/modal'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const Home = () => {
    const [modal, setModal] = useState(false);
    const [loader, setLoader] = useState(false);

  return (
    <>
    <div className="h-[100vh]">
        <Navbar />
        <div className="h-[92%] flex justify-between item-center">
        <Sidebar />
        <ListOfUsers setModal={setModal} setLoader={setLoader}  />
        </div>
    </div>
      {modal ?
        (
         <Modal setModal={setModal} loader={loader} />
        )
      :null}
    </>
  )
}

export default Home
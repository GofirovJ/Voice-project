import React from 'react'

const Modal = ({setModal}) => {
    const closeModal = () =>{
        setModal(false)
      }
  return (
    <>
         <div className="absolute w-full h-full top-0 left-0 bg-transparent">
            <div onClick={closeModal} className="fixed top-0 right-0 w-full h-full bg-[rgba(0,0,0,0.4)]"></div>
              <div className="absolute w-[50%] h-[50%] translate-x-[55%] translate-y-[40%] bg-white rounded-lg ">
               <div className='absolute right-1 top-3'>
                  <div
                  onClick={closeModal}
                  className="sidebarButton cursor-pointer w-[35px] h-[35px] bg-transparent relative mx-4 p-0 overflow-hidden text-[0] close"
                >
                  <span className="absolute block bg-white w-[30px] h-[3px] top-[16px] left-[2px] right-[2px] rounded-[2px]">
                    close button
                  </span>
                  </div>
               </div>
                <div className='flex justify-between items-center h-full'>
                  <div className="w-[40%] h-full py-4 px-6 ">
                    <ul>
                      <li className="mt-5">
                        <form className="flex justify-between items-center">
                          <input 
                          type="text"
                          placeholder="Type your message"
                          className="w-[75%] outline-none border border-[#433aeb] py-2 px-6 rounded-md text-[14px]"
                        />
                          <input
                            type="submit"
                            value="Send"
                            className="bg-[#433aeb]  text-white cursor-pointer px-4 py-2 rounded-md"
                          />

                        </form>
                      </li>
                      <li className="mt-5 text-[14px] font-bold tracking-wider">Deafult messages:</li>
                      <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">Message 1</li>
                      <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">Message 2</li>
                      <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">Message 3</li>
                      <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">Message 4</li>
                      <li className="mt-5 bg-slate-300 p-2 rounded-md cursor-pointer">Message 5</li>
                    </ul>
                  </div>
                  <div className="w-[50%]  flex flex-col justify-around items-center h-full py-4 px-6 ">
                    <div className=" h-[50%] w-full flex justify-center items-center">
                      Code waiting ...
                    </div>
                    <div className="  h-[50%] w-full flex justify-around items-center">
                      <button className="px-6 py-2 bg-[#42c07d] text-white cursor-pointer rounded-md">Submitted</button>
                      <button className="px-4 py-2 bg-[#cc4242] text-white cursor-pointer rounded-md">Unsubmitted</button>
                    </div>
                  </div>
                </div>
               
              </div>
          </div>
    </>
  )
}

export default Modal
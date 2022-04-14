import React from 'react';
import { Dialog,Transition  } from '@headlessui/react'
import { useContext,Fragment } from 'react'
import { MainContext } from '../../App';
import { SacredContext } from '../Sacredpet';
import { useState } from 'react';

const Feedmodal = (props) => {
    const appro = props.appro
    const deposit = props.deposit
    const {isOpen,setIsOpen,feed,id} = useContext(SacredContext)
    const {setBluramount,isapprove,lp,evma,setIsfeedopen,isfeedopen} = useContext(MainContext)
    const [amount,setAmount] = useState(0)

    function closeModal() {
        setIsfeedopen(false)
        setBluramount("blur(0px)")
      }
    
      function openModal() {
        setIsOpen(true)
      }
      var today = new Date();
      var date = (today.getDate()+1)+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  return (
    <>
      <Transition appear show={isfeedopen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block border-[#F9D390] border-2 w-full max-w-md p-6 my-8  text-left align-middle transition-all transform bg-[#1A2035] shadow-xl rounded-2xl backdrop-blur-lg">
              <div class="flex justify-between">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white"
                >
                  Feed
                </Dialog.Title>
                <button type="button" class="bg-white rounded-md  inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"   onClick={closeModal}>
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                </button>
              </div>
              <div class=" mt-[30px]">
                <p class="text-[12px] text-white">
                  You'll Feed
                </p>
              </div>
              <form class="grid grid-cols-10 gap-2 mt-[10px] mb-[10px]">
                  <div class=" flex col-span-10 row-span-6 bg-[#0C0F1A] rounded-md border-[#F9D390] border-2 relative">
                    <input   class="bg-[#0C0F1A] text-white h-[100%] w-[100%]"
                    type="number"
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                    />

                     <p class="absolute text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] top-0 right-2 translate-y-[25%]">EVM</p>
                  </div>
                  <div class="modalsamlltext bg-[#5F5F5F] rounded-[0.4vw] justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(Math.floor(evma*10/100))}>
                   10%
                  </div>
                  <div class="modalsamlltext bg-[#5F5F5F] rounded-[0.4vw]  justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(Math.floor(evma*25/100))}>25%
                  </div>
                  <div class="modalsamlltext bg-[#5F5F5F] rounded-[0.4vw]  justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(Math.floor(evma*50/100))}>50%
                  </div>
                  <div class="modalsamlltext bg-[#5F5F5F] rounded-[0.4vw]  justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(Math.floor(evma*75/100))}>75%
                  </div>
                  <div class="modalsamlltext bg-[#5F5F5F] rounded-[0.4vw]  justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(Math.floor(evma))}>MAX
                  </div>
                  <div class="modalsamlltext col-span-5 justify-end text-right items-center text-white text-xs mr-[10px]">{"EVM Balance: "+parseFloat(evma).toFixed(2)}
                  </div>
                  </form>
                  <div class=" mt-4 w-[300px]">
                    <p class="text-sm text-white " >
                      Select feed duration :
                    </p>
                  </div>
                  
                  <div class=" mt-[20px] w-[100%] flex justify-between items-center">
                    <p class="modalsamlltext text-[#E2B15B] bg-[#181D31] w-[19%] h-[30px] flex items-center justify-center rounded-sm border-[#E2B15B] border-[0.3px]" >1days</p>
                    <p class="modalsamlltext text-white bg-[#181D31] w-[19%] h-[30px] flex items-center justify-center rounded-sm border-white border-[0.3px]" >30 days</p>
                    <p class="modalsamlltext text-white bg-[#181D31] w-[19%] h-[30px] flex items-center justify-center rounded-sm border-white border-[0.3px]" >3 months</p>
                    <p class="modalsamlltext  text-white bg-[#181D31] w-[19%] h-[30px] flex items-center justify-center rounded-sm border-white border-[0.3px]" >6 months</p>
                    <p class="modalsamlltext text-white bg-[#181D31] w-[19%] h-[30px] flex items-center justify-center rounded-sm border-white border-[0.3px]" >1 Year</p>
                  </div>
                  <div class=" mt-[40px] w-[100%] flex justify-between items-cente">
                    <p class="text-[12px] text-[#c2c2c2]">End Date</p>
                    <p class="text-[12px] text-white">{date}</p>
                  </div>
                  <div class=" mt-[10px] w-[100%] flex justify-between items-cente border-b-[1px] border-[#c2c2c2]"></div>
                  <div class=" mt-[10px] w-[100%] flex justify-between items-cente">
                    <p class="text-[12px] text-[#c2c2c2]">EXP Gain</p>
                    <p class="text-[12px] text-white">{86400*amount}</p>
                  </div>
                  <p class="mt-[30px] text-[#c2c2c2] text-[10px]">By clicking Feed button, you won’t be able to withdraw your EVM until the last date of EVM lock.</p>
                  <div class=" col-span-10 row-span-6 mt-[20px] w-[100%] flex justify-center items-center">
                    <button class="goldbgbutton box-border border-[#000000] w-[100%] h-[50px] flex justify-center items-center" type="button" onClick={(e)=>feed(amount,id)}>
                      <p class="text-[#000000] text-2xl  " >{"+ FEED"}</p>
                    </button>
                  </div>
            </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Feedmodal;
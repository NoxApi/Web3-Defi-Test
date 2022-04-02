import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./../../pages/farmcom/farm.css"
import { MainContext } from '../../App';
import { Dialog,Transition  } from '@headlessui/react'
import { useContext,Fragment } from 'react'
import Contractshook from '../../pages/farmcom/contractshook';

const Mobilenav = () => {


    const {isMobileMenu,currentAccount,evma,setIsSuccess,setBluramount,isSuccess,setIsMobileMenu} = useContext(MainContext)
    const {connectWallet} = Contractshook()
    const [isclick,setIsclick] = useState("hidden")

    function click() {
      if (isclick==="hidden"){
        setIsclick("")
      }
      else{
        setIsclick("hidden")
      }
    }
    function closeModal() {
      setIsMobileMenu(false)
      setBluramount("blur(0px)")
      console.log(isMobileMenu)
    }
  return (
      <>
        <Transition appear show={isMobileMenu} as={Fragment}>
          <Dialog
            as="div"
            className="fixed top-[-24px] right-[0vw] z-10"
            onClose={closeModal}
          >
            <div className="">
  
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className=""
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                leave="ease-in duration-50"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0 "
              >
                <div class=" bg-[#121624] h-[110vh] w-[22vw] border-[#F9D390] border-[0.2vw] MBH:w-[100vw]">
                  {isMobileMenu!=="none"&&<div class="flex flex-col ">
                      <div class=" flex items-center self-center w-[] mt-[1vw]"  > 
                      
                      {!currentAccount && (
                      <button class="box-border border-[#000000]  bg-[#F9D390] " onClick={connectWallet}>
                          <p class="text-[#000000] text-[15px] py-[5px] px-[20px]" >{"Sign In"}</p>
                      </button>
                      )}

                      {currentAccount && (
                      <div class="flex mb-[1vh] items-center">
                          <div class="">
                          <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] font-bold text-[1vw] py-[0.6vh] px-[1vw] bp1:text-[0.85vw]" >{parseFloat(evma).toFixed(3) + " EVM"}</p>
                          <p class="text-white nav1:text-[0.8vw] " onClick={() => {navigator.clipboard.writeText(currentAccount)}}>{currentAccount.substring(0, 17)+"..."}</p>
                          </div>
                      <img  src={require('../../images/benz.PNG')} alt='logo' class="w-[3.5vw] h-[3.5vw] rounded-full " />
                    <button type="button" class=" rounded-md  mb-[10px] inline-flex items-end justify-center pb-[2px] text-gray-400 hover:text-gray-500  fixed top-0 right-0"   onClick={closeModal}>
                      <span class="sr-only">Close menu</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                      </div>
                      )}
                      </div> 
                      <div class="w-[100%] border-b-[0.1vw] border-[#F9D390]"></div>
                      <Link to="MP" class="ml-[2vw] mt-[3vw] text-white text-[1vw] MBH:text-[3vw]" > MARKETPLACE</Link>
                      <Link to="CAP" class="ml-[2vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw]" > CAPSULE</Link>
                      <div onClick={(e)=> click()} class="ml-[2vw] mt-[2vw] text-white text-[1vw] cursor-pointer MBH:text-[3vw]">DE-FI</div>
                      <Link to="Farm" class={"ml-[5vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] "+isclick}>FARM</Link>
                      <Link to="SP" class={"ml-[5vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] "+isclick} >SACRED BEAST</Link>
                      <Link to="Tribe" class="ml-[2vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw]" > TRIBE CHALLENGE</Link>
                  </div> }               
                  </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  };

export default Mobilenav;



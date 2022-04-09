import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from "./../../images/arrow.svg"
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
                <div class=" bg-[#121624] h-[110vh] w-[22vw] border-[#F9D390] border-[0.2vw] MBH:w-[100vw] MBH:h-[40vh] MBH:mt-[12vh] rounded-lg">
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
                          <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] font-bold text-[1vw] py-[0.6vh] px-[1vw] bp1:text-[0.85vw] MBH:text-[3vw]" >{parseFloat(evma).toFixed(3) + " EVM"}</p>
                          <p class="text-white nav1:text-[0.8vw] MBH:text-[2.3vw] " onClick={() => {navigator.clipboard.writeText(currentAccount)}}>{currentAccount.substring(0, 17)+"..."}</p>
                          </div>
                      <img  src={require('../../images/benz.PNG')} alt='logo' class="w-[3.5vw] h-[3.5vw] rounded-full MBH:h-[13vw] MBH:w-[13vw] " />
                    <button type="button" class=" rounded-md  mb-[10px] inline-flex items-end justify-center pb-[2px]  fixed MBH:hidden right-0 MBH:w-[4vw] MBH:h-[4vw]"   onClick={closeModal}>
                      <span class="sr-only">Close menu</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                      <img src={arrow} alt="logo" class="absolute right-[10vw] w-[5.7vw] top-7vh MB:hidden cursor-pointer" onClick={closeModal}/>
                    
                      </div>
                      )}
                      </div> 
                      <div class="w-[100%] border-b-[0.1vw] border-[#F9D390]"></div>
                      <Link to="MP" class="ml-[2vw] mt-[3vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0" onClick={closeModal} > MARKETPLACE</Link>
                      <Link to="CAP" class="ml-[2vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0 " onClick={closeModal} > CAPSULE</Link>
                      <div onClick={(e)=> click()} class="ml-[2vw] mt-[2vw] text-white text-[1vw] cursor-pointer MBH:text-[3vw] MBH:text-center MBH:ml-0">DE-FI</div>
                      <Link to="Farm" class={"ml-[5vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0  "+isclick} onClick={closeModal}>FARM</Link>
                      <Link to="SP" class={"ml-[5vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0 "+isclick} onClick={closeModal}>SACRED BEAST</Link>
                      <Link to="Tribe" class="ml-[2vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0" onClick={closeModal}> TRIBE CHALLENGE</Link>
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



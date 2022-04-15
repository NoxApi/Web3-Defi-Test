import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from "./../../images/uparrow.svg"
import mm from "./../../images/metamask.svg"
import orca from './../../images/orca.svg'
import copy from "./../../images/copy.svg"
import "./../../pages/farmcom/farm.css"
import { MainContext } from '../../App';
import { Dialog,Transition  } from '@headlessui/react'
import { useContext,Fragment } from 'react'

const Mobilenav = () => {


    const {isMobileMenu,currentAccount,evma,setIsSuccess,setBluramount,isSuccess,setIsMobileMenu,connectWallet} = useContext(MainContext)
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
    }
  return (
      <>
        <Transition appear show={isMobileMenu} as={Fragment}>
          <Dialog
            as="div"
            className="fixed  right-[0vw] z-10  top-[-20px] "
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
                enter="ease-out duration-300 "
                enterFrom=" translate-x-full "
                enterTo=" translate-x-0"
                leave="ease-in duration-300 "
                leaveFrom=" translate-x-0 "
                leaveTo=" translate-x-full"
              >
                <div class=" bg-[#121624] h-[110vh] w-[22vw] border-[#F9D390] border-[0.2vw] MBH:w-[100vw] MBH:h-[110vh] MBH:mt-[] rounded-lg MBH:bottom-0">
                  {isMobileMenu!=="none"&&
                  <div class="flex flex-col relative ">
                      <div class=" flex items-center self-center w-[] mt-[1vw] relative MBH:h-[10vh]"  > 
                      
                      {!currentAccount && (
                      <button class="goldbgbutton  box-border border-[#000000] relative  w-[13vw] h-[4vw] flex justify-center items-center MBH:w-[50vw] MBH:h-[7vh] " onClick={connectWallet}>
                      <img src={mm} alt="logo" className="w-[2vw] h-[2vw] MBH:w-[10vw] MBH:h-[10vw]"/>
                      <p class="text-[#000000]  text-[0.8vw] font-bold MBH:text-[2vw]" >{"Connect Wallet"}</p>
                      
                       </button>
                      )}

                      {currentAccount && (
                      <div class="flex mb-[1vh] items-center self-center align-middle">
                          <div class="">
                          <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] font-bold text-[1vw] py-[0.6vh] px-[1vw] bp1:text-[0.85vw] MBH:text-[3vw]" >{parseFloat(evma).toFixed(3) + " EVM"}</p>
                          <div class="flex">
                          <img src={copy} alt="logo" className="MBH:w-[4vw] MBH:h-[4vw] h-[1vw] cursor-pointer" onClick={() => {navigator.clipboard.writeText(currentAccount)}} />
                          <p class="text-white nav1:text-[0.8vw] MBH:text-[2.3vw] ml-[0.2vw]" >{currentAccount.substring(0, 13)+".."}</p>
                          </div>
                          </div>
                      <img  src={orca} alt='logo' class="w-[3.5vw] h-[3.5vw] rounded-full MBH:h-[13vw] MBH:w-[13vw] " />
                    
                    
                      
                    
                      </div>
                      )}
                      
                      </div> 
                      <div class="w-[100%] border-b-[0.1vw] border-[#F9D390] mt-[1vh]"></div>
                      <Link to="MP" class="mnaviga mtick ml-[2vw] mt-[3vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0" onClick={closeModal} > MARKETPLACE</Link>
                      <Link to="CAP" class="mnaviga ml-[2vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0 " onClick={closeModal} > CAPSULE</Link>
                      <Link to="Farm" class={"mnaviga ml-[2vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0  "} onClick={closeModal}>FARM</Link>
                      <Link to="SP" class={"mnaviga ml-[2vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0 "} onClick={closeModal}>SACRED BEAST</Link>
                      <Link to="Tribe" class="mnaviga ml-[2vw] mt-[2vw] text-white text-[1vw] MBH:text-[3vw] MBH:text-center MBH:ml-0" onClick={closeModal}> TRIBE CHALLENGE</Link>
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



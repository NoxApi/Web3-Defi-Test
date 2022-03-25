import React from 'react';
import { Link } from 'react-router-dom';
import "./../../pages/farmcom/farm.css"
import { useContext } from 'react'
import { MainContext } from '../../App';
import pickaxe from '../../images/pick axe.svg'
import Contractshook from '../../pages/farmcom/contractshook';

const Mobilenav = () => {

    const {isMobileMenu,currentAccount,evma} = useContext(MainContext)
    const {connectWallet} = Contractshook()
  return (
    <>
     
      <div style={{ background: "#121624",height:"100vh",width:"22vw",position:'fixed',top:"2px" ,right:"0px",zIndex:"10px",borderColor:"#F9D390",borderWidth:"2px",borderRadius:"1rem",display:isMobileMenu}}>
        {isMobileMenu!=="none"&&<div class="flex flex-col ">
            <div class=" flex items-center self-center w-[] mt-[1vw]"  > 
            {!currentAccount && (
            <button class="box-border border-[#000000] rounded-lg bg-[#F9D390] " onClick={connectWallet}>
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
            </div>
            )}
            </div> 
            <div class="w-[22vw] border-b-[0.1vw] border-[#F9D390]"></div>
            <Link to="MP" class="ml-[1vw] mt-[3vw] text-white text-[1vw]" >- MARKETPLACE</Link>
            <Link to="CAP" class="ml-[1vw] mt-[2vw] text-white text-[1vw]" >- CAPSULE</Link>
            <Link to="Farm" class="ml-[1vw] mt-[2vw] text-white text-[1vw]" >- DE-FI</Link>
            <Link to="Tribe" class="ml-[1vw] mt-[2vw] text-white text-[1vw]" >- TRIBE CHALLENGE</Link>
        </div> }               
      </div>
    </>
  );
};

export default Mobilenav;
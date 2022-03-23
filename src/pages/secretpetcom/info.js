import React from 'react';
import egg from "./../../images/egg.svg"
import { useState } from 'react';
const Info = () => {
  return (
  <>

      <div class="flex h-[100vh] w-[60vw] px-[2.5vw] ml-[20vw] flex-col" >
        <img src={egg} alt='logo' class="h-[20vw] w-[15vw] self-center mt-[5px]"  />
        <div class="self-center origin-center flex items-center ">
          <p class="text-black bg-red-200 px-[0.5vw] py-[0.2vw] text-center rotate-45 mx-[0.5vw]">0</p>
          <div class="self-center origin-center flex flex-col bg-slate-300">
            <p class="text-black  text-left   ">Sacred Egg</p>
            <p class="text-black  text-left  ">#125532</p>
          </div>
          
        </div>
        <div class="self-center origin-center flex">
            <button class="text-black  text-left mt-[1vw] bg-[#F9D390] py-[0.4vw] px-[3.5vw] border-2 rounded-md">RECLAM</button>
            <button class="text-black  text-left mt-[1vw]  bg-[#F9D390] py-[0.4vw] px-[4vw] border-2 rounded-md">{"FEED "}</button>
        </div>
        <div class="flex self-center w-[30vw] mt-[3vw] flex-col">
          <p class="text-left text-white">Amount</p>
          <div class="flex justify-between mt-[1vw]">
            <div class="flex justify-between bg-[#181D31] w-[14.7vw] py-[0.5vw] border-[1px] rounded-lg px-[0.3vw]">
              <p class="text-left w-[12vw] text-white">Inside pet</p>
              <p class="text-right w-[12vw] text-white">{"84.00"+" EVM"}</p>
            </div>
            <div class="flex justify-between bg-[#181D31] w-[14.7vw] py-[0.5vw] border-[1px] rounded-lg px-[0.3vw]">
              <p class="text-left w-[12vw] text-white">Inside pet</p>
              <p class="text-right w-[12vw] text-white">{"84.00"+" EVM"}</p>
            </div>
            
          </div> 
        </div>
      </div>  
  </>
  );
};

export default Info;
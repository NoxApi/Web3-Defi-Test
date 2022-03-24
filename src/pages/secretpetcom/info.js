import React from 'react';
import egg from "./../../images/egg.svg"
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const Info = () => {
  const { num } = useParams()
  return (
  <>

      <div class="flex h-[80%] w-[60vw] px-[2.5vw] ml-[20vw] flex-col mt-[3vw]" >
        <img src={egg} alt='logo' class="h-[20vw] w-[15vw] self-center mt-[5px]"  />
        <div class="self-center origin-center flex items-center my-[0.5vw]">
          <div class="bg-[#181D31] rotate-45 border-2">
            <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]  px-[0.55vw] py-[0.1vw] text-center rotate-[315deg] text-[1vw]">0</p>
          </div>
          <div class="self-center origin-center flex flex-col ml-[0.5vw]">
            <p class="text-white text-[0.9vw]  text-left   ">Sacred Egg</p>
            <p class="text-white text-left  ">#125532</p>
          </div>
          
        </div>
        <div class="self-center origin-center flex justify-between w-[21vw]">
            <button class="text-black  text-left mt-[1vw] bg-[#F9D390] py-[0.4vw] px-[3.5vw] border-2 rounded-md">RECLAM</button>
            <button class="text-black  text-left mt-[1vw]  bg-[#F9D390] py-[0.4vw] px-[4vw] border-2 rounded-md">{"FEED "}</button>
        </div>
        <div class="flex self-center w-[30vw] mt-[3vw] flex-col">
          <p class="text-left text-white text-[0.9vw]">Amount</p>
          <div class="flex justify-between mt-[1vw]">
            <div class="flex justify-between bg-[#181D31] w-[14.8vw] py-[0.8vw] border-[1px] rounded-lg px-[0.3vw]">
              <p class="text-left w-[12vw] text-white">Inside pet</p>
              <p class="text-right w-[12vw] text-white">{"84.00  EVM"}</p>
            </div>
            <div class="flex justify-between bg-[#181D31] w-[14.8vw] py-[0.8vw] border-[1px] rounded-lg px-[0.3vw]">
              <p class="text-left w-[12vw] text-white">Inside pet</p>
              <p class="text-right w-[12vw] text-white">{"84.00  EVM"}</p>
            </div>
            
          </div> 
        </div>

        <div class="flex self-center w-[30vw] mt-[3vw] flex-col">
          <p class="text-left text-white text-[0.9vw]">Feeded List</p>
          <div class="flex justify-start flex-col">
            <div class="flex justify-between bg-[#181D31] w-[30vw] py-[0.5vw] border-[1px] rounded-lg px-[0.3vw] mt-[1vw]">
                
              <div class="text-left w-[12vw] text-white flex flex-col justify-start  border-l-4 border-[#FFD54F] pl-[0.8vw] ml-[0.5vw]">
                <p class="text-[0.5vw]">feeded amount</p>
                <p class="text-[1vw]">{22.01+" EVM"}</p>
              </div>
              <div class="flex justify-between w-[20vw]">
                <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw] ">EXP Gain</p>
                  <p class="text-[0.65vw] mt-[0.2vw]">{200}</p>
                </div>
                <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw]">Feeded Date</p>
                  <p class="text-[0.65vw] mt-[0.2vw]">{"07/02/1999"}</p>
                </div>
                <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw]">Feeded Date</p>
                  <p class="text-[0.65vw] mt-[0.2vw]">{"07/02/1999"}</p>
                </div>
                <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw]">status</p>
                  <p class="text-[0.65vw] mt-[0.2vw]">{"Digesting"}</p>
                </div>
              </div>
            </div>
            <div class="flex justify-between bg-[#181D31] w-[30vw] py-[0.5vw] border-[1px] rounded-lg px-[0.3vw] mt-[1vw]">
                
              <div class="text-left w-[12vw] text-white flex flex-col justify-start  border-l-4 border-[#FFD54F] pl-[0.8vw] ml-[0.5vw]">
                <p class="text-[0.5vw]">feeded amount</p>
                <p class="text-[1vw]">{22.01+" EVM"}</p>
              </div>
              <div class="flex justify-between w-[20vw]">
                <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw] ">EXP Gain</p>
                  <p class="text-[0.65vw] mt-[0.2vw]">{200}</p>
                </div>
                <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw]">Feeded Date</p>
                  <p class="text-[0.65vw] mt-[0.2vw]">{"07/02/1999"}</p>
                </div>
                <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw]">Feeded Date</p>
                  <p class="text-[0.65vw] mt-[0.2vw]">{"07/02/1999"}</p>
                </div>
                <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw]">status</p>
                  <p class="text-[0.65vw] mt-[0.2vw]">{"Digesting"}</p>
                </div>
              </div>
            </div>
            <div class="flex justify-between bg-[#181D31] w-[30vw] py-[0.5vw] border-[1px] rounded-lg px-[0.3vw] mt-[1vw]">
                
                <div class="text-left w-[12vw] text-white flex flex-col justify-start  border-l-4 border-[#FFD54F] pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw]">feeded amount</p>
                  <p class="text-[1vw]">{22.01+" EVM"}</p>
                </div>
                <div class="flex justify-between w-[20vw]">
                  <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                    <p class="text-[0.5vw] ">EXP Gain</p>
                    <p class="text-[0.65vw] mt-[0.2vw]">{200}</p>
                  </div>
                  <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                    <p class="text-[0.5vw]">Feeded Date</p>
                    <p class="text-[0.65vw] mt-[0.2vw]">{"07/02/1999"}</p>
                  </div>
                  <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                    <p class="text-[0.5vw]">Feeded Date</p>
                    <p class="text-[0.65vw] mt-[0.2vw]">{"07/02/1999"}</p>
                  </div>
                  <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                    <p class="text-[0.5vw]">status</p>
                    <p class="text-[0.65vw] mt-[0.2vw]">{"Digesting"}</p>
                  </div>
                </div>
              </div>
              <div class="flex justify-between bg-[#181D31] w-[30vw] py-[0.5vw] border-[1px] rounded-lg px-[0.3vw] mt-[1vw]">
                
                <div class="text-left w-[12vw] text-white flex flex-col justify-start  border-l-4 border-[#FFD54F] pl-[0.8vw] ml-[0.5vw]">
                  <p class="text-[0.5vw]">feeded amount</p>
                  <p class="text-[1vw]">{22.01+" EVM"}</p>
                </div>
                <div class="flex justify-between w-[20vw]">
                  <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                    <p class="text-[0.5vw] ">EXP Gain</p>
                    <p class="text-[0.65vw] mt-[0.2vw]">{200}</p>
                  </div>
                  <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                    <p class="text-[0.5vw]">Feeded Date</p>
                    <p class="text-[0.65vw] mt-[0.2vw]">{"07/02/1999"}</p>
                  </div>
                  <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                    <p class="text-[0.5vw]">Feeded Date</p>
                    <p class="text-[0.65vw] mt-[0.2vw]">{"07/02/1999"}</p>
                  </div>
                  <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
                    <p class="text-[0.5vw]">status</p>
                    <p class="text-[0.65vw] mt-[0.2vw]">{"Digesting"}</p>
                  </div>
                </div>
              </div>
            
          </div> 
        </div>


      </div>  
  </>
  );
};

export default Info;
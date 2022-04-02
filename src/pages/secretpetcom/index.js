import React from 'react';
import egg from "./../../images/egg.svg"
import { useState,useContext } from 'react';
import { SacredContext } from '../Sacredpet';
import Sbcontracthook from './sbcontracthook';

const Mintpet = () => {
  const {mint } = Sbcontracthook()
  const {eggsamount,setEggsamount} = useContext(SacredContext)
  const price= eggsamount*10
  return (
  <>

      <div class="grid grid-cols-5 gap-[2vw] h-[800px] w-[60vw] px-[2.5vw] ml-[20vw]" >
        {/* griditem */}
        <div class="row-span-4 col-span-2 w-[100%] h-[600px] flex justify-end items-center flex-col" >
          <img src={egg} alt='logo' class="h-[500px] w-[17vw]"  />
          <div class="box-border rounded-3xl  w-[20vw] h-[85px] bg-[#1A2035] border-2 border-[#F9D390] flex content-center">
            <div class=" p-[1vw] flex flex-col items-center justify-center w-[20vw]">
            <p class=" font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-[1.3vw]">{"10.00"+" EVM"}</p>
            <p class="text-[#C2C2C2]">{"$ "+"200.00"}</p>
              
            </div>
          </div>
          </div>       
         
        <div class="row-span-4 col-span-3 w-[100%] h-[600px] flex items-start justify-between flex-col px-[2vw] pt-[60px] text-left" >
          <div>
            <p class="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-3xl  font-serif">SACRED PET</p>
            <p class="mt-[30px] text-[0.85vw] text-[#c2c2c2]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ultrices enim sit at ligula leo eget. Porta purus eleifend tortor, ut viverra. In egestas dignissim risus arcu nunc amet accumsan nunc varius. Sagittis posuere viverra pretium tincidunt mattis.</p>
          </div>
          <div class="w-[100%]">
            <div class="flex justify-between ">
              <button onClick={(e)=>setEggsamount(eggsamount-1)} class="bg-[#1A2035] text-white h-[50px] w-[12%] rounded-lg border-2 text-center">-</button>
              <input   class="bg-[#0C0F1A] text-white h-[50px] w-[70%] rounded-lg border-2 text-center"
                    type="number"
                    value={eggsamount}
                    onChange={(e)=> setEggsamount(e.target.value)}
                    />
              <button onClick={(e)=>setEggsamount(parseInt(eggsamount)+1)} class="bg-[#1A2035] text-white h-[50px] w-[12%] rounded-lg border-2 text-center">+</button>
            </div>
            <div class="flex justify-between mt-[30px]">
              <p class="text-[0.75vw] text-[#c2c2c2]">Your balance</p>
              <p class="text-[0.85vw] text-[#c2c2c2]">{10.232+" EVM"}</p>
            </div>  
            <div class="flex justify-between mt-[20px]">
              <p class="text-[0.75vw] text-[#c2c2c2]">Pet Price</p>
              <p class="text-[0.85vw] text-[#c2c2c2]">{price+" EVM"}</p>
            </div>  
            <div class="border-b-2 border-[#5f5f5f] mt-[20px]" ></div>
            <div class="flex justify-between mt-[20px]">
              <p class="text-[1vw] text-white">Total Expense</p>
              <p class="text-[1.1vw] text-white">{price+" EVM"}</p>
            </div>  
            <div class="flex justify-end mt-[20px]">
              <p class="text-[0.70vw] text-[#c2c2c2]">{"$ "+200.00}</p>
            </div>              
          </div>

          <button onClick={mint} class="bg-gradient-to-b from-[#F9D390] to-[#E2B15B] w-[100%] h-[45px] rounded-lg border-2">
            <p class="font-bold">mint</p>
          </button>

        </div> 
      </div>  
  </>
  );
};

export default Mintpet;
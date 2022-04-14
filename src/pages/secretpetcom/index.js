import React from 'react';
import egg from "./../../images/egg.svg"
import mm from "./../../images/metamask.svg"
import { useContext } from 'react';
import { SacredContext } from '../Sacredpet';
import { MainContext } from '../../App';

const Mintpet = () => {
  const {eggsamount,setEggsamount,mint,allowanceamount,approveEVM} = useContext(SacredContext)
  const {evma,connectWallet}= useContext(MainContext)
  const price= eggsamount*10
  console.log(allowanceamount)
  return (
  <div class="h-[100vh] MBH:h-auto">

      <div class="grid grid-cols-5 gap-[2vw] h-[35vw] w-[60vw] px-[2.5vw] ml-[20vw] MBH:hidden" >
        {/* griditem */}
        <div class="row-span-4 col-span-2 w-[100%] h-[35vw] flex justify-end items-center flex-col" >
          <img src={egg} alt='logo' class="h-[31vw] w-[17vw]"  />
          <div class="box-border rounded-3xl  w-[20vw] h-[5vw] bg-[#1A2035] border-2 border-[#F9D390] flex content-center">
            <div class=" p-[1vw] flex flex-col items-center justify-center w-[20vw]">
            <p class=" font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-[1.3vw]">{"10.00"+" EVM"}</p>
            <p class="text-[#C2C2C2]">{"$ "+"200.00"}</p>
              
            </div>
          </div>
          </div>       
         
        <div class="row-span-4 col-span-3 w-[100%] h-[35vw] flex items-start justify-between flex-col px-[2vw] pt-[2vw] text-left" >
          <div>
            <p class="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-[2vw]  font-serif">SACRED PET</p>
            <p class="mt-[1.5vw] text-[0.85vw] text-[#c2c2c2]">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ultrices enim sit at ligula leo eget. Porta purus eleifend tortor, ut viverra. In egestas dignissim risus arcu nunc amet accumsan nunc varius. Sagittis posuere viverra pretium tincidunt mattis."}</p>
          </div>
          <div class="w-[100%] mt-[1vw]">
            <div class="flex justify-between ">
              <button onClick={(e)=>setEggsamount(eggsamount-1)} class="bg-[#1A2035] text-white h-[3vw] w-[12%] rounded-lg border-2 text-center">-</button>
              <input   class="bg-[#0C0F1A] text-white h-[3vw] w-[70%] rounded-lg border-2 text-center"
                    type="number"
                    value={eggsamount}
                    onChange={(e)=> setEggsamount(e.target.value)}
                    />
              <button onClick={(e)=>setEggsamount(parseInt(eggsamount)+1)} class="bg-[#1A2035] text-white h-[3vw] w-[12%] rounded-lg border-2 text-center">+</button>
            </div>
            <div class="flex justify-between mt-[1.5vw]">
              <p class="text-[0.75vw] text-[#c2c2c2]">Your balance</p>
              <p class="text-[0.85vw] text-[#c2c2c2]">{parseFloat(evma).toFixed(3) + " EVM"+" EVM"}</p>
            </div>  
            <div class="flex justify-between mt-[1.5vw]">
              <p class="text-[0.75vw] text-[#c2c2c2]">Pet Price</p>
              <p class="text-[0.85vw] text-[#c2c2c2]">{price+" EVM"}</p>
            </div>  
            <div class="border-b-2 border-[#5f5f5f] mt-[1.5vw]" ></div>
            <div class="flex justify-between mt-[1.5vw]">
              <p class="text-[1vw] text-white">Total Expense</p>
              <p class="text-[1.1vw] text-white">{price+" EVM"}</p>
            </div>  
            <div class="flex justify-end mt-[1.5vw]">
              <p class="text-[0.70vw] text-[#c2c2c2]">{"$ "+price*10}</p>
            </div>              
          </div>
          {allowanceamount>0&&<button onClick={(e)=>mint(eggsamount)} class="goldbgbutton w-[100%] h-[3vw] flex items-center justify-center">
            <p class="font-bold">Mint</p>
          </button>}
          {allowanceamount===0&&<button onClick={(e)=>approveEVM()} class="goldbgbutton w-[100%] h-[3vw] flex items-center justify-center">
            <p class="font-bold">Approve</p>
          </button>}
          {allowanceamount===-1&&<button onClick={(e)=>connectWallet()} class="goldbgbutton w-[100%] h-[3vw] flex items-center justify-center">
            <img src={mm} alt="logo" />
            <p class="font-bold text-[1vw]" >Connect wallet</p>
          </button>}

        </div> 
      </div>
      {/* MOBILE */}
      <div class=" h-[100%] w-[80vw] mx-[10vw]  MB:hidden" >
        <div class=" w-[100%] h-[450px] flex justify-between items-center flex-col my-[5vh]" >
            <img src={egg} alt='logo' class="h-[300px] w-[100%]"  />
            <div class="box-border rounded-2xl  w-[100%] h-[100px] bg-[#1A2035] border-2 border-[#F9D390] flex content-center">
              <div class=" p-[1vw] flex flex-col items-center justify-center w-[100%]">
              <p class=" font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-[26px]">{"10.00"+" EVM"}</p>
              <p class="text-[#C2C2C2]">{"$ "+"200.00"}</p> 
              </div>
            </div>
        </div>
        {/* loren ipsum  */}
        <div class=" w-[100%] h-[500px] flex items-start justify-between flex-col text-left " >
          <div class="">
            <p class="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-[35px]  font-serif">SACRED PET</p>
            <p class="mt-[1.5vw] text-[15px] text-[#c2c2c2]">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus ultrices enim sit at ligula leo eget. Porta purus eleifend tortor, ut viverra. In egestas dignissim risus arcu nunc amet accumsan nunc varius. Sagittis posuere viverra pretium tincidunt mattis."}</p>
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
            <div class="flex justify-between mt-[20px]">
              <p class="text-[16px] text-[#c2c2c2]">Your balance</p>
              <p class="text-[16px] text-[#c2c2c2]">{10.232+" EVM"}</p>
            </div>  
            <div class="flex justify-between mt-[20px]">
              <p class="text-[16px] text-[#c2c2c2]">Pet Price</p>
              <p class="text-[16px] text-[#c2c2c2]">{price+" EVM"}</p>
            </div>  
            <div class="border-b-2 border-[#5f5f5f] mt-[1.5vw]" ></div>
            <div class="flex justify-between mt-[20px]">
              <p class="text-[18px] text-white">Total Expense</p>
              <p class="text-[18px] text-white">{price+" EVM"}</p>
            </div>  
            <div class="flex justify-end mt-[1.5vw]">
              <p class="text-[14px] text-[#c2c2c2]">{"$ "+200.00}</p>
            </div>              
          </div>
          {allowanceamount>0&&<button onClick={(e)=>mint(eggsamount)} class="goldbgbutton w-[100%] h-[60px]  border-2">
            <p class="font-bold">Mint</p>
          </button>}
          {allowanceamount===0&&<button onClick={(e)=>approveEVM()} class="goldbgbutton w-[100%] h-[60px]  border-2">
            <p class="font-bold">Approve</p>
          </button>}
          {allowanceamount===-1&&<button onClick={(e)=>mint(eggsamount)} class="goldbgbutton w-[100%] h-[60px]  border-2">
            <p class="font-bold">Connect wallet</p>
          </button>}

        </div> 



      </div>
      
      
  </div>
  );
};

export default Mintpet;
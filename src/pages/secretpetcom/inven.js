import eggpic from "./../../images/egg.svg"
import { SacredContext } from "../Sacredpet";
import { MainContext } from "../../App";
import { Link } from "react-router-dom";
import { useState,useContext,useEffect} from "react";
import Sbcontracthook from "./sbcontracthook";
const Inven = () => {
  const {mint,geteggidbyindex,tokenURI } = Sbcontracthook()
  const [currentpage,setCurrentpage] = useState(1)
  const {egggs,fetchingeggs,setFetchingeggs } = useContext(SacredContext)
  const {eggowned,rerender,setRerender} = useContext(MainContext)
  const numpage=[];
  const lastitemindex = currentpage * 8;
  const firstitemindex = lastitemindex - 8;
  const currentpageitems = egggs.slice(firstitemindex,lastitemindex) 

  for (let i = 1; i<= Math.ceil(egggs.length/8); i++){
    numpage.push(i)
  }

  
useEffect(() => {
  console.log("Inventory Rerender")
}, [])
  return (
  <>
     <div class="grid grid-cols-11 gap-[2vw] h-[50vw] w-[80vw] px-[2.5vw] ml-[10vw] " >
        {/* griditem */}
        <div class="row-span-10 col-span-3 w-[14vw] h-[48.5vw] flex justify-start flex-col bg-gradient-to-b from-[#1A2035] via-[#1A2035] to-transparent my-[30px] border-2 rounded-lg border-[#CA9E51]" >
            <div class="flex mt-[20px] mx-[1vw] justify-between ">
              <p class="text-[0.95vw] text-[#c2c2c2]">Filter</p>
              <p class="text-[0.65vw] text-[#F9D390]">{"Reset"}</p>
            </div>  

            
            <div class="border-b-2 border-[#CA9E51] mt-[20px] mx-[10px]" ></div>
            <div class="flex mt-[20px] justify-between mx-[1vw]">
              <p class="text-[0.80vw] text-[#c2c2c2]">Level</p>
            </div>
            <div class="flex mt-[20px] mx-[1vw] justify-between ">
              <div class="bg-[#161E2F] w-[5vw] h-[2.2vw] flex justify-start items-center border-[0.1vw] rounded-[10%] border-[#CA9E51]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{0}</p>
              </div>
              <p class="text-[0.95vw] text-[#c2c2c2]">{"-"}</p>
              <div class="bg-[#161E2F] w-[5vw] h-[2.2vw] flex justify-start items-center border-[0.1vw] rounded-[10%] border-[#CA9E51]">
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{5}</p>
              </div>
            </div>  
        </div>
        {/* inven grid */}
        <div class="row-span-8 col-span- w-[56vw] h-[45vw] my-[30px]"  >
          <div class="flex justify-between items-center">
            <p class="text-[1.1vw] text-[#c2c2c2]">{eggowned+" Result"}</p>
            <div class="flex  ">
              <div class="bg-[#161E2F] w-[10vw] h-[2vw] flex justify-start items-center border-[0.1vw] border-[#CA9E51] mr-[3.75vw]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{"Search"}</p>
              </div>
              <div class="bg-[#161E2F] w-[10vw] h-[2vw] flex justify-start items-center border-[0.1vw] border-[#CA9E51] mr-[3.75vw]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{"Name Acending"}</p>
              </div>
            </div>
          </div>
          {!fetchingeggs&&<div class="grid grid-cols-4 gap-[1vw] h-[40vw] w-[54vw] mt-[20px] " >
            {currentpageitems.map((egg) => (
          <Link key={egg.name} to={"/SP/Info/"+((egg.name).split("#"))[1]} class="row-span-1 col-span-1 w-[11vw] h-[19vw] flex-col justify-between">
            <div class="bg-gradient-to-b from-transparent via-transparent to-[#EEC377]  border-[1px] border-[] flex flex-col ">
              <div class="flex justify-between items-center">
                <p class="  text-left px-[0.3vw] py-[0.1vw] bg-[#fe0000] mt-[0.5vw] ml-[0.2vw] rounded-md text-white text-[0.7vw]"  >{"new"}</p>
                <div class="bg-[#181D31] rotate-45 border-2  flex align-middle mt-[0.7vw] mr-[0.6vw]">
                  <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]  px-[0.48vw] py-[0.04vw] text-center rotate-[315deg] text-[1vw] font-bold relative">{(egg.evolForm)-1}</p>
                </div>
              </div>
              <img src={egg.image} alt='logo' class="h-[11vw] w-[8vw] mb-[0.5vw] self-center" />
             </div>
             <p class="text-left text-white text-[0.9vw] mt-[0.5vw]" >{((egg.name).split("#"))[0]}</p>
             <p class="text-left text-white text-[0.5vw]" >{"#"+((egg.name).split("#"))[1]}</p>
             <div class="flex justify-between mt-[0.5vw]">
               <p class="text-white text-[0.9vw] ">Amount</p>
               <p class="text-[#F9D390] text-[0.9vw]">{200+" EVM"}</p>
             </div>
             <p class="text-right text-[#C2C2C2] text-[0.5vw]" >{"$ "+1000000000}</p>
          </Link>
            ))}
          </div>}
          {fetchingeggs&&<div class="flex h-[40vw] w-[54vw] mt-[20px] items-center justify-center " >
           
            <div class=" animate-spin border-[0.5vw] border-[#1A2035] rounded-[50%] w-[4vw] h-[4vw] mr-[1vw] border-t-[#E2B15B]"></div>
            <p class=" animate-pulse text-[2vw] text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]">Fetching NFT List </p>
          
          </div>}
          {/* footer */}
          <div class="row-span-2 col-span-8  mt-[2vw]  flex justify-center items-center " >
            {currentpage!=1&&<div onClick = {(e) => setCurrentpage(currentpage-1)} class=" cursor-pointer bg-gradient-to-b from-transparent via-transparent to-[#EEC377] rounded-lg border-[1px] border-[#FFD54F] ">
            <p class="text-[1vw] text-[#FFD54F] px-[0.5vw]">{"<"}</p>
            </div>}
            {currentpage==1&&<div  class="  bg-transparent rounded-lg border-[1px] border-[#FFD54F] ">
            <p class="text-[1vw] text-[#FFD54F] px-[0.5vw]">{"<"}</p>
            </div>}
            <div class="bg-gradient-to-b from-transparent via-transparent to-[#EEC377] rounded-lg border-[1px] border-[#FFD54F] ml-[0.2vw]">
            <p class="text-[1vw] text-white px-[0.5vw] ">{currentpage}</p>
            </div>
            <div class="">
            <p class="text-[1vw] text-white px-[0.5vw]">{"of"}</p>
            </div>
            {numpage.map((index) => (
            <div class="">
            <p onClick = {(e) => setCurrentpage(index)} class="text-[1vw]  text-white px-[0.5vw] cursor-pointer">{numpage[index-1]}</p>
            </div>
            ))}
              {currentpage!=numpage.length&&<div onClick = {(e) => setCurrentpage(currentpage+1)} class=" cursor-pointer bg-gradient-to-b from-transparent via-transparent to-[#EEC377] rounded-lg border-[1px] border-[#FFD54F]">
            <p class="text-[1vw] text-[#FFD54F] px-[0.5vw]">{">"}</p>
              </div>}
              {currentpage==numpage.length&&<div class=" bg-transparent to-[#EEC377] rounded-lg border-[1px] border-[#FFD54F]">
            <p class="text-[1vw] text-[#FFD54F] px-[0.5vw]">{">"}</p>
              </div>}
          </div>
        </div>
      </div>  
  </>
  );
};

export default Inven;
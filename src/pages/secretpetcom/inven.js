import eggpic from "./../../images/egg.svg"
import { SacredContext } from "../Sacredpet";
import { MainContext } from "../../App";
import { Link } from "react-router-dom";
import { useState,useContext,useEffect} from "react";
import Sbcontracthook from "./sbcontracthook";
import { ethers } from "ethers";
import math from "mathjs";
const Inven = () => {
  const {NFTlist,fetchingeggs,setFetchingeggs,egggsbalance,getbalance,setEgggs,geteggidbyindex,tokenURI,} = useContext(SacredContext)
  const {eggowned,rerender} = useContext(MainContext)
  const [currentpage,setCurrentpage] = useState(1)
  const [currentpageitems,setCurrentpageitems] = useState([])
  const numpage=[];
  const lastitemindex = currentpage * 8;
  const firstitemindex = lastitemindex - 8;

  const [currentpagem,setCurrentpagem] = useState(1)
  const [currentpageitemsm,setCurrentpageitemsm] = useState([])
  const numpagem=[];
  const lastitemindexm = currentpagem * 4;
  const firstitemindexm = lastitemindexm - 4;
   

  for (let i = 1; i<= Math.ceil(eggowned/8); i++){
    numpage.push(i)
  }
  for (let i = 1; i<= Math.ceil(eggowned/4); i++){
    numpagem.push(i)
  }
  
function expbars(exp,evolform){{
   if((exp/10**18)*100/((10**6)*(5**evolform))>100){
     return 100;
   }
   else{
    return Math.ceil((exp/10**18)*100/((10**6)*(5**evolform)))
   }
  }
}
useEffect(() => {
  setCurrentpageitems(NFTlist.slice(firstitemindex,lastitemindex))
  setCurrentpageitemsm(NFTlist.slice(firstitemindexm,lastitemindexm))
  console.log("Inventory Rerender")
}, [NFTlist,currentpage,currentpagem])
  return (
  <div class='h-[110vh] MBH:h-auto'>
     <div class="grid grid-cols-11 gap-[2vw] h-[auto] w-[80vw] px-[2.5vw] ml-[10vw] MBH:hidden" >
        {/* griditem */}
        <div class="row-span-10 col-span-3 w-[14vw] h-[95%] flex justify-start flex-col bg-gradient-to-b from-[#1A2035] via-[#1A2035] to-transparent my-[30px] border-2 rounded-lg border-[#CA9E51]" >
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
        <div class="col-span-8  w-[56vw] h-[100%] my-[30px]"  >
          <div class="flex justify-between items-center">
            <p class="text-[1.1vw] text-[#c2c2c2]">{eggowned+" Result"}</p>
            <div class="flex  ">
              <div class="bg-[transparent] w-[10vw] h-[2vw] flex justify-start items-center border-[0.1vw] border-[#CA9E51] mr-[3.75vw]"  >
                <p class="text-[0.8vw] text-[#c2c2c2] ml-[0.5vw]">{"Search"}</p>
              </div>
              <div class="bg-[transparent] w-[10vw] h-[2vw] flex justify-start items-center border-[0.1vw] border-[#CA9E51] mr-[3.75vw]"  >
                <p class="text-[0.8vw] text-[#c2c2c2] ml-[0.5vw]">{"Name Acending"}</p>
              </div>
            </div>
          </div>
          {!fetchingeggs&&<div class="grid grid-cols-4 gap-[1vw] h-[40vw] w-[54vw] mt-[20px] " >
            {currentpageitems.map((egg,index) => (
              <Link key={egg.name} to={"/SP/Info/"+((egg.name).split("#"))[1]} class="row-span-1 col-span-1 w-[11vw] h-[19vw] flex-col justify-between">
                <div class=" bginven  bordergold flex flex-col rounded-[0.3vw] border-[0.1vw] border-[#EEC377]">
                  <div class="flex justify-between items-center ">
                    <p class="  text-center  bg-[#EF5350] ml-[0.6vw] px-[0.3vw] pb-[0.2vw] rounded-md text-white text-[0.7vw]"  >{"New"}</p>
                    <div class="bg-[#181D31] rotate-45 border-[0.1vw]  border-[#5F5F5F] rounded-[0.3vw]  flex mt-[0.7vw] mr-[0.6vw] w-[1.5vw] h-[1.5vw] justify-center">
                      <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]  rotate-[315deg] text-[0.8vw] font-bold ">{egg.evolForm}</p>
                    </div>
                  </div>
                  <img src={egg.image} alt='logo' class="h-[10.5vw] w-[9vw] mb-[0.5vw] self-center" />
                  {expbars(egg.exp,egg.evolForm)<=0&&<div style={{background: "linear-gradient(180deg, #F9D390 0%, #E2B15B 100%)",height:"0.5vw",zIndex:"100px",width:(expbars(egg.exp,egg.evolForm))+"%",boxShadow:"0px 0px 0.5vw #CA9E51,1px 1px 0.5vw rgba(0,0,0,0),inset -2px -2px 20px rgba(255,255,255,0.1),inset 2px 2px 0.2vw rgba(0,0,0,0.7)",borderRadius:"0.1vw"}} >
                </div>}
                  {expbars(egg.exp,egg.evolForm)>0&&<div style={{background: "linear-gradient(180deg, #F9D390 0%, #E2B15B 100%)",height:"0.5vw",zIndex:"100px",width:(expbars(egg.exp,egg.evolForm))+"%",boxShadow:"0px 0px 0.5vw #CA9E51,1px 1px 0.5vw rgba(0,0,0,0),inset -2px -2px 20px rgba(255,255,255,0.1),inset 2px 2px 0.2vw rgba(0,0,0,0.7)",borderRadius:"0.1vw"}} >
                </div>}
                </div>
            
                <p class="text-left text-white text-[0.9vw] mt-[0.5vw]" >{((egg.name).split("#"))[0]}</p>
                <p class="text-left text-white text-[0.6vw]" >{"#"+((egg.name).split("#"))[1]}</p>
                <div class="flex justify-between mt-[0.5vw]">
                  <p class="text-white text-[0.9vw] ">Amount</p>
                  <p class="text-[#F9D390] text-[0.9vw]">{ethers.utils.formatUnits((egggsbalance[index])[0])+" EVM"}</p>
                </div>
                <p class="text-right text-[#C2C2C2] text-[0.5vw]" >{"$ "+ethers.utils.formatUnits((egggsbalance[index])[0])*10}</p>
              </Link>
            ))}
          </div>}
          {fetchingeggs&&<div class="flex h-[40vw] w-[54vw] mt-[20px] items-center justify-center " >
           
            <div class=" animate-spin border-[0.5vw] border-[#1A2035] rounded-[50%] w-[4vw] h-[4vw] mr-[1vw] border-t-[#E2B15B]"></div>
            <p class=" animate-pulse text-[2vw] text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]">Fetching NFT List </p>
          
          </div>}
          {/* footer */}
          <div class="row-span-2 col-span-8  mt-[2vw]  flex justify-center items-center " >
            {currentpage!=1&&<div onClick = {(e) => setCurrentpage(currentpage-1)} class=" cursor-pointer bginven rounded-lg border-[1px] border-[#F9D390] w-[2.1vw] h-[2vw] flex justify-center items-center">
            <p class="text-[1vw] text-[#F9D390] px-[0.5vw]">{"<"}</p>
            </div>}
            {currentpage==1&&<div  class="  bg-transparent rounded-lg border-[1px] border-[#F9D390] ">
            <p class="text-[1vw] text-[#F9D390] px-[0.5vw]">{"<"}</p>
            </div>}
            <div class="bg-[#1A2035] to-[#EEC377] rounded-lg border-[1px] border-[#F9D390] ml-[0.2vw] w-[2.5vw] h-[2vw] flex justify-center items-center">
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
              {currentpage!=numpage.length&&<div onClick = {(e) => setCurrentpage(currentpage+1)} class=" cursor-pointer bginven rounded-lg border-[1px] border-[#F9D390] w-[2.1vw] h-[2vw] flex justify-center items-center">
            <p class="text-[1vw] text-[#F9D390] px-[0.5vw]">{">"}</p>
              </div>}
              {currentpage==numpage.length&&<div class=" bg-transparent to-[#EEC377] rounded-lg border-[1px] border-[#F9D390]">
            <p class="text-[1vw] text-[#F9D390] px-[0.5vw]">{">"}</p>
              </div>}
          </div>
        </div>
      </div>  
      {/* MOBILE */}
      <div class=" h-[auto] w-[85vw] mx-[7.5vw]  MB:hidden" >
        <div class="flex justify-between items-center mt-[20px]">
          <div class="bg-[transparent] w-[70%] h-[40px] flex justify-start items-center border-[1px] rounded-md border-[#CA9E51] mr-[3.75vw]"  >
            <p class="text-[3.5vw] pl-[30px] text-[#c2c2c2] ml-[0.5vw]">{"Search"}</p>
          </div>
          <div class="bg-[transparent] w-[32%] h-[40px] flex justify-center items-center border-[1px] rounded-md border-[#CA9E51] mr-[3.75vw]"  >
            <p class="text-[3.5vw] pl-[10px] text-[#c2c2c2] ml-[0.5vw]">{"Filter"}</p>
          </div>
        </div>
        <div class="flex justify-between items-center mt-[10px]">
          <div class="bg-[transparent] w-[50%] h-[40px] flex justify-start items-center  mr-[3.75vw]"  >
            <p class="text-[23px]  text-[#c2c2c2] ml-[0.5vw]">{eggowned+" Result"}</p>
          </div>
          <div class="bg-[transparent] w-[45%] h-[40px] flex justify-start items-center border-[1px] rounded-md border-[#CA9E51] mr-[3.75vw]"  >
            <p class="text-[3.5vw] pl-[10px] text-[#c2c2c2] ml-[0.5vw]">{"Name Acending"}</p>
          </div>
        </div>
        {/* mapping */}
        {!fetchingeggs&&<div class="grid grid-cols-2  h-[140vw] w-[85vw] mt-[20px] " >
            {currentpageitemsm.map((egg,index) => (
              <Link key={egg.name} to={"/SP/Info/"+((egg.name).split("#"))[1]} class="row-span-1 col-span-1 w-[40vw] h-[65vw] flex-col justify-between">
                <div class=" bginven  bordergold flex flex-col rounded-[10px] border-[0.1vw] border-[#EEC377]">
                  <div class="flex justify-between items-center w-[100%] h-[40px] ">
                    <p class="  text-center  bg-[#EF5350] ml-[0.6vw] px-[0.3vw] pb-[0.2vw] rounded-md text-white text-[17px]"  >{"New"}</p>
                    <div class="bg-[#181D31] rotate-45 border-[2px]  border-[#5F5F5F] rounded-[6px]  flex mt-[4vw] mr-[2vw] w-[6.5vw] h-[6.5vw] justify-center">
                      <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]  rotate-[315deg] text-[23px] font-bold ">{egg.evolForm}</p>
                    </div>
                  </div>
                  <img src={egg.image} alt='logo' class="h-[40vw] w-[33vw] mb-[0.5vw] self-center" />
                  {expbars(egg.exp,egg.evolForm)>0&&<div style={{background: "linear-gradient(180deg, #F9D390 0%, #E2B15B 100%)",height:"10px",zIndex:"100px",width:(expbars(egg.exp,egg.evolForm))+"%",borderWidth:"2px",borderRadius:"5px",borderColor:"#CA9E51",boxShadow:"0px 0px 2vw #CA9E51,1px 1px 0.5vw rgba(0,0,0,0),inset -2px -2px 20px rgba(255,255,255,0.1),inset 2px 2px 0.5vw rgba(0,0,0,0.5)",borderRadius:"0.1vw",borderRadius:"0.5vw",marginBottom:"0.3vw"}} >
                </div>}
                {!expbars(egg.exp,egg.evolForm)>0&&<div style={{background: "transparent",height:"10px",zIndex:"100px",width:(expbars(egg.exp,egg.evolForm))+"%",borderWidth:"2px",borderRadius:"5px",borderColor:"transparent"}} >
                </div>}
                </div>
            
                <p class="text-left text-white text-[3vw] mt-[0.5vw] font-bold" >{((egg.name).split("#"))[0]}</p>
                <p class="text-left text-white text-[2.6vw] " >{"#"+((egg.name).split("#"))[1]}</p>
                <div class="flex justify-between mt-[0.5vw]">
                  <p class="text-white text-[2.5vw] ">Amount</p>
                  <p class="text-[#F9D390] text-[2.5vw]">{ethers.utils.formatUnits((egggsbalance[index])[0])+" EVM"}</p>
                </div>
                <p class="text-right text-[#C2C2C2] text-[2.3vw]" >{"$ "+ethers.utils.formatUnits((egggsbalance[index])[0])*10}</p>
              </Link>
            ))}
          </div>}
          {fetchingeggs&&<div class="flex h-[100vw] w-[100%] mt-[20px] items-center justify-center flex-col " >
           
           <div class=" animate-spin border-[2vw] border-[#1A2035] rounded-[50%] w-[15vw] h-[15vw] mr-[1vw] border-t-[#E2B15B]"></div>
           <p class=" animate-pulse text-[6vw] text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]">Fetching NFT List </p>
         
        </div>}
          {/* footer */}
          <div class="row-span-2 col-span-8  mt-[2vw]  flex justify-center items-center " >
            {currentpagem!=1&&<div onClick = {(e) => setCurrentpagem(currentpagem-1)} class=" cursor-pointer bginven rounded-lg border-[1px] border-[#F9D390] w-[5vw] h-[5vw] flex justify-center items-center">
            <p class="text-[3vw] text-[#F9D390] px-[0.5vw]">{"<"}</p>
            </div>}
            {currentpagem==1&&<div  class="  bg-transparent rounded-lg border-[1px] w-[4vw] h-[4vw] border-[#F9D390]  ">
            <p class="text-[2.3vw] text-[#F9D390] px-[0.5vw]">{"<"}</p>
            </div>}
            <div class="bg-[#1A2035] to-[#EEC377] rounded-lg border-[1px] border-[#F9D390] ml-[1.5vw] w-[5vw] h-[5vw] flex justify-center items-center">
            <p class="text-[3vw] text-white px-[0.5vw] ">{currentpagem}</p>
            </div>
            <div class="">
            <p class="text-[3vw] text-white px-[0.5vw] ml-[1.5vw]">{"of"}</p>
            </div>
            {numpagem.map((index) => (
            <div class="">
            <p onClick = {(e) => setCurrentpagem(index)} class="text-[3vw]  text-white px-[0.5vw] cursor-pointer ml-[1vw]">{numpagem[index-1]}</p>
            </div>
            ))}
              {currentpagem!=numpagem.length&&<div onClick = {(e) => setCurrentpagem(currentpagem+1)} class=" ml-[1.5vw] cursor-pointer bginven rounded-lg border-[1px] border-[#F9D390] w-[5vw] h-[5vw] flex justify-center items-center">
            <p class="text-[3vw] text-center text-[#F9D390] mb-[0.2vw] ">{">"}</p>
              </div>}
              {currentpagem==numpagem.length&&<div class=" bg-transparent to-[#EEC377] rounded-lg border-[1px]  ml-[1.5vw] border-[#F9D390] w-[4vw] h-[4vw]">
            <p class="text-[2.3vw] text-[#F9D390] px-[0.5vw]">{">"}</p>
              </div>}
          </div>
      </div>
  </div>
  );
};

export default Inven;
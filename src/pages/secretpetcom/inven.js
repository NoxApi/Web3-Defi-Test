import eggpic from "./../../images/egg.svg"
import { Link } from "react-router-dom";
import { useState } from "react";
const Inven = () => {
  const [eggs,setEggs] = useState([
    {num:"1231231",status:"new",level:0},
    {num:"2333322",status:"ready to claim",level:4},
    {num:"3445432",status:"",level:5},
    {num:"2321222",status:"new",level:1},
    {num:"2333232",status:"new",level:4},
    {num:"2323111",status:"new",level:2},
    {num:"2442421",status:"new",level:3},
    {num:"21241241",status:"new",level:4},
    {num:"24124124",status:"new",level:5},
    {num:"243534435",status:"new",level:4},
    {num:"2213123213",status:"new",level:0},
    {num:"23423432",status:"new",level:2},
    {num:"2124rewr",status:"new",level:1},
    {num:"212rwqr232",status:"new",level:3},
    {num:"212312sd",status:"new",level:4},
    {num:"232432e",status:"new",level:5},
    {num:"21231234",status:"new",level:4},
    {num:"2wrqre",status:"new",level:7},
    {num:"2weqwe",status:"new",level:4},
    {num:"2asfasf",status:"new",level:8},
    {num:"23123123",status:"new",level:9},
    {num:"2asdasd",status:"new",level:2},


  ])
  const [currentpage,setCurrentpage] = useState(1)
  const numpage=[];
  const lastitemindex = currentpage * 8;
  const firstitemindex = lastitemindex - 8;
  const currentpageitems = eggs.slice(firstitemindex,lastitemindex) 

  for (let i = 1; i<= Math.ceil(eggs.length/8); i++){
    numpage.push(i)
  }
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
              <p class="text-[0.80vw] text-[#c2c2c2]">Breed</p>
            </div>
            <div className="topping flex ">
              <input class="mt-[6px] ml-[1vw]" type="checkbox" id="topping" name="topping" value="Paneer"/>
              <p class="text-[0.78vw] text-[#c2c2c2] ml-[5px]">Lion</p>
              <input class="mt-[6px] ml-[4vw]" type="checkbox" id="topping" name="topping" value="Paneer"/>
              <p class="text-[0.78vw] text-[#c2c2c2] ml-[5px]">Cat</p>
            </div>
            <div className="topping flex ">
              <input class="mt-[6px] ml-[1vw]" type="checkbox" id="topping" name="topping" value="Paneer"/>
              <p class="text-[0.78vw] text-[#c2c2c2] ml-[5px]">Bear</p>
              <input class="mt-[6px] ml-[4vw]" type="checkbox" id="topping" name="topping" value="Paneer"/>
              <p class="text-[0.78vw] text-[#c2c2c2] ml-[5px]">Otter</p>
            </div>
            <div className="topping flex ">
              <input class="mt-[6px] ml-[1vw]" type="checkbox" id="topping" name="topping" value="Paneer"/>
              <p class="text-[0.78vw] text-[#c2c2c2] ml-[5px]">Rabbit</p>
            </div>
            <div class="border-b-2 border-[#CA9E51] mt-[20px] mx-[10px]" ></div>
            <div class="flex mt-[20px] justify-between mx-[1vw]">
              <p class="text-[0.80vw] text-[#c2c2c2]">Level</p>
            </div>
            <div class="flex mt-[20px] mx-[1vw] justify-between ">
              <div class="bg-[#161E2F] w-[5vw] h-[40px] flex justify-start items-center border-2 border-[#CA9E51]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{0}</p>
              </div>
              <p class="text-[0.95vw] text-[#c2c2c2]">{"-"}</p>
              <div class="bg-[#161E2F] w-[5vw] h-[40px] flex justify-start items-center border-2 border-[#CA9E51]">
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{5}</p>
              </div>
            </div>  
        </div>
        {/* inven grid */}
        <div class="row-span-8 col-span- w-[56vw] h-[45vw] my-[30px]"  >
          <div class="flex justify-between items-center">
            <p class="text-[1.1vw] text-[#c2c2c2]">{3+" Results"}</p>
            <div class="flex  ">
              <div class="bg-[#161E2F] w-[10vw] h-[2vw] flex justify-start items-center border-2 border-[#CA9E51] mr-[3.75vw]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{"Search"}</p>
              </div>
              <div class="bg-[#161E2F] w-[10vw] h-[2vw] flex justify-start items-center border-2 border-[#CA9E51] mr-[3.75vw]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{"Filter"}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-[1vw] h-[40vw] w-[54vw] mt-[20px] " >
            {currentpageitems.map((egg) => (
          <Link to={"/SP/Info/"+egg.num} class="row-span-1 col-span-1 w-[11vw] h-[19vw] flex-col justify-between">
            <div class="bg-gradient-to-b from-transparent to-[#EEC377]  border-[1px] border-[] flex flex-col bg-opacity-10">
              <div class="flex justify-between items-center">
                <p class="  text-left px-[0.3vw] py-[0.1vw] bg-[#fe0000] mt-[0.5vw] ml-[0.2vw] rounded-md text-white text-[0.7vw]"  >{egg.status}</p>
                <div class="bg-[#181D31] rotate-45 border-2  flex align-middle mt-[0.7vw] mr-[0.6vw]">
                  <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]  px-[0.48vw] py-[0.04vw] text-center rotate-[315deg] text-[1vw] font-bold relative">{egg.level}</p>
                </div>
              </div>
              <img src={eggpic} alt='logo' class="h-[11vw] w-[8vw] mb-[0.5vw] self-center" />
             </div>
             <p class="text-left text-white text-[0.9vw] mt-[0.5vw]" >SACRED EGG</p>
             <p class="text-left text-white text-[0.5vw]" >{"#"+egg.num}</p>
             <div class="flex justify-between mt-[0.5vw]">
               <p class="text-white text-[0.9vw] ">Amount</p>
               <p class="text-[#F9D390] text-[0.9vw]">{200 + " EVM"}</p>
             </div>
             <p class="text-right text-white text-[0.5vw]" >{"$ "+1000000000}</p>
          </Link>
            ))}
          {/* footer */}
          </div>
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
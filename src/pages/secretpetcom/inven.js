import egg from "./../../images/egg.svg"
import { Link } from "react-router-dom";
const Inven = () => {
  return (
  <>
     <div class="grid grid-cols-11 gap-[2vw] h-[45vw] w-[80vw] px-[2.5vw] ml-[10vw]" >
        {/* griditem */}
        <div class="row-span-10 col-span-3 w-[14vw] h-[44vw] flex justify-start flex-col bg-gradient-to-b from-[#1A2035] via-[#1A2035] to-transparent my-[30px] border-2 rounded-lg border-[#CA9E51]" >
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
        <div class="row-span-8 col-span- w-[56vw] h-[40vw] my-[30px]" >
          <div class="flex justify-between items-center">
            <p class="text-[1.1vw] text-[#c2c2c2]">{3+" Results"}</p>
            <div class="flex">
              <div class="bg-[#161E2F] w-[10vw] h-[2vw] flex justify-start items-center border-2 border-[#CA9E51] mr-[3.75vw]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{"Search"}</p>
              </div>
              <div class="bg-[#161E2F] w-[10vw] h-[2vw] flex justify-start items-center border-2 border-[#CA9E51] mr-[3.75vw]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{"Filter"}</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-[1vw] h-[35vw] w-[54vw] mt-[20px] " >
          <Link to="/SP/Info" class="row-span-1 col-span-1 w-[11vw] h-[17.5vw] flex-col justify-between">
            <div class="bg-gradient-to-b from-transparent to-[#EEC377]  border-[1px] border-[] flex flex-col">
              <p class="  text-left pl-[13px] bg-[#fe0000] w-[3vw] mt-[0.2vw] ml-[0.2vw] rounded-md text-white h-[1.3vw]"  >New</p>
              <img src={egg} alt='logo' class="h-[11vw] w-[8vw] mb-[0.5vw] self-center" />
             </div>
             <p class="text-left text-white text-[0.9vw] mt-[0.5vw]" >SACRED EGG</p>
             <p class="text-left text-white text-[0.5vw]" >#1225533</p>
             <div class="flex justify-between mt-[0.5vw]">
               <p class="text-white text-[0.9vw] ">Amount</p>
               <p class="text-[#F9D390] text-[0.9vw]">{200 + " EVM"}</p>
             </div>
             <p class="text-right text-white text-[0.5vw]" >{"$ "+1000000000}</p>
          </Link>
          <div class="row-span-1 col-span-1 w-[11vw] h-[17.5vw] flex-col justify-between">
            <div class="bg-gradient-to-b from-transparent to-[#EEC377]  border-[1px] border-[] flex flex-col">
              <p class="  text-left pl-[13px] bg-[#fe0000] w-[3vw] mt-[0.2vw] ml-[0.2vw] rounded-md text-white h-[1.3vw]"  >New</p>
              <img src={egg} alt='logo' class="h-[11vw] w-[8vw] mb-[0.5vw] self-center" />
             </div>
             <p class="text-left text-white text-[0.9vw] mt-[0.5vw]" >SACRED EGG</p>
             <p class="text-left text-white text-[0.5vw]" >#1225533</p>
             <div class="flex justify-between mt-[0.5vw]">
               <p class="text-white text-[0.9vw] ">Amount</p>
               <p class="text-[#F9D390] text-[0.9vw]">{200 + " EVM"}</p>
             </div>
             <p class="text-right text-white text-[0.5vw]" >{"$ "+1000000000}</p>
          </div>
          <div class="row-span-1 col-span-1 w-[11vw] h-[17.5vw] flex-col justify-between">
            <div class="bg-gradient-to-b from-transparent to-[#EEC377]  border-[1px] border-[] flex flex-col">
              <p class="  text-left pl-[13px] bg-[#fe0000] w-[3vw] mt-[0.2vw] ml-[0.2vw] rounded-md text-white h-[1.3vw]"  >New</p>
              <img src={egg} alt='logo' class="h-[11vw] w-[8vw] mb-[0.5vw] self-center" />
             </div>
             <p class="text-left text-white text-[0.9vw] mt-[0.5vw]" >SACRED EGG</p>
             <p class="text-left text-white text-[0.5vw]" >#1225533</p>
             <div class="flex justify-between mt-[0.5vw]">
               <p class="text-white text-[0.9vw] ">Amount</p>
               <p class="text-[#F9D390] text-[0.9vw]">{200 + " EVM"}</p>
             </div>
             <p class="text-right text-white text-[0.5vw]" >{"$ "+1000000000}</p>
          </div>
          <div class="row-span-1 col-span-1 w-[11vw] h-[17.5vw] flex-col justify-between">
            <div class="bg-gradient-to-b from-transparent to-[#EEC377]  border-[1px] border-[] flex flex-col">
              <p class="  text-left pl-[13px] bg-[#fe0000] w-[3vw] mt-[0.2vw] ml-[0.2vw] rounded-md text-white h-[1.3vw]"  >New</p>
              <img src={egg} alt='logo' class="h-[11vw] w-[8vw] mb-[0.5vw] self-center" />
             </div>
             <p class="text-left text-white text-[0.9vw] mt-[0.5vw]" >SACRED EGG</p>
             <p class="text-left text-white text-[0.5vw]" >#1225533</p>
             <div class="flex justify-between mt-[0.5vw]">
               <p class="text-white text-[0.9vw] ">Amount</p>
               <p class="text-[#F9D390] text-[0.9vw]">{200 + " EVM"}</p>
             </div>
             <p class="text-right text-white text-[0.5vw]" >{"$ "+1000000000}</p>
          </div>
          <div class="row-span-1 col-span-1 w-[11vw] h-[17.5vw] flex-col justify-between">
            <div class="bg-gradient-to-b from-transparent to-[#EEC377]  border-[1px] border-[] flex flex-col">
              <p class="  text-left pl-[13px] bg-[#fe0000] w-[3vw] mt-[0.2vw] ml-[0.2vw] rounded-md text-white h-[1.3vw]"  >New</p>
              <img src={egg} alt='logo' class="h-[11vw] w-[8vw] mb-[0.5vw] self-center" />
             </div>
             <p class="text-left text-white text-[0.9vw] mt-[0.5vw]" >SACRED EGG</p>
             <p class="text-left text-white text-[0.5vw]" >#1225533</p>
             <div class="flex justify-between mt-[0.5vw]">
               <p class="text-white text-[0.9vw] ">Amount</p>
               <p class="text-[#F9D390] text-[0.9vw]">{200 + " EVM"}</p>
             </div>
             <p class="text-right text-white text-[0.5vw]" >{"$ "+1000000000}</p>
          </div>
          {/* footer */}
          </div>
          <div class="row-span-2 col-span-8  bg-[#fe0000] mt-[70px]" > x</div>
        </div>
      </div>  
  </>
  );
};

export default Inven;
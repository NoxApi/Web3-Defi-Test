
const Inven = () => {
  return (
  <>
     <div class="grid grid-cols-11 gap-[2vw] h-[750px] w-[80vw] px-[2.5vw] ml-[10vw] bg-black" >
        {/* griditem */}
        <div class="row-span-10 col-span-3 w-[14vw] h-[700px] flex justify-start flex-col bg-gradient-to-b from-[#1A2035] via-[#1A2035] to-transparent my-[30px] border-2 rounded-lg border-[#CA9E51]" >
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
        <div class="row-span-8 col-span-8 w-[56vw] h-[650px] my-[30px]" >
          <div class="flex justify-between items-center">
            <p class="text-[1.1vw] text-[#c2c2c2]">{3+" Results"}</p>
            <div class="flex">
              <div class="bg-[#161E2F] w-[10vw] h-[40px] flex justify-start items-center border-2 border-[#CA9E51] mr-[2vw]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{"Search"}</p>
              </div>
              <div class="bg-[#161E2F] w-[10vw] h-[40px] flex justify-start items-center border-2 border-[#CA9E51] mr-[2vw]"  >
                <p class="text-[0.95vw] text-[#c2c2c2] ml-[0.5vw]">{"Filter"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
  </>
  );
};

export default Inven;
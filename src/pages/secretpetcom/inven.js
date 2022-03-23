
const Inven = () => {
  return (
  <>
     <div class="grid grid-cols-11 gap-[2vw] h-[750px] w-[80vw] px-[2.5vw] ml-[10vw] bg-black" >
        {/* griditem */}
        <div class="row-span-10 col-span-3 w-[80%] h-[700px] flex justify-start flex-col bg-gradient-to-b from-[#1A2035] via-[#1A2035] to-transparent my-[30px] border-2 rounded-lg border-[#CA9E51]" >
            <div class="flex mt-[20px] justify-between px-[10px]">
              <p class="text-[0.95vw] text-[#c2c2c2]">Filter</p>
              <p class="text-[0.65vw] text-[#F9D390]">{"Reset"}</p>
            </div>  

            <div class="border-b-2 border-[#CA9E51] mt-[20px] mx-[10px]" ></div>
            <div class="flex mt-[20px] justify-between px-[10px]">
              <p class="text-[0.80vw] text-[#c2c2c2]">Breed</p>
            </div>
            <div className="topping flex bg-white">
              <input type="checkbox" id="topping" name="topping" value="Paneer"/>
              <p>test1</p>
            </div>
        </div>
        <div class="row-span-8 col-span-8 w-[100%] h-[650px] flex justify-end items-center flex-col bg-red-200 my-[30px]" >
        </div>
      </div>  
  </>
  );
};

export default Inven;
import React from 'react';

const Sacred = () => {
  return (
  <>
    <div style={{ background: "linear-gradient(180deg, #0A0910 0%, #07162D 100%)" ,height:"980px",justifyContent:'center',textAlign:"center",alignContent:'center',alignItems:"center",alignSelf : "center" }}>
       <div class="bg-white h-[15vh] flex justify-center items-center">
          <button class="box-border border-[#000000] rounded-lg bg-[#F9D390] border-2" >
            <p class="text-[#000000] text-[0.8vw] py-[1vh] px-[1.6vw] bold" >{"Mint"}</p>
          </button>
          <button class="box-border border-[#000000] rounded-lg bg-[#F9D390] border-2" >
              <p class="text-[#000000] text-[0.8vw] py-[1vh] px-[1vw]" >{"My Pets"}</p>
          </button>
      </div> 

      <div class="grid grid-cols-4 gap-[2vw] h-[64.3vh] w-[70vw] pr-[2.5vw]" >
        <div class="row-span-4 col-span-2 w-[100%] h-[64.3vh] flex items-center justify-center bg-white" >

        </div>  
      </div>  
    </div>
  </>
  );
};

export default Sacred;
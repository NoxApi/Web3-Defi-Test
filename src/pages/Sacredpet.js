import React from 'react';
import poolhook from "./secretpetcom/poolshook";
import { Link,Outlet } from 'react-router-dom';
const Sacred = () => {
  poolhook()
  return (
  <>
    <div style={{ background: "linear-gradient(180deg, #0A0910 0%, #07162D 100%)" ,height:"1500px",justifyContent:'center',textAlign:"center",alignContent:'center',alignItems:"center",alignSelf : "center" }}>
       <div class=" h-[10vh] flex justify-center items-end rounded-md">
         <div class="bg-[#1A2035] flex p-[2px] rounded-md">
            <Link to="Mint" class="bg-[#1A2035] box-border border-[#000000]   w-[110px] focus:text-[#000000] focus:bg-[#F9D390] text-white" activeStyle>
              <p class= " text-[0.7vw] py-[1vh] px-[1.6vw] bold" >{"Mint"}</p>
            </Link>
            <Link to="Inven" class="box-border border-[#000000]  bg-[#1A2035]  w-[110px] focus:text-[#000000] focus:bg-[#F9D390] text-white" activeStyle>
                <p class=" text-[0.7vw] py-[1vh] px-[1vw]" >{"My Pets"}</p>
            </Link>
          </div>
      </div>
      <Outlet/>
    </div>  
  </>
  );
};

export default Sacred;
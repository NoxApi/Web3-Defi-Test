import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { useContext,useState } from 'react';
import Sbcontracthook from './secretpetcom/sbcontracthook';
import { MainContext } from '../App';
export const SacredContext = React.createContext(null);
const Sacred = () => {
  const {eggsamount,setEggsamount} = useContext(MainContext)

  const [eggs,setEggs] = useState([
    {id:0,num:"1231231",status:"new",level:0},
    {id:1,num:"2333322",status:"ready to claim",level:4},
    {id:2,num:"3445432",status:"",level:5},
    {id:3,num:"2321222",status:"new",level:1},
    {id:4,num:"2333232",status:"new",level:4},
    {id:5,num:"2323111",status:"new",level:2},
    {id:6,num:"2442421",status:"new",level:3},
    {id:7,num:"21241241",status:"new",level:4},
    {id:8,num:"24124124",status:"new",level:5},
    {id:9,num:"243534435",status:"new",level:4},
    {id:10,num:"2213123213",status:"new",level:0},
    {id:11,num:"23423432",status:"new",level:2},


  ])
  return (
  <SacredContext.Provider    
        value={{
        eggs,setEggs,eggsamount,setEggsamount
        }}>
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
  </SacredContext.Provider>
  );
};

export default Sacred;
import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import { useContext,useState,useEffect } from 'react';
import Sbcontracthook from './secretpetcom/sbcontracthook';
import { MainContext } from '../App';
export const SacredContext = React.createContext(null);
const Sacred = () => {
  var base64 = require('base-64');
  const {eggsamount,setEggsamount,eggowned} = useContext(MainContext)
  const {mint,feed,rdyreward,lockedinfo,tokenURI,geteggidbyindex,reclaim } = Sbcontracthook()
  const [egggs,setEgggs] = useState([])
  const [fetchingeggs,setFetchingeggs] = useState(false)

  const eggsloop = async () => {
    setFetchingeggs(true)
    var index =0
    var eggscounter =[]
    
    while (eggscounter.length != eggowned){
      eggscounter.push(index)
      index++
    } 
    for(const element of eggscounter){
        var x = await geteggidbyindex(element)
        var y = await tokenURI(x)
        var z = String(y)
        var c = z.split(",")
        var v = JSON.parse(base64.decode(c[1]));
          const newegg = egggs.map((x) =>{
            return x.name
          })
        if (!(newegg.includes(v["name"]))){
            egggs.push(v)
        }
      }
      setFetchingeggs(false)
}
useEffect(() => {
  console.log(egggs)
  if (fetchingeggs===false){
    if (eggowned!=egggs.length){
    eggsloop()
    }
}
}, [mint,eggowned])

  //infopages
  return (
  <SacredContext.Provider    
        value={{
        eggsamount,setEggsamount,egggs,fetchingeggs,setFetchingeggs,feed,rdyreward,lockedinfo,reclaim,mint
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
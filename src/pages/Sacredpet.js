import React from 'react';
import Feedmodal from "./secretpetcom/feedmodal";
import { Link,Outlet } from 'react-router-dom';
import { useContext,useState,useEffect } from 'react';
import Sbcontracthook from './secretpetcom/sbcontracthook';
import { MainContext } from '../App';
import SuccessModal from './farmcom/successmodal';
export const SacredContext = React.createContext(null);
const Sacred = () => {
  var base64 = require('base-64');
  const {eggsamount,setEggsamount,eggowned,refetch,setRefetch,rerender,setRerender} = useContext(MainContext)
  const [isOpen,setIsOpen] = useState(false)
  const {mint,feed,rdyreward,lockedinfo,tokenURI,geteggidbyindex,reclaim,getbalance,supplyinfo,evolve,feededlist,unlock } = Sbcontracthook()
  const [NFTlist,setNFTlist]=useState([])
  const [egggsbalance,setEgggsbalance] = useState([])
  const [fetchingeggs,setFetchingeggs] = useState(false)
  const [id,setId] = useState(0)
  const [refood,setRefood] = useState(false)
  
  const eggsloop = async () => {
    const egggs=[]
    setFetchingeggs(true)
    setRefood(true)
    var index =0
    var eggscounter =[]
    
    while (eggscounter.length != eggowned){  
      eggscounter.push(index)
      index++
    } 
    for(const element of eggscounter){
        var x = await geteggidbyindex(element);
        var m = await getbalance(x);
        var y = await tokenURI(x);
        
        var z = String(y)
        var c = z.split(",")
        var v = JSON.parse(base64.decode(c[1]));
          const newegg = egggs.map((x) =>{
            return x.name
          })
        if (!(newegg.includes(v["name"]))){
            egggs.push(v)
            egggsbalance.push(m)
        }
      }
      setRerender(rerender+1)
      setFetchingeggs(false)
      setRefetch(false)
      setNFTlist(egggs)
      console.log(NFTlist)
}
useEffect(() => {
  console.log(refetch)
  supplyinfo();
  if (fetchingeggs===false){
    if (eggowned!=NFTlist.length){
    eggsloop()
    }
    console.log(NFTlist)
  }
  if (refetch===true){
    if (fetchingeggs===false){
    eggsloop()
    console.log(NFTlist)
    }
  }
  
}, [eggowned,rerender,refetch])

  //infopages
  return (
  <SacredContext.Provider    
        value={{
        eggsamount,setEggsamount,NFTlist,fetchingeggs,setFetchingeggs,feed,rdyreward,lockedinfo,reclaim,mint,egggsbalance,getbalance,evolve,isOpen,setIsOpen,
        id,setId,geteggidbyindex,tokenURI,NFTlist,feededlist,unlock,refetch,refood,setRefood
        }}>
    <div class="bg">    
    <div style={{height:"1500px",justifyContent:'center',textAlign:"center",alignContent:'center',alignItems:"center",alignSelf : "center" }}>
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
      <Feedmodal/>
      <SuccessModal/>
    </div> 
    </div>   
  </SacredContext.Provider>
  );
};

export default Sacred;
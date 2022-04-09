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
  const {mint,feed,rdyreward,lockedinfo,tokenURI,geteggidbyindex,reclaim,getbalance,supplyinfo,evolve,feededlist,unlock,ardallow,approveEVM } = Sbcontracthook()
  const [NFTlist,setNFTlist]=useState([])
  const [egggsbalance,setEgggsbalance] = useState([])
  const [fetchingeggs,setFetchingeggs] = useState(false)
  const [id,setId] = useState(0)
  const [refood,setRefood] = useState(false)
  const [allowanceamount,setAllowanceamount] = useState(0)

  const checkallow = async () => {
    const x = await ardallow()
    setAllowanceamount(x)
  }
  
  const eggsloop = async () => {
    const egggs=[]
    const balance=[]
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
        egggs.push(v)
        balance.push(m)
        }
      setRerender(rerender+1)
      setFetchingeggs(false)
      setRefetch(false)
      setNFTlist(egggs)
      setEgggsbalance(balance)
      console.log(NFTlist)
}
useEffect(() => {
  console.log(refetch)
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
  if (allowanceamount===0){
      checkallow()
  }
}, [eggowned,rerender,refetch])

  //infopages
  return (
  <SacredContext.Provider    
        value={{
        eggsamount,setEggsamount,NFTlist,fetchingeggs,setFetchingeggs,feed,rdyreward,lockedinfo,reclaim,mint,egggsbalance,getbalance,evolve,isOpen,setIsOpen,
        id,setId,geteggidbyindex,tokenURI,NFTlist,feededlist,unlock,refetch,refood,setRefood,ardallow,allowanceamount,approveEVM
        }}>
    <div class="bg">    
    <div style={{height:"120%",justifyContent:'center',textAlign:"center",alignContent:'center',alignItems:"center",alignSelf : "center" }}>
       <div class=" h-[10vh] flex justify-center items-end rounded-md">
         <div class="bg-[#1A2035] flex p-[2px] rounded-md">
            <Link to="Mint" class="bg-[#1A2035] box-border border-[#000000]   w-[10vw] h-[2.5vw] MBH:w-[25vw] MBH:h-[50px]  focus:text-[#000000] focus:bg-[#F9D390] text-white flex items-center justify-center" activeStyle>
              <p class= " text-[0.85vw]  bold MBH:text-[18px] MBH:p-0" >{"Mint"}</p>
            </Link>
            <Link to="Inven" class="box-border border-[#000000]  bg-[#1A2035]  w-[10vw] h-[2.5vw] MBH:w-[25vw] MBH:h-[50px] focus:text-[#000000] focus:bg-[#F9D390] text-white flex items-center justify-center" activeStyle>
                <p class=" text-[0.85vw]  MBH:text-[18px] MBH:p-0"  >{"My Pets"}</p>
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
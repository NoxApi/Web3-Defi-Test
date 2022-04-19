import React from 'react';
import Feedmodal from "./secretpetcom/feedmodal";
import { Link,Outlet } from 'react-router-dom';
import { useContext,useState,useEffect } from 'react';
import Sbcontracthook from './secretpetcom/sbcontracthook';
import { MainContext } from '../App';
import SuccessModal from '../components/Global Modal/successmodal';
export const SacredContext = React.createContext(null);
const Sacred = () => {
  var base64 = require('base-64');
  const [AT,setAT] = useState("Mint")
  const {eggsamount,setEggsamount,eggowned,refetch,setRefetch,rerender,setRerender,setSboutlet} = useContext(MainContext)
  const [isOpen,setIsOpen] = useState(false)
  const {mint,feed,rdyreward,lockedinfo,tokenURI,geteggidbyindex,reclaim,getbalance,supplyinfo,evolve,feededlist,unlock,ardallow,approveEVM } = Sbcontracthook()
  const [NFTlist,setNFTlist]=useState([])
  const [egggsbalance,setEgggsbalance] = useState([])
  const [fetchingeggs,setFetchingeggs] = useState(false)
  const [id,setId] = useState(0)
  const [refood,setRefood] = useState(false)
  const [allowanceamount,setAllowanceamount] = useState(0)

  const kuy = document.querySelectorAll('.kuy');
  function activeLink(){
    kuy.forEach((items) => items.classList.remove('select'));
    this.classList.add('select');
  }
  kuy.forEach((item)=>item.addEventListener('click',activeLink))

  const checkallow = async () => {
    const x = await ardallow()
    setAllowanceamount(x)
  }

  function clickswitch(){
    if (AT==="Mint"){
      setAT("Inven")
    }
    if (AT==="Inven"){
      setAT("Mint")
    }
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
        // var m = await getbalance(x);
        var y = await tokenURI(x);
        
        var z = String(y)
        var c = z.split(",")
        var v = JSON.parse(base64.decode(c[1]));
        egggs.push(v)
        // balance.push(m)
        }
      setRerender(rerender+1)
      setFetchingeggs(false)
      setRefetch(false)
      setNFTlist(egggs)
      // setEgggsbalance(balance)
}
useEffect(() => {
  if (fetchingeggs===false){
    if (eggowned!=NFTlist.length){
    eggsloop()
    }
  }
  if (refetch===true){
    if (fetchingeggs===false){
    eggsloop()
    }
  }
  if (allowanceamount===0){
      checkallow()
  }
}, [eggowned,refetch])

  //infopages
  return (
  <SacredContext.Provider    
        value={{
        eggsamount,setEggsamount,NFTlist,fetchingeggs,setFetchingeggs,feed,rdyreward,lockedinfo,reclaim,mint,egggsbalance,getbalance,evolve,isOpen,setIsOpen,
        id,setId,geteggidbyindex,tokenURI,NFTlist,feededlist,unlock,refetch,refood,setRefood,ardallow,allowanceamount,approveEVM
        }}>
    <div class="bg h-[auto] MBH:h-auto">    
    <div style={{height:"auto",justifyContent:'center',textAlign:"center",alignContent:'center',alignItems:"center",alignSelf : "center" }}>
       <div class=" h-[10vh] flex justify-center items-end ">
         <div className="duck flex w-[20vw] bg-[#1A2035] rounded-[0.4vw] MBH:rounded-xl border-[#000] border-[0.1vw] MBH:w-[50vw] z-[1]">
         <Link to={"Mint"} onClick={()=>setSboutlet("Mint")} className="kuy select box-border border-[#000000]    w-[10vw] h-[2.5vw] MBH:w-[25vw] MBH:h-[50px]   text-white flex items-center justify-center" >
            <p className="text-[1.1vw] MBH:text-[4vw]"> Mint </p>
          </Link>
          <Link to={"Inven"} onClick={()=>setSboutlet("inven")}className="kuy box-border border-[#000000]   w-[10vw] h-[2.5vw] MBH:w-[25vw] MBH:h-[50px]   text-white flex items-center justify-center" >
            <p className="text-[1.1vw] MBH:text-[4vw]"> My Pet</p>
          </Link>
          <div className="navigator w-[10vw] h-[2.5vw] MBH:w-[25vw] MBH:h-[50px] MBH:rounded-lg"></div>
          </div>
      </div>
      
      <Outlet/>
      <Feedmodal/>
    </div> 
    </div>   
  </SacredContext.Provider>
  );
};

export default Sacred;
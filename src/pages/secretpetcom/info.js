import React from 'react';
import { Link } from 'react-router-dom';
import egg from "./../../images/egg.svg"
import { SacredContext } from '../Sacredpet';
import { useState,useContext,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { forEach } from 'mathjs';
import { ethers } from 'ethers';
import { MainContext } from '../../App';

const Info = () => {
  var base64 = require('base-64');
  const { id } = useParams()
  const {feed,rdyreward,lockedinfo,reclaim,getbalance,evolve,isOpen,setIsOpen,setId,tokenURI,unlock,feededlist,refetch,setRefood,refood} = useContext(SacredContext)
  const {isfeedopen,setIsfeedopen,rerender} = useContext(MainContext)
  const [totalbalance,setTotalbalance] = useState([])
  const [feedlist,setFeedlist] = useState([])
  const [feedindex,setFeedindex] = useState(-1)
  const [expbars,setExpbars] = useState(0)
  const [eggexp,setEggexp] = useState(0)
  const [eggef,setEggef] = useState(0)
  const [eggn,setEggn] = useState("")
  const [eggi,setEggi] = useState(egg)
  const [unlocka,setUnlocka]=useState(0)
  const [fetchingfood,setFetchingfood] = useState(true)
  const [color,setColor]=useState("Digesting")
  const egggs=[]
  
  function setclick() {
    setIsfeedopen(true)
    setId(id)
  }
  async function gettotalbalance() {
    setTotalbalance(await getbalance(id))
  }
  async function getegginfo(){
    var y = await tokenURI(id);
    var z = String(y)
    var c = z.split(",")
    var v = JSON.parse(base64.decode(c[1]));
    egggs.push(v)
    const m = egggs[0]
     setEggexp(m.exp)
     setEggn(m.name)
     setEggi(m.image)
     setEggef(m.evolForm)
     setExpbars(getexpbars(m.exp,m.evolForm))
   }
   async function getfeedindex(){
     const index = await feededlist(id)
     const format = ethers.utils.formatUnits(index)
     const reallyformat = format*(10**18)
     console.log(reallyformat)
     setFeedindex(reallyformat)
     if (reallyformat===0){
      setFetchingfood(false)
     }
   }
   const getfeededlist = async() =>{
    setFetchingfood(true)
    var index = 0
    var foodcounter=[]
    while (foodcounter.length != feedindex){  
      foodcounter.push(index)
      index++
    }
    for(const element of foodcounter){
      const x = await(lockedinfo(id,element))
      console.log(x)
      feedlist.push(x)
   }
   setFetchingfood(false);
   setRefood(false);
  }

  const getunlock = async() =>{
    const amount = await unlock(id)
    const format = ethers.utils.formatUnits(amount)
    setUnlocka(format)
  }


  function getexpbars(exp,evolform){{
    if((exp/10**18)*100/((10**6)*(5**evolform))>100){
      return 100;
    }
    else{
     return Math.ceil((exp/10**18)*100/((10**6)*(5**evolform)))
    }
   }
 }
 function getdate(hex){
  const dateObj = new Date(hex * 1000);
  const utcString = dateObj.toLocaleString();
  const date = utcString.split(",")
  return date[0]
 }
 function getsdate(hex,sec){
  const x = hex-sec
  const dateObj = new Date(x* 1000);
  const utcString = dateObj.toLocaleString();
  const date = utcString.split(",")
  return date[0]
 }
 function comparedate(hex){
  const now = new Date();
  const date = new Date(hex* 1000);
  if (date>now){
    return "Digesting"
  }
  else{
    setColor("Done")
    return "Done"
  }
 }
  useEffect(() => {
    if (feedindex===-1){
      getfeedindex()
    }
    if (feedindex>0){
      if (feedlist.length===0){
      getfeededlist()
      }
    }
    if (refood){
      if(!fetchingfood){
        getfeededlist()
      }
    }
    getegginfo()
    gettotalbalance()
    getunlock()
    console.log("info rerender")
    console.log(refood)
  }, [rerender,feedindex,refood])

  return (
  <> 
   <div class="absolute ml-[15vw] text-white">
     <Link to="/SP/Inven"class="cursor-pointer"> {"< Back"} </Link>
    </div>

      <div class="flex h-[80%] w-[60vw] px-[2.5vw] ml-[20vw] flex-col mt-[3vw]" >
        <img src={eggi} alt='logo' class="h-[18vw] w-[16vw] self-center mt-[5px]"  />
        <div class="self-center origin-center flex items-center my-[0.5vw]">
        <div class="bg-[#181D31] rotate-45 border-[0.1vw]  border-[#5F5F5F]  flex mt-[0.7vw] mr-[0.6vw] w-[2vw] h-[2vw] justify-center">
                      <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]  rotate-[315deg] text-[1.1vw] font-bold ">{eggef}</p>
                    </div>
          <div class="self-center origin-center flex flex-col ml-[0.5vw]">
            <p class="text-white text-[0.9vw]  text-left   ">{(eggn.split("#"))[0]}</p>
            <p class="text-white text-left  ">{"#"+(eggn.split("#"))[1]}</p>
          </div>
          
        </div>
        <p class=" text-center text-white text-[0.7vw]  z-[1px]  justify-self-center">{(eggexp/(10**18))+"/"+((10**6)*(5**eggef))}</p>
        <div class="self-center origin-center flex justify-between items-center w-[30vw] h-[1vw">
        
          <p class="text-left text-white text-[0.9vw]">EXP</p>
          <div class=" h-[0.45vw] w-[100%] rounded-[0.3vw] bg-[#C4C4C4] flex border-[black] border-[0.01vw] ml-[0.5vw] mr-[1.5vw]">
          <div style={{background: "linear-gradient(180deg, #F9D390 0%, #E2B15B 100%)",borderRadius: "0.1vw",zIndex:"100px",width:expbars+"%"}}>
          </div>
          </div>
            
        </div>
        <div class="self-center origin-center flex justify-between w-[20.3vw]">
            <button onClick={(e)=>reclaim(id)}class="text-black  border-black mt-[1vw] bg-[#F9D390] py-[0.2vw]  border-2 rounded-md text-[1vw] w-[10vw] text-center">RECLAM</button>
            {expbars<100&&<button onClick={(e)=>setclick()} class="text-black  border-black mt-[1vw]  bg-[#F9D390] py-[0.2vw] border-2 rounded-md text-[1vw] w-[10vw] text-center">{"FEED "}</button>}
            {expbars==100&&<button onClick={(e)=>evolve(id)} class="text-black  border-black mt-[1vw]  bg-[#F9D390] py-[0.2vw] border-2 rounded-md text-[1vw] w-[10vw] text-center">{"Evolve "}</button>}
        </div>
        <div class="flex self-center w-[30vw] mt-[3vw] flex-col">
          <p class="text-left text-white text-[0.9vw]">Amount</p>
          <div class="flex justify-between mt-[1vw]">
            <div class="flex justify-between bg-[#181D31] w-[14.8vw] py-[0.8vw] border-[1px] rounded-lg px-[0.3vw]">
              <p class="text-left w-[12vw] text-white text-[1vw]" >Inside pet</p>
              {totalbalance.length!==0&&<p class="text-right w-[12vw] text-white text-[1vw]">{ethers.utils.formatUnits(totalbalance[0])+" EVM"}</p>}
              {totalbalance.length===0&&<p class="text-right w-[12vw] text-white text-[1vw]">{"0 EVM"}</p>}
            </div>
            <div class="flex justify-between bg-[#181D31] w-[14.8vw] py-[0.8vw] border-[1px] rounded-lg px-[0.3vw]">
              <p class="text-left w-[12vw] text-white text-[1vw]">Ready To Claim</p>
              {totalbalance.length!==0&&<p class="text-right w-[12vw] text-white text-[1vw]">{unlocka +" EVM"}</p>}
              {totalbalance.length===0&&<p class="text-right w-[12vw] text-white text-[1vw]">{"0 EVM"}</p>}
            </div>
            
          </div> 
        </div>

        <div class="flex self-center w-[30vw] mt-[3vw] flex-col">
          <p class="text-left text-white text-[0.9vw]">Feeded List</p>
          <div class="flex justify-start flex-col">
            {/* fetching */}
            {fetchingfood&&<div class="flex h-[20vw] w-[30vw] mt-[20px] items-center justify-center " >
           
            <div class=" animate-spin border-[0.5vw] border-[#1A2035] rounded-[50%] w-[4vw] h-[4vw] mr-[1vw] border-t-[#E2B15B]"></div>
            <p class={" animate-pulse text-[2vw] text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]"}>Fetching Feeded List </p>

            </div>}
            {/* nothing to fetch*/}
            {feedlist.length===0&&<div class="flex h-[20vw] w-[30vw] mt-[20px] items-center justify-center " >
           
            <p class={" animate-pulse text-[2vw] text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B]"}>You did't feed anything</p>

            </div>}
            
          {/* mapping */}
          
          {!fetchingfood&&
          feedlist.map((food,index) => (
          <div class="flex justify-between bg-[#181D31] w-[30vw] py-[0.5vw] border-[1px] rounded-lg px-[0.3vw] mt-[1vw]">       
          <div class={"text-left w-[12vw] text-white flex flex-col justify-start  border-l-4 border-"+color+" pl-[0.8vw] ml-[0.5vw]"}>
            <p class="text-[0.5vw]">feeded amount</p>
            <p class="text-[1vw]">{(food.amount/(10**18))+" EVM"}</p>
          </div>
          <div class="flex justify-between w-[20vw]">
            <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
              <p class="text-[0.5vw] ">EXP Gain</p>
              <p class="text-[0.65vw] mt-[0.2vw]">{(food.amount/(10**18))*(food.lockChoice[0]/(1))*(food.lockChoice[1]/(1))}</p>
              {/* (food.amount/(10**18))*((food.lockchoice)[0]/(10**18))*((food.lockchoice)[1]/(10**18)) */}
            </div>
            <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
              <p class="text-[0.5vw]">Feeded Date</p>
              <p class="text-[0.65vw] mt-[0.2vw]">{getsdate(food.unlockTime,food.lockChoice[0]/(1))}</p>
            </div>
            <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
              <p class="text-[0.5vw]">Ended Date</p>
              <p class="text-[0.65vw] mt-[0.2vw]">{getdate(food.unlockTime)}</p>
            </div>
            <div class="text-left w-[12vw] text-white flex flex-col justify-start pl-[0.8vw] ml-[0.5vw]">
              <p class="text-[0.5vw]">status</p>
              <p class="text-[0.65vw] mt-[0.2vw]">{comparedate(food.unlockTime)}</p>
            </div>
          </div>
        </div>))}
          
            
           
          </div> 
        </div>


      </div>  
     
  </>
  );
};

export default Info;
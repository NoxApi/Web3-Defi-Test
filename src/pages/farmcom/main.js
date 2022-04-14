
import './farm.css'
import { useContext } from 'react';
import { MainContext } from '../../App';
import { FarmContext } from '../Farm';
import ayla1 from '../../images/Ayla1.svg'
import mm from '../../images/metamask.svg'
import evermoonlogo from '../../images/EVMBNBLP.svg';

const Farmmain = (props) => {
    const harvest = props.harvest;
    const {bluramount,setBluramount,setIsOpen,setIsOpen2,evmstaked,evmearn,ethereum,connectWallet,currentAccount} = useContext(MainContext)
    const {isapprove} = useContext(FarmContext)
   function setclick() {
      setIsOpen(true)
      setBluramount("blur(4px)")
    }
    function setclick2() {
      setIsOpen2(true)
      setBluramount("blur(4px)")
    }
   
return(
  <div class=" bg z-[-20]">
    <div  style={{ height:"100vh",width:"100vw", filter:bluramount }}>
      {/* under Navbar */}
    <div class="flex  items-center  h-[4vw]  py-[3vw] mx-[15vw] justify-between MBH:mx-[4vw]">
      <div class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-[2.5vw] MBH:text-[3vw] text-center font-serif">
        EVERMOON FARM
      </div>
      <div class="box-border rounded-lg border-2 bg-[#181D31] border-[#FFFFFF] p-[0.6vw]" >
        <img src={require('../../images/question.png')} alt='logo' class=" h-[1vw] "  />
      </div>
    </div >
      {/* Farm Card */}
    <div class="MBH:hidden" >
    <div className="Abackground bg-[cardbackground]">
      {/* leftcard */}
      <div class="grid grid-cols-4 gap-[2vw] h-[100%] w-[70vw] pr-[2.5vw] z-20" >
        <div class="row-span-4 col-span-2 w-[100%] h-[100%] flex items-center justify-center" >
        <img src={ayla1} alt='logo' className ="Aone" />
        <img src={evermoonlogo} alt='logo' className="Atwo w-[17vw] h-[17vw]"  />
    
        </div>
        {/* rigth card */}
        <div class=" flex col-span-2  h-[4vw] justify-between items-center mt-[1vw]" >
          <div class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-[1.8vw] items-center py-[3vw] mt-[1vw]">
            EVM-BNB
          </div>
          <div class=" text-[#FFFFFF] text-[0.7vw]  py-[3vw] space-y-[0.4vw] mt-[1vw] ">
            <p>Get EVM-BNB LP </p>
            <p>View Contract </p>
          </div>
        </div>

        <div class="box-border rounded-[1vw] w-[100%] h-[6vw] bg-[#121624] flex items-center">
          <div class=" p-[2vw] space-y-[0.6vw]">
            <p class="text-[#C2C2C2] text-[0.8vw]">APR </p>
            <p class="text-[#FFFFFF] text-[1vw]">{560000+" %"}</p>
          </div>
        </div>
        <div class="box-border rounded-[1vw]  w-[100%] h-[6vw]  bg-[#121624] flex items-center">
          <div class=" p-[2vw] space-y-[0.6vw]">
              <p class="text-[#C2C2C2] text-[0.8vw]">Liquidity </p>
              <p class="text-[#FFFFFF] text-[1vw]">{"$"+400000000}</p>
          </div>
        </div>
        <div class="box-border rounded-[1vw]   w-[100%] h-[11vw]  flex items-center justify-center bg-[#121624] ">
          <div class="  px-[1.5vw] py-[1vw]  w-[100%] h-[100%] flex flex-col justify-between" >
              <p class="text-[#C2C2C2] text-[0.9vw]">EVM Earned</p>
              {currentAccount!=="" && <p class="text-[#C2C2C2] text-[1.1vw]">{parseFloat(evmearn).toFixed(5)+" EVM"}</p>}
              {currentAccount==="" &&<p class="text-[#767676] text-[1.3vw]">{0+" EVM"}</p>}
              {currentAccount!=="" && <p class="text-[#c2c2c2] text-[0.6vw]">{"$"+parseFloat((evmearn*0.08)).toFixed(5)}</p>}
              {currentAccount==="" &&<p class="text-[#767676] text-[0.6vw] mb-[0.2]">{"$"+0}</p>}
              {isapprove===false && <div class="greybgbutton box-border border-[#ffffff] flex h-[2.5vw] items-center justify-center w-[100%]">
                <p class=" text-[#000000] text-[1.2vw]" >{"Harvest"}</p>            
              </div>}
              {isapprove===true && 
              <button class="goldbgbutton box-border border-[#000000] h-[2.5vw] " onClick={harvest} >
                <p class="text-[#000000] text-[1.2vw]" >{"Harvest"}</p>
              </button>}
          </div>
        </div>

        <div class="box-border rounded-[1vw]   w-[100%] h-[11vw]  flex items-center justify-center bg-[#121624] mb-[]">
          <div class=" px-[1.5vw] py-[1vw]  w-[100%] h-[100%] flex flex-col justify-between">
              <p class="text-[#C2C2C2] text-[0.9vw]">EVM-BNB Staked</p>
              {currentAccount!=="" &&<p class="text-[#FFFFFF] text-[1.2vw]">{evmstaked}</p>}
              {currentAccount==="" &&<p class="text-[#767676] text-[1.3vw]">{0}</p>}
              <p class="text-[#767676] text-[0.6vw]">&zwnj;</p>
              {currentAccount==="" &&<button class="goldbgbutton box-border border-[#000000] h-[2.5vw] flex items-center justify-center"onClick={()=>connectWallet()} >
                <img src={mm} alt="" />
               <p class="text-[#000000] text-[1.1vw]  "  >{"Connect Wallet"}</p>
              </button>}
              {isapprove===false &&currentAccount!==""&&<button class="goldbgbutton box-border border-[#000000] h-[2.5vw] flex items-center justify-center " onClick ={()=>setclick()}>
               <p class="text-[#000000] text-[1.2vw] " >{"Approve"}</p>
              </button>}
              {isapprove===true &&evmstaked===0&&<button class="goldbgbutton box-border border-[#000000] h-[2.5vw] flex items-center justify-center " onClick ={()=>setclick()}>
               <p class="text-[#000000] text-[1.2vw] " >{"Stake LP"}</p>
              </button>}
              {isapprove===true &&evmstaked>0&&
            <div class= "h-[3vw] flex content-center">
               <div class="flex justify-between w-[100%]  items-center mt-[0.5vw]" >
              <button class="cutcorner    bg-[#181D31] w-[48%] h-[2.5vw] flex justify-center items-center " onClick ={setclick2}>
              <p class="text-[#DD6AB7] text-[0.9vw]  " >{"-Unstake "}</p>
             </button>
              <button class="cutcorner    bg-[#181D31] w-[48%] h-[2.5vw] flex justify-center items-center " onClick ={setclick}>
               <p class="text-[#74BFC8] text-[0.9vw] " >{"+Stake"}</p>
              </button>
             </div>           
            </div>}
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
    );
};
export default Farmmain;
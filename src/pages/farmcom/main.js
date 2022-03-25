
import './farm.css'
import { useContext } from 'react';
import { MainContext } from '../../App';
import ayla1 from '../../images/Ayla1.svg'
import evermoonlogo from '../../images/EVMBNBLP.svg'

const Farmmain = (props) => {
    const harvest = props.harvest;
    const {bluramount,setBluramount,isapprove,setIsOpen,setIsOpen2,evmstaked,evmearn } = useContext(MainContext)

   function setclick() {
      setIsOpen(true)
      setBluramount("blur(4px)")
    }
    function setclick2() {
      setIsOpen2(true)
      setBluramount("blur(4px)")
    }
    
return(
    <div  style={{ background: "linear-gradient(180deg, #0A0910 0%, #07162D 100%)",height:"100vh",width:"100vw", filter:bluramount }}>
      {/* under Navbar */}
    <div class="flex  items-center  h-[7vw]  py-[4vw] mx-[15vw] justify-between MBH:mx-[0vw]">
      <div class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-[2.5vw] MBH:text-[3vw] text-center font-serif">
        EVERMOON FARM
      </div>
      <div class="box-border rounded-lg border-2 bg-[#181D31] border-[#FFFFFF] p-[0.6vw]" >
        <img src={require('../../images/question.png')} alt='logo' class=" h-[1vw] "  />
      </div>
    </div >
      {/* Farm Card */}
    <div class="MBH:hidden">
    <div className="Abackground">
      <div class="grid grid-cols-4 gap-[2vw] h-[37vw] w-[70vw] pr-[2.5vw] " >
        
        <div class="row-span-4 col-span-2 w-[100%] h-[100%] flex items-center justify-center" >
        <img src={ayla1} alt='logo' className ="Aone" />
        <img src={evermoonlogo} alt='logo' class="Atwo"  />
    
        </div>
        <div class=" flex col-span-2  h-[7vw] justify-between " >
          <div class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] text-[2vw] items-center py-[3vw]">
            EVM-BNB
          </div>
          <div class=" text-[#FFFFFF] text-[0.8vw]  py-[3vw] space-y-[0.6vw] ">
            <p>Get EVM-BNB LP </p>
            <p>View Contract </p>
          </div>
        </div>
        <div class="box-border rounded-3xl  w-[16vw] h-[7.5vw] bg-[#121624] flex content-center">
          <div class=" p-[2vw] space-y-[0.6vw]">
            <p class="text-[#C2C2C2] text-[0.8vw]">APR </p>
            <p class="text-[#FFFFFF] text-[1vw]">{560000}</p>
          </div>
        </div>
        <div class="box-border rounded-3xl  w-[16vw] h-[7.5vw] bg-[#121624] flex content-center">
          <div class=" p-[2vw] space-y-[0.6vw]">
              <p class="text-[#C2C2C2] text-[0.8vw]">Liquidity </p>
              <p class="text-[#FFFFFF] text-[1vw]">{"$"+400000000}</p>
          </div>
        </div>
        <div class="box-border rounded-3xl w-[16vw] h-[13vw] bg-[#121624] flex content-center" >
          <div class=" p-[2vw] space-y-[0.7vw] w-[16vw]" >
              <p class="text-[#C2C2C2] text-[0.9vw]">EVM Earned</p>
              {(isapprove===1||isapprove===2) && <p class="text-[#C2C2C2] text-[1.1vw]">{parseFloat(evmearn).toFixed(5)+" EVM"}</p>}
              {(isapprove===0) &&<p class="text-[#767676] text-[1.1vw]">{0+" EVM"}</p>}
              {(isapprove===1||isapprove===2) && <p class="text-[#c2c2c2] text-[0.6vw]">{"$"+parseFloat((evmearn*0.08)).toFixed(5)}</p>}
              {(isapprove===0) &&<p class="text-[#767676] text-[0.6vw]">{"$"+0}</p>}
              {(isapprove===0||isapprove===1) && <button class="box-border border-[#ffffff] rounded-lg bg-[#7f7f7f] " >
                <p class="text-[#000000] text-[1.2vw] py-[0.4vw] px-[4vw]" >{"Harvest"}</p>            
              </button>}
              {isapprove===2 && 
              <button class="box-border border-[#000000] rounded-lg bg-[#F9D390]" onClick={harvest} >
                <p class="text-[#000000] text-[1.2vw] py-[0.4vw] px-[4vw]" >{"Harvest"}</p>
              </button>}
          </div>
        </div>
        <div class="box-border rounded-3xl  w-[16vw] h-[13vw] bg-[#121624] flex content-center">
          <div class=" p-[2vw] space-y-[0.7vw] w-[16vw]">
              <p class="text-[#C2C2C2] text-[0.9vw]">EVM-BNB Staked</p>
              {(isapprove===1||isapprove===2)  &&<p class="text-[#FFFFFF] text-[1.2vw]">{evmstaked}</p>}
              {isapprove===(0) &&<p class="text-[#767676] text-[1.1vw]">{0}</p>}
              <p class="text-[#767676] text-[0.6vw]">&zwnj;</p>
              {isapprove===0 &&<button class="box-border border-[#000000] rounded-lg bg-[#F9D390] " onClick ={setclick}>
               <p class="text-[#000000] text-[1.2vw] py-[0.6vw] px-[3.5vw]" >{"Stake LP"}</p>
              </button>}
              {isapprove===1 &&<button class="box-border border-[#000000] rounded-lg bg-[#F9D390] " onClick ={setclick}>
               <p class="text-[#000000] text-[1.2vw] py-[0.6vw] px-[3.5vw]" >{"Stake LP"}</p>
              </button>}
            <div class= "h-[3vw] flex content-center">
              {
              isapprove===2 && <div class="flex justify-between w-[14vw] h-[2.55vw]" >
              <button class="box-border border-2 border-[#DD6AB7] rounded-lg bg-[#181D31] w-[5.87vw] flex justify-center items-center" onClick ={setclick2}>
              <p class="text-[#DD6AB7] text-[0.7vw]  " >{"-Unstake "}</p>
             </button>
              <button class="box-border border-2 border-[#74BFC8]  rounded-lg bg-[#181D31] w-[5.87vw] flex justify-center items-center " onClick ={setclick}>
               <p class="text-[#74BFC8] text-[0.7vw] " >{"+Stake"}</p>
              </button>
             </div>
              }
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
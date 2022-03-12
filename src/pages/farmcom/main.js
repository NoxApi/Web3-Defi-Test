
import './farm.css'
import { useContext } from 'react';
import { MainContext } from '../../App';
import bnb from '../../images/bnb.svg'
import ayla1 from '../../images/Ayla1.svg'
import evermoonlogo from '../../images/Evermoon-3.svg'

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
    <div class="flex  items-center  h-[10vh]  py-[6vh] mx-[15vw] justify-between ">
      <div class="text-[#F9D390] text-5xl text-center font-serif">
        EVERMOON FARM
      </div>
      <div class="box-border rounded-lg border-2 bg-[#181D31] border-[#FFFFFF] p-[10px]" >
        <img src={require('../../images/question.png')} alt='logo' class=" h-[20px] "  />
      </div>
    </div >
      {/* Farm Card */}
    <div className="Abackground">
      <div class="grid grid-cols-4 gap-[2vw] h-[64.3vh] w-[70vw] pr-[2.5vw]" >
        
        <div class="row-span-4 col-span-2 w-[100%] h-[64.3vh] flex items-center justify-center" >
        <img src={ayla1} alt='logo' className ="Aone" />
        <div className ="Atwo">
          <img src={bnb} alt='logo' class=" absolute h-[5vw] w-[5vw] ml-[12vw]"  />
          <img src={evermoonlogo} alt='logo' class="absolute h-[15vw] w-[15vw]"  />
          </div>
    
        </div>
        <div class=" flex col-span-2  h-[120px] justify-between" >
          <div class="text-[#F9D390] text-5xl items-center py-[60px]">
            EVM-BNB
          </div>
          <div class=" text-[#FFFFFF] text-m   py-[60px] space-y-4 ">
            <p>Get EVM-BNB LP </p>
            <p>View Contract </p>
          </div>
        </div>
        <div class="box-border rounded-3xl  w-[16vw] h-[13vh] bg-[#121624]">
          <div class=" p-[2vw] space-y-[1vh]">
            <p class="text-[#C2C2C2]">APR </p>
            <p class="text-[#FFFFFF] text-[1vw]">{560000}</p>
          </div>
        </div>
        <div class="box-border rounded-3xl  w-[16vw] h-[13vh] bg-[#121624]">
          <div class=" p-[2vw] space-y-[1vh]">
              <p class="text-[#C2C2C2]">Liquidity </p>
              <p class="text-[#FFFFFF] text-[1vw]">{"$"+400000000}</p>
          </div>
        </div>
        <div class="box-border rounded-3xl w-[16vw] h-[24vh] bg-[#121624] flex" >
          <div class=" p-[2vw] space-y-[1vh] w-[16vw]" >
              <p class="text-[#C2C2C2]">EVM Earned</p>
              {(isapprove===1||isapprove===2) && <p class="text-[#C2C2C2] text-[1.1vw]">{parseFloat(evmearn).toFixed(5)+" EVM"}</p>}
              {(isapprove===0) &&<p class="text-[#767676] text-[1.1vw]">{0+" EVM"}</p>}
              {(isapprove===1||isapprove===2) && <p class="text-[#c2c2c2] text-[0.6vw]">{"$"+parseFloat((evmearn*0.08)).toFixed(5)}</p>}
              {(isapprove===0) &&<p class="text-[#767676] text-[0.6vw]">{"$"+0}</p>}
              {(isapprove===0||isapprove===1) && <button class="box-border border-[#ffffff] rounded-lg bg-[#7f7f7f] " >
                <p class="text-[#000000] text-[1.2vw] py-[1vh] px-[4vw]" >{"Harvest"}</p>            
              </button>}
              {isapprove===2 && 
              <button class="box-border border-[#000000] rounded-lg bg-[#F9D390] " onClick={harvest} >
                <p class="text-[#000000] text-[1.2vw] py-[1vh] px-[4vw]" >{"Harvest"}</p>
              </button>}
          </div>
        </div>
        <div class="box-border rounded-3xl  w-[16vw] h-[24vh] bg-[#121624]">
          <div class=" p-[2vw] space-y-[1vh] w-[16vw]">
              <p class="text-[#C2C2C2]">EVM-BNB Staked</p>
              {(isapprove===1||isapprove===2)  &&<p class="text-[#FFFFFF] text-[1.2vw]">{evmstaked}</p>}
              {isapprove===(0) &&<p class="text-[#767676] text-[1.1vw]">{0}</p>}
              <p class="text-[#767676] text-[0.6vw]">&zwnj;</p>
              {isapprove===0 &&<button class="box-border border-[#000000] rounded-lg bg-[#F9D390] " onClick ={setclick}>
               <p class="text-[#000000] text-[1.2vw] py-[1vh] px-[3.5vw]" >{"Stake LP"}</p>
              </button>}
              {isapprove===1 &&<button class="box-border border-[#000000] rounded-lg bg-[#F9D390] " onClick ={setclick}>
               <p class="text-[#000000] text-[1.2vw] py-[1vh] px-[3.5vw]" >{"Stake LP"}</p>
              </button>}
              {isapprove===2 && <div class="flex h-[60px] w-[400px]">
              <button class="box-border border-2 border-[#DD6AB7] rounded-lg bg-[#181D31] " onClick ={setclick2}>
              <p class="text-[#DD6AB7] text-[1vw] py-[] px-[0.7vw]" >{"-Unstake "}</p>
             </button>
              <button class="box-border border-2 border-[#74BFC8] ml-[10px] rounded-lg bg-[#181D31] " onClick ={setclick}>
               <p class="text-[#74BFC8] text-[1vw] py-[] px-[1.2vw] " >{"+Stake"}</p>
              </button>
             </div>
              }
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};
export default Farmmain;
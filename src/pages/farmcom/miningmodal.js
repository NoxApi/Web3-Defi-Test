import React from 'react';
import "./farm.css"
import { useContext } from 'react'
import { MainContext } from '../../App';
import pickaxe from '../../images/pick axe.svg'
import GP from '../../images/GP.svg'

const MiningModal = () => {
    const {isMining,} = useContext(MainContext)
  return (
    <>
     
      <div style={{ background: "#121624",position:'fixed',bottom:"3vh" ,right:"3vw",zIndex:"10px",borderColor:"#F9D390",borderWidth:"0.2vw",display:isMining,justifyContent:"center",boxShadow:"0px 0px 0.5vw #CA9E51,1px 1px 0.5vw rgba(0,0,0,0),inset -2px -2px 20px rgba(255,255,255,0.1),inset 2px 2px 0.2vw rgba(0,0,0,0.7)",borderRadius:"0.1vw",borderRadius:"1vw"}}>
        {isMining!=="none"&&<
          div class="flex justify-center items-center self-center h-[7vw] w-[25vw] MBH:w-[90vw] MBH:h-[10vh] overflow-hidden whitespace-nowrap ">
          <img src={GP} alt="logo" className="pickaxe w-[3vw] MBH:w-[10vw]" />
          <p class="text-[2vw] MBH:text-[7vw] text-white text-center justify-center mt-[] typing  MBH:w-[100%] overflow-hidden ">Mining Transaction...</p>
          
        </div> }               
      </div>
    </>
  );
};

export default MiningModal;
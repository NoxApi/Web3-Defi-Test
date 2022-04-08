import React from 'react';
import "./farm.css"
import { useContext } from 'react'
import { MainContext } from '../../App';
import pickaxe from '../../images/pick axe.svg'

const MiningModal = () => {
    const {isMining,} = useContext(MainContext)
  return (
    <>
     
      <div style={{ background: "#121624",height:"7vw",width:"25vw",position:'fixed',bottom:"10px" ,right:"10px",zIndex:"10px",borderColor:"#F9D390",borderWidth:"2px",borderRadius:"1rem",display:isMining}}>
        {isMining!=="none"&&<div class="flex justify-center items-center">
          <img src={pickaxe} alt="logo" className="pickaxe" />
          <p class="text-[1vw] text-white text-center justify-center mt-[]">Transaction currently mining</p>
        </div> }               
      </div>
    </>
  );
};

export default MiningModal;
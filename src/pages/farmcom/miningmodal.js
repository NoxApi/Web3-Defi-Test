import React from 'react';
import "./farm.css"
import { useContext,useState } from 'react'
import { MainContext } from '../../App';
import pickaxe from '../../images/pick axe.svg'

const MiningModal = () => {
    const {isMining,} = useContext(MainContext)
  return (
    <>
     
      <div style={{ background: "#121624",height:"150px",width:"500px",position:'fixed',bottom:"0px" ,right:"0px",zIndex:"10px",borderColor:"#F9D390",borderWidth:"2px",borderRadius:"1rem",display:isMining}}>
        {isMining!=="none"&&<div class="flex">
          <img src={pickaxe} className="pickaxe" />
          <p class="text-xl text-white text-center justify-center mt-[60px]">Transaction currently mining</p>
        </div> }               
      </div>
    </>
  );
};

export default MiningModal;
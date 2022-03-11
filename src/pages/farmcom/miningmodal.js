import React from 'react';
import "./farm.css"
import { useContext,useState } from 'react'
import { MainContext } from '../../App';
import pickaxe from '../../images/pick axe.svg'

const MiningModal = () => {
    const {setBluramount,setIsMining,isMining,} = useContext(MainContext)
    const [text, setText] = useState(0)
    function closeModal() {
        setIsMining(false)
        setBluramount("blur(0px)")
      }
    
      function openModal() {
        setIsMining(true)
      }

  return (
    <>
     
      <div style={{ background: "#121624",height:"150px",width:"500px",position:'fixed',bottom:"0px" ,right:"0px",zIndex:"10px",borderColor:"#F9D390",borderWidth:"2px",borderRadius:"1rem",display:isMining}}>
        <div class="flex">
          <img src={pickaxe} className="pickaxe" />
          <p class="text-xl text-white text-center justify-center mt-[60px]">Transaction currently mining</p>

        </div>                
      </div>
    </>
  );
};

export default MiningModal;
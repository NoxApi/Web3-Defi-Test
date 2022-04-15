import React from 'react';
import './../../App.css';
import { useEffect,useContext } from 'react';
import { MainContext } from '../../App';
import evermoon1 from './../../images/evermoon1logo.svg'
import mm from './../../images/metamask.svg'
import copy from './../../images/copy.svg'
import arrow from './../../images/uparrow.svg'
import orca from './../../images/orca.svg'
import { Link } from 'react-router-dom';
import './nav.css'
import {
  Nav,
  NavLink2,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  const {currentAccount,evma,setIsMobileMenu,sboutlet,setSboutlet,isMobileMenu,setBluramount,connectWallet} = useContext(MainContext)
  function closeModal() {
    setIsMobileMenu(false)
    setBluramount("blur(0px)")
    console.log(isMobileMenu)
  }

  const naviga = document.querySelectorAll('.naviga');
  function activeLink(){
    naviga.forEach((items) => items.classList.remove('tick'));
    this.classList.add('tick');
  }
  naviga.forEach((item)=>item.addEventListener('click',activeLink))

  useEffect(() => {
    console.log("Navbar render")
  }, [evma,currentAccount])
  return (
    <div>
      <Nav>
      <NavMenu>
        <div class="flex"> 
            <NavLink2 to='/' onClick={()=>setSboutlet("mint")} >
              <img src={evermoon1} alt='logo' class="h-[50px] bp1:w-[15vw] bp1:h-[15vw]" />
            </NavLink2>
            <div class="flex ml-[280px] bp2:ml-0 ">
              <Link onClick={()=>setSboutlet("mint")} className="naviga tick" to='/Mp' >
                MARKETPLACE
              </Link>
              <Link onClick={()=>setSboutlet("mint")} className="naviga" to='/Cap' >
                CAPSULE
              </Link>
              <div className="DD">
              <button className="DEFI naviga" >
              DE-FI
              </button>
                <div className="DDcontent">
                  <Link className="naviga"  to='/Farm' class="mt-[1.5vh] py-[3px] ml-[0.5vw]">
                    FARM
                  </Link>
                  <Link className="naviga" to={'/SP/'+sboutlet} class="mt-[1.5vh] py-[3 px] ml-[0.5vw]">
                    SACRET-PET
                  </Link>
                </div>
              </div>
          
              <Link onClick={()=>setSboutlet("mint")} className="naviga" to='/Tribe'>
                TRIBE CHALLENGE
              </Link>
            </div>
        </div>
        

        <div class=" flex items-center bp2:hidden"  > 
          {!currentAccount && (
          <button class="goldbgbutton  box-border border-[#000000] relative  w-[13vw] h-[6vh] flex justify-center items-center " onClick={connectWallet}>
            <img src={mm} alt="logo" />
            <p class="text-[#000000]  text-[0.8vw] font-bold " >{"Connect Wallet"}</p>
            
          </button>
          )}

          {currentAccount && (
          <div class="flex mb-[1vh] items-center">
            <div class="">
              <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] font-bold text-[1vw] py-[0.6vh] px-[1vw] bp1:text-[0.85vw]" >{parseFloat(evma).toFixed(2) + " EVM"}</p>
              <div class="flex">
                <img src={copy} alt="logo" className="w-[1vw] h-[1vw] cursor-pointer" onClick={() => {navigator.clipboard.writeText(currentAccount)}} />
                <p class="text-[#C2C2C2] nav1:text-[0.8vw] ml-[0.2vw]" >{currentAccount.substring(0, 16)+"..."}</p>
              </div>
            </div>
            <img src={orca} alt="logo" class="w-[3.5vw] h-[3.5vw] rounded-full" />    
          </div>
          )}
        </div> 

        </NavMenu>
        <div class="flex justify-between  w-[100vw] mx-[4vw] h-[7vw] TL:hidden items-center MB:mx-[15vw] MB:w-[70vw]">
          <img src={evermoon1} alt='logo' class=" h-[3.5vw] MBH:h-[7vw] MBH:w-[40vw]" />
         {!isMobileMenu&& <div onClick={(e)=> setIsMobileMenu(true)} class="h-[2.05vw] w-[4vw] justify-between flex flex-col items-center cursor-pointer MBH:h-[4vw] MBH:w-[8vw] MBH:mr-[5vw] MBH:z-20">
            <div class="bg-white w-[3vw] h-[0.3vw] rounded-[0.3vw] MBH:h-[0.8vw] MBH:w-[6vw]" ></div>
            <div class="bg-white w-[3vw] h-[0.3vw] rounded-[0.3vw] MBH:h-[0.8vw] MBH:w-[6vw]" ></div>
            <div class="bg-white w-[3vw] h-[0.3vw] rounded-[0.3vw] MBH:h-[0.8vw] MBH:w-[6vw]" ></div>
          </div>}
          {isMobileMenu&&<img src={arrow} alt="logo" class=" w-[8vw] MB:hidden cursor-pointer mr-[5vw] h-[7vw] MBH:z-20 rotate-90" onClick={closeModal}/>}

        </div>
      </Nav>
    </div>
  );
};
export default  Navbar;
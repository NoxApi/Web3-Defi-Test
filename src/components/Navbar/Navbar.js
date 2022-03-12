import React from 'react';
import './../../App.css';
import { useEffect,useContext } from 'react';
import { MainContext } from '../../App';
import evermoon1 from './../../images/evermoon1logo.svg'
import {
  Nav,
  NavLink,
  NavLink2,
  NavMenu,
} from './NavbarElements';
import Contractshook from '../../pages/farmcom/contractshook';

const Navbar = () => {
  const {currentAccount,evma,} = useContext(MainContext)
  const {connectWallet} = Contractshook()

  useEffect(() => {
    console.log("Navbar render")
  }, [evma,currentAccount])
  return (
    <div>
      <Nav>
      <NavMenu>
        <div class="flex"> 
            <NavLink2 to='/' >
              <img src={evermoon1} alt='logo' class="h-[50px] bp2:hidden" />
            </NavLink2>
            <div class="flex ml-[280px] bp2:ml-0">
              <NavLink to='/Mp' activeStyle>
                MARKETPLACE
              </NavLink>
              <NavLink to='/Cap' activeStyle>
                CAPSULE
              </NavLink>
              <NavLink to='/Farm' activeStyle>
                DE-FI
              </NavLink>
              <NavLink to='/Tribe' activeStyle>
                TRIBE CHALLENGE
              </NavLink>
            </div>
        </div>
        

        <div class=" flex items-center"  > 
          {!currentAccount && (
          <button class="box-border border-[#000000] rounded-lg bg-[#F9D390] " onClick={connectWallet}>
            <p class="text-[#000000] text-[15px] py-[5px] px-[20px]" >{"Sign In"}</p>
          </button>
          )}

          {currentAccount && (
          <div class="flex mb-[1vh] items-center">
            <div class="">
              <p class="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] font-bold text-[1vw] py-[0.6vh] px-[1vw] bp2:text-[0.85vw]" >{parseFloat(evma).toFixed(3) + " EVM"}</p>
              <p class="text-white " onClick={() => {navigator.clipboard.writeText(currentAccount)}}>{currentAccount.substring(0, 17)+"..."}</p>
            </div>
          <img  src={require('../../images/benz.PNG')} alt='logo' class="w-[4vw] h-[7vh] rounded-full" />
          </div>
          )}
        </div> 

        </NavMenu>
      </Nav>
    </div>
  );
};
export default  Navbar;
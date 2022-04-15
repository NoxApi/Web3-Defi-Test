import './App.css';
import { ethers } from 'ethers';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Farm from './pages/Farm';
import Tribe from './pages/Tribe';
import Market from './pages/Market';
import Capsule from './pages/Capsule';
import { useState,useEffect} from 'react';
import SuccessModal from "./components/Global Modal/successmodal";
import MiningModal from "./pages/farmcom/miningmodal";
import SP from './pages/Sacredpet';
import Mintpet from './pages/secretpetcom';
import Inven from './pages/secretpetcom/inven';
import Info from './pages/secretpetcom/info';
import Mobilenav from './components/Navbar/mobilenavmenu';
import evmabi from './components/utils/EvermoonToken.json'

export const MainContext = React.createContext(null);

function App() {
  const today =  new Date();
  const [lp, setLp] = useState(0)
  const [amount,setAmount] = useState(0)
  const [evmstaked,setEvmstaked] = useState(0)
  const [evmearn,setEvmearn] = useState(0)
  const [bluramount,setBluramount] =useState("blur(0px)")
  const [currentAccount,setCurrentAccount] = useState("")
  const [evma, setEvma] = useState(0)
  const [isOpen,setIsOpen] = useState(false)
  const [isfeedopen,setIsfeedopen] = useState(false)
  const [isOpen2,setIsOpen2] = useState(false)
  const [isSuccess,setIsSuccess] = useState(false)
  const [isMining,setIsMining] = useState("none")
  const [rerender,setRerender]=useState(true)
  const [isMobileMenu,setIsMobileMenu] = useState(false)
  const [refetch,setRefetch] = useState(false)
  const [eggsamount,setEggsamount] = useState(0)
  const [eggowned,setEggowned] = useState(0)
  const [sboutlet,setSboutlet] = useState("Mint")
  const { ethereum } = window;

  const evmaddr= "0xf91375fbf40d920c31016E1473c6D44F334Af13F"
  const evmABI = evmabi.abi;
  var provider = "";
  var signer = "";
  var evm ="";
  if (ethereum){
    var provider = new ethers.providers.Web3Provider(ethereum);
    var signer = provider.getSigner();
    var evm = new ethers.Contract(evmaddr,evmABI,signer);
    }

//wallet related

const check = async () => {
    if (currentAccount.length == 0) {
      try{
        const { ethereum } = window;
        if (ethereum) {
          console.log("etherum present")
          }
      }
      catch (error) {
        console.log(error)
      }
    }
  }
  
  const checkIfWalletIsConnected = async () => {
    try {
      if (currentAccount.length == 0) {
        if (!ethereum) {
          console.log("Make sure you have metamask!");
          return;
        } else {
          console.log("We have the ethereum object", ethereum);
        }
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          setCurrentAccount(account);
          setRerender(!rerender);
        } else {
          console.log("No authorized account found")
          setCurrentAccount("")
        }
      } 
    }
    catch (error) {
      console.log(error);
    }
  }    

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }
  //get EVM amount
  const getevm = async () => {
    if (currentAccount.length !== 0) {
      try{
      const getevm = await evm.balanceOf(currentAccount)
      const formatedevm =ethers.utils.formatUnits(getevm)
      setEvma(formatedevm)
      }
      catch (error) {
        console.log(error)
      }
    }
  }
  //Useeffect
  useEffect(() => {
    check()
    checkIfWalletIsConnected()
    if (ethereum){
    getevm();
    }
    console.log("wallet rerender")
  }, [rerender,currentAccount])


  // JSX
  return (
    <Router>
      <MainContext.Provider 
      
        value={{
        setIsMining,isMining,isSuccess,setIsSuccess,
        lp, setLp,amount,setAmount,evmstaked,setEvmstaked,evmearn,setEvmearn,
        bluramount,setBluramount,currentAccount,setCurrentAccount,evma,setEvma,
        isOpen,isOpen2,setIsOpen,setIsOpen2,rerender,setRerender
        ,isMobileMenu,setIsMobileMenu,eggsamount,setEggsamount,eggowned,setEggowned
        ,refetch,setRefetch,isfeedopen,setIsfeedopen,today,sboutlet,setSboutlet,connectWallet,signer,provider
        }}>

        <div class ="w-full h-[90vh]">
          <Navbar />
          <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/Mp' element={<Market/>} />
            <Route path='/Cap' element={<Capsule/>} />
            <Route path='/Farm' element={<Farm/>} />
            <Route path='/Tribe' element={<Tribe/>} />
            <Route path='SP' element={<SP/>}>
              <Route index element={<Mintpet/>} />
              <Route path='Mint' element={<Mintpet/>}/>
              <Route path='inven' element={<Inven/>}/>
              <Route path='Info/:id' element={<Info/>}/>           
            </Route>
          </Routes>
        </div>
        <Mobilenav/>
        <SuccessModal/>
        <MiningModal/>
      </MainContext.Provider>
    </Router>
  );
}

export default App;

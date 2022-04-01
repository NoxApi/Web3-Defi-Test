import { ethers } from 'ethers';
import '../../App.css';
import abi from '../../components/utils/MiniChefV2.json'
import abi2 from '../../components/utils/LoongTuu.json'
import abi3 from '../../components/utils/EvermoonToken.json'
import abi4 from '../../components/utils/UniswapV2Factory.json'
import abi5 from '../../components/utils/UniswapV2Pair.json'
import abi6 from '../../components/utils/SacredBeast.json'
import { useContext,useEffect } from 'react'
import { MainContext } from '../../App';
import { SacredContext } from '../Sacredpet';

const Sbcontracthook = () => {
  //contract address
  const sacredbeastaddr = "0xFd32D87F7bb527c98f95E0cb5825C51B6dE25552";
  const contractAddress = "0x01b6AABf4c744a2c1718067BEa1bcaB1312ed42B";
  const pooladdr = "0xE7B2c20Ace3300724A8E612ac18B2ACB8259426B";
  const evmaddr= "0xf91375fbf40d920c31016E1473c6D44F334Af13F";
  const pairaddr= "0xD7fF6B0313baF3da58dD1e369817401fB7dEc4dd";
  //all abi
  const TokenABI = abi2.abi;
  const evmABI = abi3.abi;
  const minichefABI = abi.abi;
  const poolABI = abi4.abi;
  const pairABI = abi5.abi;
  const SBABI=abi6.abi;
  
  //provider & signer
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  //all contracts 
  const pool = new ethers.Contract(pooladdr, poolABI, signer);
  const pair = new ethers.Contract(pooladdr, pairABI, signer);
  const SB = new ethers.Contract(sacredbeastaddr, SBABI, signer);
  const evm = new ethers.Contract(evmaddr, evmABI, signer);
  //all context
  const {setIsMining,setIsFail,setIsSuccess,lp, setLp,currentAccount,setCurrentAccount,setEvma,setIsapprove,rerender,setRerender,evmearn,setEvmearn,evmstaked,setEvmstaked,setIsOpen,setIsOpen2,setBluramount,eggsamount} = useContext(MainContext)
  function Success() {
    setIsSuccess(true)
    setBluramount("blur(4px)")
  }

  const mint = async () => {
    try {
        const tx = await SB.mintBeast(eggsamount);
        setIsMining("")
        const waitfortx = await provider.waitForTransaction(tx.hash)
        setRerender(rerender+1)
        setIsMining("none")
        Success()
    } catch (error) {
      console.log(error)
    }
  }
  const checkbalance = async () => {
    try {
        const tx = await SB.balanceOf(currentAccount);
       console.log(tx)
       const tx2 = await SB.totalSupply();
       console.log(tx2)
       const tx3 = await SB.tokenOfOwnerByIndex(currentAccount,0);
       console.log(tx3)
    } catch (error) {
      console.log(error)
    }
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

  useEffect(() => {
    console.log("loop done")
    checkbalance();
  }, [rerender,currentAccount])
    return {mint}
  };
  
  export default Sbcontracthook;
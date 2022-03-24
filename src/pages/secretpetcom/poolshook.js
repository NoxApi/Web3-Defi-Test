import { ethers } from 'ethers';
import '../../App.css';
import abi from '../../components/utils/MiniChefV2.json'
import abi2 from '../../components/utils/LoongTuu.json'
import abi3 from '../../components/utils/EvermoonToken.json'
import abi4 from '../../components/utils/UniswapV2Factory.json'
import abi5 from '../../components/utils/UniswapV2Pair.json'
import { useContext,useEffect } from 'react'
import { MainContext } from '../../App';

const Contractshook = () => {
  //contract address
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
  //provider & signer
  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  //all contracts 
  const pool = new ethers.Contract(pooladdr, poolABI, signer);
  const pair = new ethers.Contract(pooladdr, pairABI, signer);
  //all context
  const {setIsMining,setIsFail,setIsSuccess,lp, setLp,amount,setAmount,currentAccount,setCurrentAccount,setEvma,setIsapprove,rerender,setRerender,evmearn,setEvmearn,evmstaked,setEvmstaked,setIsOpen,setIsOpen2,setBluramount} = useContext(MainContext)
  

  //geting info (ex.currency)
  const test = async () => {
    try {
      const x = await pool.allPairsLength();
      console.log(x);
       const y = await pair.getReserves();
       console.log(y);
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
    check();
    checkIfWalletIsConnected();
    test();
    console.log("loop done")
  }, [rerender,currentAccount])
    return {}
  };
  
  export default Contractshook;
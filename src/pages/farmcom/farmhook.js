import { ethers } from 'ethers';
import '../../App.css';
import abi from '../../components/utils/MiniChefV2.json'
import abi2 from '../../components/utils/LoongTuu.json'
import abi3 from '../../components/utils/EvermoonToken.json'
import { useContext,useState,useEffect } from 'react'
import { MainContext } from '../../App';


const Farmhook = () => {
  //all context
  const {setIsMining,setIsFail,setIsSuccess,lp, setLp,amount,setAmount,currentAccount,signer,rerender,setRerender,evmearn,setEvmearn,evmstaked,setEvmstaked,setIsOpen,setIsOpen2,setBluramount,provider} = useContext(MainContext)
  //contract address
  const contractAddress = "0x01b6AABf4c744a2c1718067BEa1bcaB1312ed42B";
  const pooladdr = "0x9DF4E70D7eABA4A6348d9c971db083EAa17Cb201"
  const evmaddr= "0xf91375fbf40d920c31016E1473c6D44F334Af13F"
  //all abi
  const TokenABI = abi2.abi;
  const evmABI = abi3.abi;
  const minichefABI = abi.abi;
  const { ethereum } = window;
  
  //all contracts 
  var token = "";
  var evm = "";
  var farm = "";

  if (ethereum){
    var token = new ethers.Contract(pooladdr,TokenABI,signer);
    var evm = new ethers.Contract(evmaddr,evmABI,signer);
    var farm = new ethers.Contract(contractAddress, minichefABI, signer);
    }
  
  
  //close/Open modal 
  function closeModal() {
    setIsOpen(false)
    setBluramount("blur(0px)")
  }
  function closeModal2() {
    setIsOpen2(false)
    setBluramount("blur(0px)")
  }
  function Success() {
    setIsSuccess(true)
    setBluramount("blur(4px)")
  }

  
  const getlp = async () => {
    if (currentAccount.length !== 0) {
      try{
        setLp(ethers.utils.formatUnits(await token.balanceOf(currentAccount)))
      }
      catch (error) {
        console.log(error)
      }
    }
  }
  const getstakedevm = async () => {
    if (currentAccount.length !== 0) {
      try{
        const x = await farm.userInfo(0,currentAccount);
        const y = await farm.pendingEvermoon(0,currentAccount)
        if (x[0]!=evmstaked){
        setEvmstaked(ethers.utils.formatUnits(x[0]))
        }
        if (y!=evmearn){
        setEvmearn(ethers.utils.formatUnits(y))
        }
      }
      catch (error) {
        console.log(error)
      }
    }
  }
  async function lpallowance() {
    try {
        const ls = await token.allowance(currentAccount, contractAddress)
        return (ls/1)
    } catch (error) {
      return -1
    }
  }
  //contract's methord
  const appro = async () => {
    try{
    const tx = await token.approve(currentAccount,ethers.utils.parseUnits("500000000"+amount, 18))
    console.log(tx.hash)
    setIsMining("flex")
    const waitfortx = await provider.waitForTransaction(tx.hash)
    setIsMining("none")
    const tx2= await token.approve(contractAddress,ethers.utils.parseUnits("500000000"+amount, 18))
    setIsMining("flex")
    const waitfortx2 = await provider.waitForTransaction(tx2.hash)
    setIsMining("none")
    setRerender(!rerender)
    }
    catch (error) {
      console.log(error)
    }
  }
  const harvest = async () => {
    try{
      const farm = new ethers.Contract(contractAddress, minichefABI, signer);
      if (ethereum) {
        const tx = await farm.harvest(0,currentAccount)
        setIsMining("flex")
        const waitfortx = await provider.waitForTransaction(tx.hash)
        setRerender(!rerender)
        setIsMining("none")
        Success()
        }
    }
    catch (error) {
      console.log(error)
    }
  }
  const withdraw = async () => {
    try{
      if (ethereum) {
        const tx = await farm.withdraw(0,ethers.utils.parseUnits(""+amount, 18),currentAccount)
        closeModal2()
        setIsMining("flex")
        await provider.waitForTransaction(tx.hash)
        setRerender(!rerender)
        setIsMining("none")
        Success()
        }
    }
    catch (error) {
      closeModal2()
      console.log(error)
    }
  }
  const deposit = async () => {
    try{
      if (ethereum) {
        console.log(ethers.utils.parseUnits(""+amount, 18))
        const tx = await farm.deposit(0,ethers.utils.parseUnits(""+amount, 18),currentAccount)
        closeModal()
        setIsMining("flex")
        await provider.waitForTransaction(tx.hash)
        setRerender(!rerender)
        setIsMining("none")
        Success()
        }
    }
    catch (error) {
      closeModal()
      console.log(error)
    }
  }
  

  useEffect(() => {
    getlp();
    getstakedevm();
    console.log("Farm beast Contract")
  }, [rerender,currentAccount])
    return {harvest ,setAmount,appro,lp,amount,deposit,evmstaked,evmearn,withdraw,lpallowance}
  };
  
  export default Farmhook;
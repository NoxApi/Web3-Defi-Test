import React from "react";
import Modalone from "./farmcom/modal1";
import Modaltwo from "./farmcom/modal2";
import Farmmain from "./farmcom/main";
import Farmhook from "./farmcom/farmhook"
import { useContext,useState,useEffect } from "react";
import { MainContext } from "../App";
export const FarmContext = React.createContext(null);
const Farm = () => {  
  
  const { harvest,appro ,deposit,withdraw,lpallowance} = Farmhook()
  const {} = useContext(MainContext)
  const [isapprove, setIsapprove] = useState(false)
  const checkallowance= async () => {
    const allowance = await lpallowance()
    console.log(allowance)
    if (allowance > 1){
      setIsapprove(true)
    }
    if (allowance === -1){
      setIsapprove(false)
    }
  }

  useEffect(() => {
    checkallowance();
    console.log(isapprove)
  }, [])

  return (
  <FarmContext.Provider    
  value={{
  isapprove
  }}>
  <Farmmain harvest={harvest}/>
  <Modalone appro={appro} deposit={deposit}/>
  <Modaltwo appro={appro} withdraw={withdraw}/>
  </FarmContext.Provider >
  );
};

export default Farm;

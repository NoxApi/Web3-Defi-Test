import React from "react";
import Modalone from "./farmcom/modal1";
import Modaltwo from "./farmcom/modal2";
import Farmmain from "./farmcom/main";
import Contractshook from "./farmcom/contractshook";

const Farm = () => {  
  const { ethereum } = window;
  const { harvest,appro ,deposit,withdraw} = Contractshook()
  return (
  <>
  <Farmmain harvest={harvest}/>
  <Modalone appro={appro} deposit={deposit}/>
  <Modaltwo appro={appro} withdraw={withdraw}/>
  </>
  );
};

export default Farm;

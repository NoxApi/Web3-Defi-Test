import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Farm from './pages/Farm';
import Tribe from './pages/Tribe';
import Market from './pages/Market';
import Capsule from './pages/Capsule';
import { useState} from 'react';
import SuccessModal from "./pages/farmcom/successmodal";
import MiningModal from "./pages/farmcom/miningmodal";
import FailModal from "./pages/farmcom/failmodal";
import SP from './pages/Sacredpet';
import Mintpet from './pages/secretpetcom';
import Inven from './pages/secretpetcom/inven';
import Info from './pages/secretpetcom/info';
export const MainContext = React.createContext(null);

function App() {
  const [lp, setLp] = useState(0)
  const [amount,setAmount] = useState(0)
  const [evmstaked,setEvmstaked] = useState(0)
  const [evmearn,setEvmearn] = useState(0)
  let [bluramount,setBluramount] =useState("blur(0px)")
  let [currentAccount,setCurrentAccount] = useState("")
  let [evma, setEvma] = useState(0)
  const [isapprove, setIsapprove] = useState(0)
  const [isOpen,setIsOpen] = useState(false)
  const [isOpen2,setIsOpen2] = useState(false)
  const [isSuccess,setIsSuccess] = useState(false)
  const [isFail,setIsFail] = useState(false)
  const [isMining,setIsMining] = useState("none")
  const [rerender,setRerender]=useState(0)

  return (
    <Router>
      <MainContext.Provider 
      
        value={{
        isFail,setIsFail,setIsMining,isMining,isSuccess,setIsSuccess,
        lp, setLp,amount,setAmount,evmstaked,setEvmstaked,evmearn,setEvmearn,
        bluramount,setBluramount,currentAccount,setCurrentAccount,evma,setEvma,
        isapprove,setIsapprove,isOpen,isOpen2,setIsOpen,setIsOpen2,rerender,setRerender
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
        <SuccessModal/>
        <MiningModal/>
        <FailModal/>
      </MainContext.Provider>
    </Router>
  );
}

export default App;

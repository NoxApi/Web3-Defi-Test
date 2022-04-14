import React from 'react';
import { Dialog,Transition  } from '@headlessui/react'
import { useContext,Fragment } from 'react'
import { MainContext } from '../../App';
const Modaltwo = (props) => {
    const withdraw = props.withdraw
    const {setBluramount,isOpen2,setIsOpen2,amount,evmstaked,setAmount} = useContext(MainContext)

    function closeModal() {
        setIsOpen2(false)
        setBluramount("blur(0px)")
      }
    
  return (
    <>
      <Transition appear show={isOpen2} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block border-[#F9D390] border-2 w-full max-w-md p-6 my-8  text-left align-middle transition-all transform bg-[#121624] shadow-xl rounded-2xl backdrop-blur-lg">
              <div class="flex">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white"
                >
                  Unstake
                </Dialog.Title>
                <button type="button" class="bg-white rounded-md ml-[320px]  inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 overflow-hidden"   onClick={closeModal}>
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                </button>
              </div>
              <div class=" mt-4">
                <p class="text-sm text-white">
                  You'll Unstake
                </p>
              </div>
              <form class="grid grid-cols-10 gap-2 mt-[20px] mb-[10px]">
                  <div class=" flex col-span-10 row-span-6 bg-[#0C0F1A] rounded-md border-[#F9D390] border-2">
                    <input   class="bg-[#0C0F1A] text-white h-[100%] w-[100%]"
                    type="number"
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                    />

                     <p class="absolute text-transparent bg-clip-text bg-gradient-to-b from-[#F9D390] to-[#E2B15B] ml-[270px] mt-[5px]">EVM-BNB LP</p>
                  </div>
                  <div class=" bg-[#5F5F5F] rounded-md text-xs justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(evmstaked*10/100)}>
                   10%
                  </div>
                  <div class=" bg-[#5F5F5F] rounded-md text-xs justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(evmstaked*25/100)}>25%
                  </div>
                  <div class=" bg-[#5F5F5F] rounded-md text-xs justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(evmstaked*50/100)}>50%
                  </div>
                  <div class=" bg-[#5F5F5F] rounded-md text-xs justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(evmstaked*75/100)}>75%
                  </div>
                  <div class=" bg-[#5F5F5F] rounded-md text-xs justify-center text-center items-center text-white" 
                  onClick ={(e)=>setAmount(evmstaked)}>MAX
                  </div>
                  <div class=" col-span-5 justify-end text-right items-center text-white text-xs mr-[10px]">{"LP Staked: "+evmstaked}
                  </div>
                  <div class=" col-span-10 row-span-6 mt-[20px]">
                  
                    <button class="cutcorner box-border border-[#000000] bg-[#DD6AB7] h-[40px] overflow-hidden " type="button" onClick={withdraw}>
                      <p class="text-[#000000] text-xl py-[5px] px-[120px] mr-[20px] ml-[30px] " >{"- UNSTAKE"}</p>
                    </button>
                  </div>
                  <div class=" text-xs col-span-10 row-span-3 justify-center text-center items-center text-white mt-[20px]">Get EVM-BNB LP
                  </div>
              </form>
            </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modaltwo;
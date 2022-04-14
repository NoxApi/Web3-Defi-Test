import React from 'react';
import { Dialog,Transition  } from '@headlessui/react'
import { useContext,Fragment,useRef } from 'react'
import { MainContext } from '../../App';
const SuccessModal = () => {
    const {setBluramount,setIsSuccess,isSuccess} = useContext(MainContext)
    let completeButtonRef = useRef(null)
    function closeModal() {
        setIsSuccess(false)
        setBluramount("blur(0px)")
      }
    
      function openModal() {
        setIsSuccess(true)
      }

  return (
    <>
    <Transition appear show={isSuccess} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={completeButtonRef}
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

          {/* This element is to trick the browser into centering the modal contents. */}
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
              <div class="flex ">
              <img src={require('../../images/success.png')} alt='logo' class=" h-[40px] "  />
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-white mt-[10px] ml-[10px]"
                >
                  Success
                </Dialog.Title>
                <button type="button" class=" rounded-md ml-[250px] mb-[10px] inline-flex items-end justify-center pb-[2px] text-gray-400 hover:text-gray-500 overflow-hidden "   onClick={()=>closeModal()}>
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                </button>
              </div>
              <div class=" mt-[40px]">
                <p class="text-sm text-[#c2c2c2]">
                Your transaction has been successful mined.
                </p>
              </div>
              <button class="box-border border-[#6e6c6c] bg-[#181D31] mt-[40px] rounded-lg border-2 overflow-hidden" type="button" onClick={()=>closeModal()}>
                      <p class="text-[#FFFFFF] text-xl py-[5px] px-[140px] mx-[20px] " >{"Close"}</p>
              </button>
          </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  </>
  );
};

export default SuccessModal;
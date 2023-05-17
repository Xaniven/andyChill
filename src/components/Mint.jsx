import React, { useState } from "react";
import { abi } from "../andyChillAbi.json";
import { ethers, BigNumber } from "ethers";
import "../App.scss";
const contractAddy = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";

async function mintToken() {
  console.log(abi);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract({
    contractAddy,
    abi,
    signer,
  });
  try {
    const response = await contract.uri(BigNumber.from(mintCount));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default function Mint({ accounts }) {
  const [mintCount, setMintCount] = useState(1);
  return (
    <section id='mint' className='h-[90vh]  max-w-[100vw] px-10 relative grid place-content-center'>
      <div class='absolute top-[-2px] left-0 w-[100%] overflow-hidden rotate-180 -z-9'>
        <svg
          className='relative block w-[100%] h-[150px]'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z'
            class='fill-[#ef2bb7]'
          ></path>
        </svg>
      </div>
      <div className='h-[50vh] w-[50vw] bg-slate-600 border-2 border-black rounded-xl grid place-content-center text-center'>
        <div className='h-[40vh] w-[40vw] bg-slate-300 rounded-xl border-4 border-white grid place-content-center'>
          <p className='text-3xl w-[100%] '> Mint 'andyChill'</p>
          <p>Wallet: {accounts ? accounts[0] : "No wallet connected"}</p>
          <div className=' text-2xl m-2'>
            <button onClick={() => setMintCount(1)}>-</button>
            <input className='w-8 m-2 text-center' value={mintCount} />
            <button
              onClick={() => {
                setMintCount(2);
              }}
            >
              +
            </button>
            <p className='text-sm'>(limit 2)</p>
          </div>
          <button
            disabled={!accounts}
            onClick={() => mintToken()}
            className=' text-2xl w-[fit] p-2 rounded-xl bg-red-700 border-2 border-white '
          >
            Mint
          </button>
          <p className='text-md p-2 underline hover:text-blue-600'>
            <a href=''> View contract on etherscan</a>
          </p>
        </div>
      </div>
    </section>
  );
}

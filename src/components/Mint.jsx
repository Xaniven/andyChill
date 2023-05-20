import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import * as andychill from "../andychill.json";
import shots from "../assets/IMG-0179.png";
import "../App.scss";

const contractAddy = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";

export default function Mint({ accounts }) {
  const [mintCount, setMintCount] = useState(1);

  async function mintToken() {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const tx = signer.sendTransaction({
    //   to: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    //   value: ethers.utils.parseEther("0.5"),
    // });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract(contractAddy, andychill.abi, signer);
    try {
      const response = await contract.mint(1, BigNumber.from(mintCount));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section
      id='mint'
      className='h-[90vh]  max-w-[100vw] px-10 relative grid place-content-center snap-start'
    >
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
            class='fill-[#0285c7]'
          ></path>
        </svg>
      </div>
      <div className='h-[60vh] w-[60vw] bg-slate-600 border-2 border-black rounded-xl grid place-content-center text-center'>
        <div className='h-[fit] w-[50vw] bg-slate-300 rounded-xl border-4 border-white grid place-content-center p-2'>
          <div className='w-[100%] grid place-content-center'>
            <img
              src={shots}
              width={"240px"}
              alt=''
              className='border-4 border-black hover:scale-150'
            />
          </div>
          <p className='text-2xl font-bold underline w-[100%] '> Mint 'Shots'</p>

          <div className=' text-xl m-2'>
            <button onClick={() => setMintCount(1)}>-</button>
            <input className='w-8 m-2 text-center' value={mintCount} />
            <button
              onClick={() => {
                setMintCount(2);
              }}
            >
              +
            </button>
            <p className='text-sm'>Price: Free +Gas (limit 2)</p>
          </div>
          <p className='underline p-2'>
            Connected Wallet: {accounts ? accounts[0] : "No wallet connected"}
          </p>
          <button
            disabled={!accounts[0]}
            onClick={() => mintToken()}
            className=' text-2xl  p-2 rounded-xl hover:bg-sky-400 bg-sky-600 border-2 border-white disabled:bg-slate-500 '
          >
            {accounts[0] ? "Mint" : "Please Connect"}
          </button>
          <p className='text-md p-2 underline hover:text-blue-600'>
            <a href=''> View contract on Etherscan</a>
          </p>
        </div>
      </div>
    </section>
  );
}

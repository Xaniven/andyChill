import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import * as andychill from "../andychill.json";
import shots from "../assets/IMG-0179.png";
import "../App.scss";
import Spinner from "./Spinner";
import { motion as m } from "framer-motion";

const contractAddy = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
// console.log("log: " + log, " event: " + event);
export default function Mint({ accounts }) {
  const [mintCount, setMintCount] = useState(1);
  const [awaitMint, setAwaitMint] = useState(false);
  const [txConfirm, setTxConfirm] = useState({});

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

    const filter = {
      address: contractAddy,
      events: [
        // the name of the event, parnetheses containing the data type of each event, no spaces
        ethers.utils.id("MintComplete(address,uint256)"),
      ],
    };
    try {
      await contract.mint(1, BigNumber.from(mintCount));
      contract.on(filter, (log, _reciver) => {
        console.log(log, _reciver);

        if (log.event === "MintComplete") {
          setTxConfirm(log);
          setAwaitMint(false);
          document.getElementById("mintButton").className = "hidden";
          document.getElementById("onComplete").className = "text-md p-2 underline";
          document.getElementById("onComp").setAttribute("disabled", "true");
        }
      });
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
      <m.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        className='min-h-[fit] w-[60vw] bg-slate-600 border-2 border-black rounded-xl grid place-content-center text-center p-4'
      >
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
            id='mintButton'
            disabled={!accounts[0]}
            onClick={() => mintToken().then(setAwaitMint(true))}
            className='text-2xl  p-2 rounded-xl hover:bg-sky-400 bg-sky-600 border-2 border-white disabled:bg-slate-500 '
          >
            {accounts[0] ? awaitMint ? <Spinner /> : "Mint" : "Please Connect"}
          </button>
          <p id='onComplete' className='hidden '>
            <button
              id='onComp'
              className='text-2xl p-2 rounded-xl bg-green-600 border-2 border-white'
            >
              Minted {mintCount} NFT{mintCount === 1 ? "" : "'s"}
            </button>
            <br />
            <a
              className='hover:text-blue-600'
              href={"https://etherscan.io/tx/" + txConfirm.transactionHash}
            >
              View Transaction on Etherscan
            </a>
          </p>
          <p className='text-md  underline hover:text-blue-600'>
            <a href=''> View contract on Etherscan</a>
          </p>
        </div>
      </m.div>
    </section>
  );
}

import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import * as andychill from "../andychill.json";
import shots from "../assets/IMG-0179.png";
import Spinner from "./Spinner";
import { motion as m } from "framer-motion";
import "../App.scss";

// mumbai contract "0x3eE23a24eF93bc260a4E02E7913e0a6118228749";
const contractAddy = "0x55d92654A198d9Ab47E26Cc83E83675CE29CD3ad";

export default function Mint({ accounts }) {
  const [mintCount, setMintCount] = useState(1);
  const [awaitMint, setAwaitMint] = useState(false);
  const [txConfirm, setTxConfirm] = useState({});
  const [dueDil, setDueDil] = useState(false);

  async function mintToken() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(0);
    const contract = new ethers.Contract(contractAddy, andychill.abi, signer);
    //filter
    const filter = {
      address: contractAddy,
      events: [
        // the name of the event, parnetheses containing the data type of each event, no spaces
        ethers.utils.id("MintComplete(address,uint256)"),
      ],
    };
    const non = await provider.getTransactionCount(accounts[0]);
    console.log(non);
    try {
      //call mint on contract
      await contract.mint(0, BigNumber.from(mintCount));
      //listen for MintComplete event
      contract.on(filter, (log, _reciver) => {
        //sets new ui on MintComplete
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
      setAwaitMint(false);
    }
  }
  const dia = document.getElementById("dia");
  return (
    <section id='mint' className='h-[90vh] max-w-[100vw] px-10 relative grid place-content-center '>
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
        transition={{ delay: 0.5 }}
        className='min-h-[fit] w-[60vw] bg-slate-500 border-2 border-black rounded-xl grid place-content-center text-center p-4'
      >
        <div className='h-[fit] w-[50vw] bg-slate-300 rounded-xl border-4 border-slate-800 grid place-content-center p-2'>
          <div className='w-[100%] grid place-content-center'>
            <img
              src={shots}
              width={"240px"}
              alt=''
              className='rain border-4 border-black hover:scale-150'
            />
          </div>
          <p className='text-2xl font-bold underline w-[100%] '> Mint 'The First Shift'</p>

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
            <p className='text-sm rounded-xl p-1 bg-slate-200'>Price: Free +Gas (limit 2)</p>
          </div>
          <p className='underline p-1 m-2 rounded-xl bg-slate-400'>
            Connected Wallet: {accounts ? accounts[0] : "No wallet connected"}
          </p>
          <button
            id='mintButton'
            disabled={!accounts[0]}
            onClick={() => (dueDil ? mintToken().then(setAwaitMint(true)) : dia.showModal())}
            className=' text-2xl  p-2 rounded-xl hover:bg-sky-400 bg-sky-600 border-2 border-white disabled:bg-slate-500 '
          >
            {accounts[0] ? awaitMint ? <Spinner /> : "Mint" : "Please Connect"}
          </button>
          <p id='onComplete' className='hidden '>
            <button
              id='onComp'
              className=' text-2xl p-2 rounded-xl bg-green-600 border-2 border-white'
            >
              Minted: {mintCount} NFT{mintCount === 1 ? "" : "'s"}
            </button>
            <br />
            <a
              className='hover:text-blue-600'
              href={"https://etherscan.io/tx/" + txConfirm.transactionHash}
              target='_blank'
              rel='noopener noreferrer'
            >
              View Transaction on Etherscan
            </a>
          </p>
        </div>
      </m.div>

      <div className='wtf'>
        <dialog
          className=' h-[fit] p-2 w-[50%] border-4 bg-slate-400 border-black rounded-2xl text-center overflow-hidden '
          id='dia'
        >
          <h1 className='text-2xl font-bold border-b-2 p-2 drop-shadow-lg'>Due Diligence Check</h1>
          <p className='font-bold p-2 m-2 text-lg border-b-2 drop-shadow-lg'>
            <span className='text-2xl italic underline underline-offset-4'>
              Signing a smart contract should be a conscious decision and you should get in the
              habit of verifing before signing any transaction!{" "}
            </span>
            <br />
          </p>
          <p className='  '>
            <span className=' underline underline-offset-4 hover:text-sky-400 text-sky-700'>
              <a href='https://twitter.com/xaniven' target='_blank' rel='noopener noreferrer'>
                "Andy Chill" is and NFT project by @Xaniven.eth
              </a>{" "}
              <br />
            </span>
            <span className='underline underline-offset-4 hover:text-sky-400 text-sky-700 '>
              <a
                href='https://polygonscan.com/address/0x55d92654A198d9Ab47E26Cc83E83675CE29CD3ad#code'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                Verify contract on Polygonscan.{" "}
              </a>{" "}
              <br />
            </span>
            <span className='underline underline-offset-4 hover:text-sky-400 text-sky-700'>
              <a
                href='https://github.com/Xaniven/andyChill'
                target='_blank'
                rel='noopener noreferrer'
              >
                {" "}
                View website's source code on Github
              </a>
            </span>
          </p>
          <form className='flex flex-col items-center  h-[100%] w-[100%] ' method='dialog'>
            <div className='p-2'>
              <input required type='checkbox' name='ddCheck' id='ddCheck' />
              <label htmlFor='checkbox'>I have read & understand</label>
            </div>
            <button
              className='w-fit bg-sky-600 p-2 rounded-lg '
              onClick={() => {
                setDueDil(true);
              }}
            >
              Continue
            </button>
          </form>
        </dialog>
      </div>
    </section>
  );
}

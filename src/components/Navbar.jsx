import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { BsDiscord } from "react-icons/bs";
import MMfox from "/assets/MetaMask_Fox.svg";
import CB from "/assets/CB.svg";
import WC from "/assets/WC.svg";
import WC2 from "/assets/WC2.svg";
import "../App.scss";
import { useState } from "react";

//make sure user is on polygon network
export async function moveToPolygon() {
  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x89",
        rpcUrls: ["https://polygon-rpc.com/"],
        chainName: "Polygon Mainnet",
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18,
        },
        blockExplorerUrls: ["https://polygonscan.com/"],
      },
    ],
  });
}

export default function Navbar({ setAccounts, accounts }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { open, close } = useWeb3Modal();
  const { address, isConnected } = useAccount();

  //connect metamask and coinbase wallet
  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      moveToPolygon();
    } else {
      alert("Metamask/Injected provider no detected");
    }
  }

  return (
    <>
      <nav
        className='w-[100%] h-[10vh] px-4 bg-stone-900 shadow-xl sticky top-0 z-20'
        aria-label='main menu'
      >
        <div class='lg:hidden flex h-[100%]'>
          <button
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            class='navbar-burger flex items-center text-sky-600 p-2 h-[100%]'
          >
            <svg
              class='block h-8 w-8 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
          <p className='text-2xl pt-8 text-center w-[100%] text-white'>AndyChill.eth</p>
          <div
            className={
              toggleMenu ? " bg-slate-600 h-[90vh] w-[35vw] absolute left-0 top-[10vh]" : "hidden"
            }
          >
            <ul className=' h-[80%] flex flex-col justify-evenly text-2xl text-center '>
              <li className='underline underline-offset-2 hover:text-sky-600 hover:scale-105'>
                <a href='#home'> Home</a>
              </li>
              <li className=' underline underline-offset-2 hover:text-sky-600 hover:scale-105'>
                <a href='#about'> Who am i?</a>
              </li>
              <li className=' underline underline-offset-2 hover:text-sky-600 hover:scale-105'>
                <a href='#mint'> Mint</a>
              </li>
            </ul>
            <div className='h-[15%] flex flex-col justify-between'>
              <button
                onClick={() => {
                  connectWallet();
                  setToggleMenu(false);
                }}
                className='flex w-[100%] justify-evenly border-b-2 p-6'
              >
                <img src={MMfox} width={"36px"} alt='' />
                <img src={CB} width={"36px"} alt='' />
              </button>
              <button
                onClick={() => {
                  open();
                  setToggleMenu(false);
                  setAccounts([address]);
                }}
              >
                {" "}
                <img src={WC} width={"240px"} alt='Wallet Connect Logo' />
              </button>
            </div>
          </div>
        </div>

        <div className='w-[100%] h-[100%] p-4  items-center justify-evenly text-white hidden lg:flex'>
          <a href='/' className='w-[12vw] p-2 text-2xl'>
            Andy Chill
          </a>
          <div className='w-[100%] h-fit flex justify-start'>
            <ul className='w-[35vw] flex justify-evenly text-xl '>
              <li className='hover:underline hover:text-sky-600 hover:scale-105'>
                <a href='#home'> Home</a>
              </li>
              <li className='hover:underline hover:text-sky-600 hover:scale-105'>
                <a href='#about'> Who am i?</a>
              </li>
              <li className='hover:underline hover:text-sky-600 hover:scale-105'>
                <a href='#mint'> Mint</a>
              </li>
            </ul>
          </div>
          <a
            href='https://discord.gg/2hhpHbxuPX'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block pr-6 hover:text-sky-600 hover:scale-105 '
          >
            <div className='group peer w-fit h-[10vh] grid place-items-center text-center '>
              {" "}
              <BsDiscord size={"46px"} />
              <iframe
                src='https://discord.com/widget?id=1112479422247878699&theme=dark'
                className='hidden absolute group-hover:block top-[9.8vh] shadow-xl drop-shadow-xl'
                width='350'
                height='500'
                allowtransparency='true'
                frameborder='0'
                sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
              ></iframe>
            </div>
          </a>
          <div className='group peer w-fit h-[10vh] grid place-items-center text-center '>
            <div
              disabled={true}
              className={
                accounts[0]
                  ? "w-[12vw] p-2 rounded-xl bg-sky-700  border-2 border-white  "
                  : "w-[12vw] p-2 rounded-xl bg-sky-700 hover:bg-sky-600 border-2 border-white  "
              }
            >
              {accounts[0]
                ? accounts[0].slice(0, 4) + "..." + accounts[0].slice(36, 42)
                : "Connect"}
              <div className=' w-[fit] h-fit hidden rounded-xl border-2 border-black overflow-hidden group-focus-within:block peer-hover:block group-hover:block absolute right-2 top-[10vh]  bg-stone-300 text-black'>
                {accounts[0] ? (
                  <div className=''>
                    <p className='p-2'>
                      {" "}
                      Current Wallet: <br /> {accounts[0]}
                    </p>
                    {console.log(isConnected)}
                    {isConnected ? (
                      <button
                        className=' p-2 bottom-0 left-2 absolute border-4 bg-sky-600  rounded-2xl hover:bg-sky-500 mb-2'
                        onClick={() => open()}
                      >
                        <img src={WC2} className='' width={"32px"} alt='' />
                      </button>
                    ) : (
                      ""
                    )}
                    <button
                      className=' relaive right-0  p-2 border-4 bg-sky-600  rounded-2xl hover:bg-sky-500 mb-2'
                      onClick={() => setAccounts([])}
                    >
                      Disconnect
                    </button>
                  </div>
                ) : (
                  <>
                    <div
                      onClick={connectWallet}
                      className='w-[15vw] h-16 flex justify-evenly border-b-2 border-black text-black hover:bg-slate-400 p-1'
                      aria-label='Metamask & Coinabse Wallet Button'
                    >
                      <img src={MMfox} width={"98px"} alt='' />
                      <img src={CB} width={"98px"} alt='' />
                    </div>
                    <div
                      onClick={() => {
                        open();
                        setAccounts([address]);
                      }}
                      className='w-[100%] h-16  aspect-square grid place-items-center border-b-2 border-black text-black hover:bg-slate-400 p-1'
                      aria-label='WalletConnect Button'
                    >
                      <img src={WC} width={"240px"} alt='Wallet Connect Logo' />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

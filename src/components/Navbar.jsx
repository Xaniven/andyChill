import AuthClient, { generateNonce } from "@walletconnect/auth-client";
import { Web3Modal } from "@web3modal/standalone";
import MMfox from "../assets/MetaMask_Fox.svg";
import WC from "../assets/WC.svg";
import CB from "../assets/CB.svg";
import "../App.scss";

const projectId = import.meta.env.VITE_WALLET_CONNECT_KEY;
console.log(import.meta.env.VITE_WALLET_CONNECT_KEY);
const web3Modal = new Web3Modal({
  projectId,
  walletConnectVersion: 2,
  // desktopWallets: [
  //   {
  //     id: string,
  //     name: string,
  //     links: { native: string, universal: string },
  //   },
  // ],
});

const authClient = await AuthClient.init({
  projectId,
  metadata: {
    name: "Andy Chill",
    description: "Andy Chillmeleon NFT",
    url: "https://andy.chill",
    icons: ["https://lab.web3modal.com/favicon.ico"],
  },
});
authClient.on("auth_response", () => {
  web3Modal.closeModal();
});

const { uri } = await authClient.request({
  aud: "https://yourapp.com/",
  domain: "yourapp.com",
  chainId: "eip155:1",
  type: "eip4361",
  nonce: generateNonce(),
  statement: "Sign in with wallet.",
});

export default function Navbar({ setAccounts, accounts }) {
  async function walletConnect() {
    const walletConnectWallet = await web3Modal.openModal({ uri });
    console.log(walletConnectWallet);
    setAccounts(walletConnectWallet);
  }

  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);
      setAccounts(accounts);
    }
  }
  return (
    <>
      <nav
        className='max-w-[100vw] h-[10vh] px-4 bg-stone-900 shadow-xl sticky top-0 z-20 '
        aria-label='main menu'
      >
        <div className='w-[100%] h-[100%] p-4 flex items-center justify-evenly text-white '>
          <a href='/' className='w-[10vw] p-2 text-2xl'>
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
          <div className='group peer w-fit h-[10vh] grid place-items-center text-center'>
            <div
              disabled={true}
              className={
                accounts[0]
                  ? "rain w-[12vw] p-2 rounded-xl bg-sky-700  border-4 border-white "
                  : "rain w-[12vw] p-2 rounded-xl bg-sky-700 hover:bg-sky-600 border-4 border-white "
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
                    <button
                      className='rain p-2 border-4 bg-sky-600  rounded-2xl hover:bg-sky-500 mb-2'
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
                      onClick={walletConnect}
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

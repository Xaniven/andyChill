import { useState } from "react";
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Mint from "./components/Mint";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.scss";

const contractAddy = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
const chains = [polygon];
const projectId = import.meta.env.VITE_WALLET_CONNECT_KEY;

//wallet coinnect
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className='max-w-[100vw]'>
      <div className='App text-black'>
        <WagmiConfig config={wagmiConfig}>
          <Navbar setAccounts={setAccounts} accounts={accounts} />
        </WagmiConfig>
        <Hero />
        <About />
        <Mint accounts={accounts} />
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        <button
          onClick={() => {
            console.log(ethereumClient);
          }}
        ></button>
        <Footer />
      </div>
    </div>
  );
}

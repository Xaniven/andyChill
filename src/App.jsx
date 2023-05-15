import { useState } from "react";
import { ethers } from "hardhat";
import Navbar from "./components/Navbar";
import "./App.scss";
import About from "./components/About";
import Mint from "./components/Mint";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const contractAddy = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

function App() {
  const [accounts, setAccounts] = useState();
  const [quantity, setQuantity] = useState(1);

  async function mintToken() {
    if (window.ethereum) {
      const provider = new ethers.provider.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.contract({
        contractAddy,
        contractABI,
        signer,
      });
      try {
        const response = await contract.mint(BigNumber.from(quantity));
      } catch (error) {
        console.log(error);
      }
    }
  }
  //not sure if i'll have a burn but
  async function burnToken() {
    if (window.ethereum) {
      const provider = new ethers.provider.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.contract({
        contractAddy,
        contractABI,
        signer,
      });
      try {
        const response = await contract.burn(BigNumber.from(quantity));
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <div className='App text-black hidden lg:block'>
        <Navbar setAccounts={setAccounts} accounts={accounts} />
        <div className=''>
          <Hero />
          <About />
          <Mint accounts={accounts} mint={mintToken} />
          <Footer />
        </div>
      </div>
      {/* //replace this with fuction to check if browser is mobile */}
      <div className='ifMobile block lg:hidden'>Please use a desktop browser</div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.scss";
import { ethers, BigNumber } from "ethers";

const [accounts, setAccount] = useState();
const [quantity, setQuantity] = useState(1);

const contractAddy = "0x";

async function connectWallet() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts);
    console.log(accounts);
  }
}

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

function App() {
  return <div className='App'>hello world</div>;
}

export default App;

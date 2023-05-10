import { useState } from "react";
import "./App.scss";

function App() {
  const contractAddy = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

  const [accounts, setAccount] = useState();
  const [quantity, setQuantity] = useState(1);

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
  //
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
    <div className='App'>
      <button onClick={connectWallet}> connect wallet</button>
    </div>
  );
}

export default App;

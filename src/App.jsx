import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.scss";
import About from "./components/About";
import Mint from "./components/Mint";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const contractAddy = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  //not sure if i'll have a burn but
  // async function burnToken() {
  //   if (window.ethereum) {
  //     const provider = new ethers.provider.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.contract({
  //       contractAddy,
  //       contractABI,
  //       signer,
  //     });
  //     try {
  //       const response = await contract.burn(BigNumber.from(quantity));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }
  return (
    <div className=''>
      <div className='App text-black hidden lg:block'>
        <Navbar setAccounts={setAccounts} accounts={accounts} />
        <Hero />
        <About />
        <Mint accounts={accounts} />
        <Footer />
      </div>
      {/* //replace this with fuction to check if browser is mobile */}
      <div className='ifMobile block lg:hidden'>Mobile Browsers not currently supported</div>
    </div>
  );
}

export default App;

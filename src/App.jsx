import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Mint from "./components/Mint";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.scss";

const contractAddy = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

export default function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className='max-w-[100vw]'>
      <div className='App text-black'>
        <Navbar setAccounts={setAccounts} accounts={accounts} />
        <Hero />
        <About />
        <Mint accounts={accounts} />
        <Footer />
      </div>
    </div>
  );
}

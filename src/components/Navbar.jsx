export default function Navbar({ setAccounts }) {
  async function connectWallet() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
      console.log(accounts);
    }
  }

  return (
    <>
      <nav className='min-w-[100vw] min-h-[12vh] bg-red-500'>
        <button className=' bg-slate-600' onClick={connectWallet}>
          {" "}
          connect wallet
        </button>
      </nav>
    </>
  );
}

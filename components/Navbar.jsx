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
      <nav className='min-w-[100vw] min-h-[12vh] bg-slate-500'>
        <button className=' bg-slate-600 h-8 w-8 ' onClick={connectWallet}>
          {" "}
          connect wallet
        </button>

        <div className='bg-black h-8 w-8'> </div>
      </nav>
    </>
  );
}

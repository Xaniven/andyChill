export default function Navbar({ setAccounts, accounts }) {
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
          <a href='/' className='w-[15vw] p-2 text-2xl'>
            i am andyChill
          </a>
          <div className='w-[100%] h-fit flex justify-start'>
            <ul className='w-[35vw] flex justify-evenly text-xl '>
              <li className='hover:underline hover:text-red-600 hover:scale-105'>
                <a href='#home'> Home</a>
              </li>
              <li className='hover:underline hover:text-red-600 hover:scale-105'>
                <a href='#about'> Who am i?</a>
              </li>
              <li className='hover:underline hover:text-red-600 hover:scale-105'>
                <a href='#mint'> Mint</a>
              </li>
            </ul>
          </div>
          <button
            className={
              accounts
                ? "w-[fit] p-2 rounded-xl bg-red-800 hover:bg-red-600 hover:scale-105 group  hidden lg:block"
                : "w-[10vw] py-2 rounded-xl bg-red-800 hover:bg-red-600 hover:scale-105 group hidden lg:block "
            }
            onClick={connectWallet}
          >
            {accounts
              ? accounts[0].slice(0, 4) + "..." + accounts[0].slice(36, 42)
              : "Connect Wallet"}
            <div className=' hidden group-hover:block absolute -right-2 m-2'>{accounts[0]}</div>
          </button>
        </div>
      </nav>
    </>
  );
}

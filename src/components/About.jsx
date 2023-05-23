import andysec from "../assets/IMG-0176.png";
import "../App.scss";

export default function About() {
  return (
    <section id='about' className='h-[100vh] max-w-[100vw] px-10 relative'>
      <div className='tailwindDoesntHaveRotateY😭 absolute block bottom-0 left-0 w-[100%] overflow-hidden rotate-180 -z-10'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path d='M1200 120L0 1 0 0 1200 0 1200 120z' class='fill-[#ef2bb7]'></path>
        </svg>
      </div>
      <img
        src={andysec}
        alt=''
        className=' drop-shadow-2xl h-[75%] shadow-2xl border-8 border-sky-500 absolute right-20 top-20'
      />
    </section>
  );
}

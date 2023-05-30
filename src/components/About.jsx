import { motion as m } from "framer-motion";
import andysec from "../assets/IMG-0176.png";
import "../App.scss";

export default function About() {
  return (
    <section id='about' className='h-[90vh] max-w-[100vw] px-10 relative'>
      <div className='tailwindDoesntHaveRotateY😭 absolute block bottom-0 left-0 w-[100%] h-[100%] rotate-180 -z-10'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path d='M1200 120L0 1 0 0 1200 0 1200 120z' class='fill-[#ef2bb7]'></path>
        </svg>
      </div>

      <m.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        src={andysec}
        alt=''
        className=' drop-shadow-2xl shadow-2xl  h-[75%] border-8 border-sky-500 absolute right-20 top-20 opacity-90  '
      />
      <div className='w-[55vw] h-[100%] p-2 absolute flex flex-col justify-evenly text-left rounded-xl  font-semibold'>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className='w-[100%] '
        >
          <p className='relative  w-[75%] opacity-90 bg-slate-200 rounded-xl p-4 drop-shadow-xl shadow-xl border-4 border-black '>
            {" "}
            Andy is a simple Chillmeleon, he like basking in the sun, swimming in the swamp and he
            <span className=' font-bold italic'> likes the art.</span> One day while enjoying tacos
            on beaches of miami, He cam across some art he liked and decided to become the artist.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className='w-[100%] flex justify-end'
        >
          <p className=' w-[75%]  bg-slate-200 rounded-xl p-4 opacity-90 drop-shadow-xl shadow-xl border-4 border-black'>
            {" "}
            Andy is a simple Chillmeleon, he like basking in the sun, swimming in the swamp and he
            <span className=' font-bold italic'> likes the art.</span> One day while enjoying tacos
            on beaches of miami, He cam across some art he liked and decided to become the artist.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className='w-[100%]'
        >
          <p className='relative  w-[75%] bg-slate-200 rounded-xl p-4 opacity-90 drop-shadow-xl shadow-xl border-4 border-black'>
            {" "}
            "Andy Chill" is an ERC-1155 project by Xaniven. This was an idea I had 2 years ago when
            I first got into NFT's but didn't have the technical skills to do it at the time. I have
            since learned solidity and web devlopment and wanted to bring the idea to fruition as a
            side project to help me get a job. This project is ment to be a perfomative art project
            and will change over time as I get new ideas and the skills to pull them off.
          </p>
        </m.div>
      </div>
    </section>
  );
}

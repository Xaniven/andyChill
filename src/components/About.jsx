import { motion as m } from "framer-motion";
import andysec from "../assets/IMG-0177.png";
import "../App.scss";

export default function About() {
  return (
    <section id='about' className='min-h-[90vh] max-w-[100vw] lg:px-10 relative overflow-hidden'>
      <div className='tailwindDoesntHaveRotateY😭 absolute block bottom-0 left-0 w-[100vw] h-[100vh] rotate-180 -z-10'>
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
        className='rain drop-shadow-2xl shadow-2xl  lg:h-[75%] border-8 border-sky-500 lg:absolute right-20 top-20 opacity-90  '
      />
      <div className='lg:w-[55vw] h-[100%] p-2 lg:absolute flex flex-col gap-16 lg:gap-0 justify-evenly text-left rounded-xl  font-semibold'>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className='w-[100%] '
        >
          <p className=' lg:w-[75%] opacity-90 bg-slate-200 rounded-xl p-4 drop-shadow-xl shadow-xl border-4 border-black '>
            {" "}
            Andy is a simple Chillmeleon, he likes basking in the sun, swimming in the swamp and he
            <span className=' font-bold italic'> likes the art.</span> One day while enjoying tacos
            on beaches of miami, He came across some art he liked and decided it would become his
            next inspiration.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className='w-[100%] flex justify-end'
        >
          <p className='lg:w-[75%]  bg-slate-200 rounded-xl p-4 opacity-90 drop-shadow-xl shadow-xl border-4 border-black'>
            {" "}
            Andy admired Warhol's ability to transform ordinary objects into captivating art.
            Inspired, he sought to emulate this brilliance. With each sunlit morning, Andy he would
            change his skin to reflect a different pop of color, and photograph it. He soon had
            recreated is idols work, and minted for all the world to enjoy.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className='w-[100%]'
        >
          <p className='lg:w-[75%] bg-slate-200 rounded-xl p-4 opacity-90 drop-shadow-xl shadow-xl border-4 border-black'>
            {" "}
            "Andy Chill" is an ERC-1155 project by Xaniven. This was an idea I had 2 years ago when
            I first got into NFT's but didn't have the technical skills to do it at the time. I have
            since learned solidity and web devlopment and wanted to bring the idea to fruition as a
            side project to help build my portfolio. This project is ment to be a perfomative art
            project and will change over time as I get new ideas and the skills to pull them off.
          </p>
        </m.div>
      </div>
    </section>
  );
}

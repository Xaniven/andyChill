import { motion as m } from "framer-motion";

export default function Hero() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      id='home'
      className='min-h-[90vh] max-w-[100vw] lg:px-10 lg:pt-8 lg:relative grid place-items-center overflow-hidden '
    >
      <div className='absolute block top-0 left-0 w-[100vw] -z-10'>
        <svg
          className='relative block w-[100%] h-[100vh]'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path d='M1200 120L0 0 0 0 1200 0 1200 120z' className='fill-[#95f80a]'></path>
        </svg>
      </div>
      <div className='heroContent grid place-content-center place-items-center gap-12 lg:flex-col lg:flex h-[100%] max-w-[100vw]'>
        <img
          src='/assets/IMG-0193.PNG'
          className='rain drop-shadow-2xl lg:h-[75%] lg:shadow-2xl border-8 border-sky-500 lg:absolute lg:left-20 lg:top-20'
          alt=''
        />
        <div className='lg:w-[60vw] lg:h-fit lg:rotate-[28deg] lg:absolute lg:top-[35vh] lg:right-12 bg-neutral-300 rounded-xl p-2 mt-2 drop-shadow-2xl shadow-2xl'>
          <h1 className=' text-5xl font-bold pb-2'>I am Andy Chill</h1>
          <p className='text-2xl '>
            Born into a colorful world in May of 2021, I immediately became tranfixed with you
            humans and your self expression. One of you particularly entriged me, one Mr. Warhol. I
            knew on sight, he was the one I would imitate and base myself on.
          </p>
        </div>
        <div className=' lg:absolute lg:bottom-[25%] lg:left-[33%] w-96 bg-neutral-300 rounded-xl p-2 mb-8'>
          “Art is anything you can get away with. -Andy Warhol” -Andy Chill
        </div>
      </div>
    </m.section>
  );
}

import React from "react";
import "../App.scss";

export default function Mint() {
  return (
    <section id='mint' className='h-[90vh]  max-w-[100vw] px-10 relative'>
      <div class='absolute top-[-2px] left-0 w-[100%] overflow-hidden rotate-180 -z-20'>
        <svg
          className='relative block w-[100%] h-[131px]'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z'
            class='fill-[#0090ea]'
          ></path>
        </svg>
      </div>
    </section>
  );
}

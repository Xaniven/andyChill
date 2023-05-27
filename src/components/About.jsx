import andysec from "../assets/IMG-0176.png";
import "../App.scss";
import { motion as m } from "framer-motion";

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
      <m.div
        initial={{ opacity: 0, x: -1000 }}
        whileInView={{ opacity: 1, x: 0 }}
        className='w-[55vw] h-[100%] p-2 absolute flex flex-col justify-evenly text-leftrounded-xl'
      >
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className='w-[100%] '
        >
          <p className='relative  w-[75%] opacity-80 bg-white rounded-xl p-4 drop-shadow-xl shadow-xl '>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quod tenetur repellat
            fuga commodi eius ullam, labore odit, quaerat pariatur expedita. Ipsam dignissimos
            quidem architecto provident harum alias consequuntur officiis minima consectetur labore
            nobis numquam nostrum doloribus voluptatibus quaerat reprehenderit impedit non inventore
            quam, voluptas natus eligendi distinctio. Ea, cupiditate?
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className='w-[100%] flex justify-end'
        >
          <p className=' w-[75%]  bg-white rounded-xl p-4 opacity-80 drop-shadow-xl shadow-xl'>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quod tenetur repellat
            fuga commodi eius ullam, labore odit, quaerat pariatur expedita. Ipsam dignissimos
            quidem architecto provident harum alias consequuntur officiis minima consectetur labore
            nobis numquam nostrum doloribus voluptatibus quaerat reprehenderit impedit non inventore
            quam, voluptas natus eligendi distinctio. Ea, cupiditate?
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className='w-[100%]'
        >
          <p className='relative  w-[75%] bg-white rounded-xl p-4 opacity-80 drop-shadow-xl shadow-xl'>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quod tenetur repellat
            fuga commodi eius ullam, labore odit, quaerat pariatur expedita. Ipsam dignissimos
            quidem architecto provident harum alias consequuntur officiis minima consectetur labore
            nobis numquam nostrum doloribus voluptatibus quaerat reprehenderit impedit non inventore
            quam, voluptas natus eligendi distinctio. Ea, cupiditate?
          </p>
        </m.div>
      </m.div>
    </section>
  );
}

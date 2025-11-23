import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen  pt-1'>
      <div className='textstructure mt-40 px-20'>

        {["We Create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className='masker overflow-hidden'>
              <div className='w-fit flex items-center gap-3'>

                {/* Second line animated image bar */}
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                    className="h-[4.7vw] relative top-[0.7vw] rounded overflow-hidden"
                  >
                    <img
                      src="https://plus.unsplash.com/premium_photo-1667857391859-de8d295ca2db?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}

                <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-normal font-["Founder1"] font-medium'>
                  {item}
                </h1>
              </div>
            </div>
          )
        })}

      </div>

      <div className="border-t-[1px] boarder-zinc-800 mt-30 flex justify-between items-center py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

import React from "react";
import { motion } from "framer-motion";

const underlineVariant = {
  initial: { scaleX: 0, originX: 0 },
  hover: { scaleX: 1, originX: 0 }
};

const Footer = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 px-20 py-16 font-["Founder1"] text-zinc-200 flex justify-between'>

      {/* LEFT SIDE */}
      <div className='flex flex-col justify-between w-[48%]'>
        <div>
          <h1 className='text-[9.8vw] leading-[8vw] font-semibold uppercase'>Eye-</h1>
          <h1 className='text-[9.8vw] leading-[8vw] font-semibold uppercase'>Opening</h1>
        </div>
        <p className="tracking-[0.2em] text-[0.9rem]">PORT</p>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex flex-col justify-between w-[48%]'>

        <h1 className='text-[9.5vw] leading-[8vw] font-semibold uppercase'>Presentations</h1>

        <div className='flex justify-between'>

          {/* S L E */}
          <div className="flex flex-col gap-12 text-[0.95rem] leading-tight">

            {/* S */}
            <div>
              <p className="text-[0.85rem] font-semibold mb-2 tracking-wide">S:</p>
              <div className="flex flex-col gap-1">

                {["Instagram", "Behance", "Facebook", "LinkedIn"].map((item,i)=>(
                  <motion.div
                    key={i}
                    initial="initial"
                    whileHover="hover"
                    className="cursor-pointer inline-block"
                  >
                    <span>{item}</span>
                    <motion.div 
                      className="h-[1px] bg-zinc-200" 
                      variants={underlineVariant}
                      transition={{ duration: 0.35 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* L */}
            <div>
              <p className="text-[0.85rem] font-semibold mb-2 tracking-wide">L:</p>
              <div className="flex flex-col gap-4">

                {[
                  "202-1965 W 4th Ave\nVancouver, Canada",
                  "30 Chukarina St\nLviv, Ukraine"
                ].map((loc, i) => (
                  <motion.div
                    key={i}
                    initial="initial"
                    whileHover="hover"
                    className="cursor-pointer inline-block whitespace-pre-line"
                  >
                    <span>{loc}</span>
                    <motion.div
                      className="h-[1px] bg-zinc-200"
                      variants={underlineVariant}
                      transition={{ duration: 0.35 }}
                    />
                  </motion.div>
                ))}

              </div>
            </div>

            {/* E */}
            <div>
              <p className="text-[0.85rem] font-semibold mb-2 tracking-wide">E:</p>
              <motion.div
                initial="initial"
                whileHover="hover"
                className="cursor-pointer inline-block"
              >
                <span>hello@ochi.design</span>
                <motion.div
                  className="h-[1px] bg-zinc-200"
                  variants={underlineVariant}
                  transition={{ duration: 0.35 }}
                />
              </motion.div>
            </div>
          </div>

          {/* M */}
          <div className="flex flex-col text-[0.95rem]">
            <p className="text-[0.85rem] font-semibold tracking-wide mb-2">M:</p>
            <div className="flex flex-col gap-1">
              {["Home", "Services", "Our work", "About us", "Insights", "Contact us"].map((item, i)=>(
                <motion.div
                  key={i}
                  initial="initial"
                  whileHover="hover"
                  className="cursor-pointer inline-block"
                >
                  <span>{item}</span>
                  <motion.div 
                    className="h-[1px] bg-zinc-200" 
                    variants={underlineVariant}
                    transition={{ duration: 0.35 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;

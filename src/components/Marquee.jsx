import React, { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth); // auto detect content width
    }
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap">
        
        <motion.div
          className="flex gap-10"
          style={{ width: width * 2 }}   // double width for seamless repeat
          animate={{ x: [-width, 0] }}
          transition={{
            duration: width / 80, // speed based on size (auto responsive)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Main content */}
          <div ref={marqueeRef} className="flex gap-10">
            <h1 className="text-[17vw] uppercase font-['Founder1'] leading-none font-semibold">we are devs</h1>
            <h1 className="text-[17vw] uppercase font-['Founder1'] leading-none font-semibold">we are devs</h1>
            <h1 className="text-[17vw] uppercase font-['Founder1'] leading-none font-semibold">we are devs</h1>
          </div>

          {/* Clone to continue loop */}
          <div className="flex gap-10">
            <h1 className="text-[17vw] uppercase font-['Founder1'] leading-none font-semibold">we are devs</h1>
            <h1 className="text-[17vw] uppercase font-['Founder1'] leading-none font-semibold">we are devs</h1>
            <h1 className="text-[17vw] uppercase font-['Founder1'] leading-none font-semibold">we are devs</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;

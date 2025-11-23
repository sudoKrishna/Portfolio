import React, { useState } from "react";
import { motion } from "framer-motion";

const Featured = () => {
  const [hoveredText, setHoveredText] = useState("");

  return (
    <div className="w-full py-20">

      {/* Title */}
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue"] tracking-tight'>Featured projects</h1>
      </div>

      {/* Cards Container */}
      <div className="relative px-20">

        {/* ⬇️ Shared Animated Hover Text (Centered Across Both Cards) */}
        <motion.h1
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CDEA68] z-20 pointer-events-none font-[Founder1] uppercase tracking-tight leading-none"
          animate={{
            opacity: hoveredText ? 1 : 0,
            scale: hoveredText ? 3 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {hoveredText.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Cards */}
        <div className="cards w-full flex gap-10 mt-10">

          {/* CARD 1 */}
          <motion.div
            className="relative w-1/2 h-[80vh] overflow-hidden rounded-xl"
            onHoverStart={() => setHoveredText("LENTORN CENTDECE")}
            onHoverEnd={() => setHoveredText("")}
          >
            <motion.img
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              className="w-full h-full object-cover"
              animate={{ scale: hoveredText === "LENTORN CENTDECE" ? 1.1 : 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="relative w-1/2 h-[80vh] overflow-hidden rounded-xl"
            onHoverStart={() => setHoveredText("VISE")}
            onHoverEnd={() => setHoveredText("")}
          >
            <motion.img
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
              className="w-full h-full object-cover"
              animate={{ scale: hoveredText === "VISE" ? 1.1 : 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Featured;

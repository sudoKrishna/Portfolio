import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setShow(false); // scrolling down → hide
      } else {
        setShow(true); // scrolling up → show
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={
        show
          ? { y: 0, opacity: 1, backdropFilter: "blur(12px)" }
          : { y: -100, opacity: 0 }
      }
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed z-[999] w-full px-20 py-8 font-['neue'] flex justify-between items-center bg-[rgba(255,255,255,0.05)] border-b border-white/15"
    >
      <div className="logo text-xl font-semibold">Port</div>

      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden cursor-pointer ${
                index === 4 && "ml-32"
              }`}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Top Text */}
              <motion.span
                className="block text-lg capitalize font-light"
                variants={{
                  rest: { y: 0, opacity: 1 },
                  hover: { y: -20, opacity: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {item}
              </motion.span>

              {/* Hover Text */}
              <motion.span
                className="absolute left-0 top-0 block text-lg capitalize font-light"
                variants={{
                  rest: { y: 20, opacity: 0 },
                  hover: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {item}
              </motion.span>

              {/* Underline */}
              <motion.div
                className="h-[2px] bg-red-500 rounded mt-[3px]"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
              />
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;

"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export function HomeSession() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  return (
    <section className="uppercase font-semibold">
      <motion.h1 ref={ref1} initial={{ opacity: 0, y: 250 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 250 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-[230px] h-56 flex relative items-center right-4  justify-between">
        Lab.
      </motion.h1>
      <div className="bg-[url('/artHome.jpg')] h-96 bg-cover bg-center z-20 relative"></div>
      <div className="flex items-center justify-between">
        <motion.h1 ref={ref1} initial={{ opacity: 0, y: -150 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -150 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-[230px] relative bottom-36 right-5  z-10">
          Lab.
        </motion.h1>
        <button className="text-white flex flex-row-reverse items-center relative group w-full max-w-[340px] overflow-hidden">
          <motion.span ref={ref2} initial={{ opacity: 0, width: "50px" }} animate={isInView2 ? { opacity: 1, width: "288px" } : { opacity: 0, width: "50px" }} transition={{ duration: 0.5 }} className="absolute text-nowrap right-0 -z-10 text-black h-full border-2 rounded-full p-5 mr-4 group-hover:bg-[#e4e4e5] ease-linear duration-300">
            CONTACT US
          </motion.span>
          <div className="p-5 bg-black text-3xl rounded-full">
            <LiaLongArrowAltRightSolid />
          </div>
        </button>
      </div>
    </section>
  );
}

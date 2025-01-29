"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { trans } from "../libs/i18n.lib";
import { Parallax } from "react-parallax";
import Link from "next/link";

export function HomeSession() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define o limite para considerar mobile
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="uppercase font-semibold max-md:min-h-[90vh] mt-4">
      <motion.h1 ref={ref1} initial={{ opacity: 0, y: 100 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} transition={{ duration: 0.5 }} className="text-[230px] h-48 flex relative items-center right-5  justify-between max-md:text-8xl max-md:h-fit max-md:right-1.5 max-md:mt-12">
        <span className="drop-shadow-2xl">Lab.</span>
      </motion.h1>
      <Parallax
        bgImage="/TigerCort.png"
        strength={200}
        bgImageStyle={{
          objectFit: `${isMobile ? "cover" : "contain"}`,
          objectPosition: "center",
        }}
      >
        <div className={`shadow-2xl h-96 ${isMobile ? "bg-cover" : "bg-contain"} bg-bottom z-20 relative max-md:h-72 max-sm:h-52`}></div>
      </Parallax>
      <div className="flex items-center justify-between max-md:items-start max-md:flex-col overflow-hidden">
        <motion.h1 ref={ref2} initial={{ opacity: 0, y: isMobile ? -40 : -150 }} animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? -40 : -150 }} transition={{ duration: 0.5 }} className="text-[230px] z-20 relative bottom-36 right-5 max-md:text-8xl max-md:h-fit max-md:right-1.5 max-md:bottom-6">
          <span className="drop-shadow-2xl z-0">Lab.</span>
        </motion.h1>
        <Link href="https://wa.link/qr8nbk" target="_blank" className="relative group rounded-full max-md:ml-auto h-44 -mt-16 max-md:mt-24">
          <div className="absolute z-0 right-0 text-nowrap py-5 rounded-full border border-black text-sm uppercase font-semibold w-80 text-center group-hover:w-16 duration-300">{trans.t("CONTACT US")}</div>
          <div className="w-16 h-16 text-3xl rounded-full text-white bg-black flex items-center justify-center z-10">
            <LiaLongArrowAltRightSolid className="group-hover:rotate-45 duration-300" />
          </div>
        </Link>
      </div>
    </section>
  );
}

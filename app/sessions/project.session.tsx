"use client";
import React, { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
export function ProjectSession() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);
  useEffect(() => {
    import("plyr").then((PlyrModule) => {
      const Plyr = PlyrModule.default;
      if (videoRef.current) {
        const player = new Plyr(videoRef.current, {
          controls: ["play"],
        });

        player.on("pause", () => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        });

        return () => {
          player.destroy();
        };
      }
    });
  }, []);

  return (
    <section className="relative overflow-hidden">
      <motion.h1 ref={ref} initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="text-4xl uppercase font-bold relative left-24 max-md:text-2xl max-md:left-12">
        Projects
      </motion.h1>
      <div className="mt-14 flex items-center justify-between max-md:mt-5">
        <motion.h2 ref={ref2} initial={{ opacity: 0, x: 50, rotate: "90deg" }} animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-6xl font-black transform rotate-90 uppercase absolute -right-36 top-3/5 max-lg:mr-0">
          Showcase
        </motion.h2>
        <video ref={videoRef} className="shadow-xl max-w-[700px] object-cover min-h-[450px] max-lg:max-w-[90vw] max-md:min-h-[200px] max-sm:min-h-[300px] max-sm:max-lg:max-w-[85vw]  z-10" poster="/thumbnail.png" controls>
          <source src="videoTest.mp4" type="video/mp4" />
        </video>
      </div>
      <motion.h4 ref={ref3} initial={{ opacity: 0, x: -350 }} animate={isInView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -350 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col gap-4 text-3xl text-justify w-[750px] mt-12 relative left-36 font-semibold max-md:text-xl max-md:left-0 max-md:max-w-[90%]">
        Na Anomalie Lab, transformamos ideias em resultados reais. Inovação, tecnologia e soluções feitas sob medida para impulsionar seu negócio. <span className="text-sm font-medium"> Anomalie Lab.</span>
      </motion.h4>
    </section>
  );
}

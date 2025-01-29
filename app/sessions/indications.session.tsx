"use client";
import Image from "next/image";
import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { trans } from "../libs/i18n.lib";

function Indication({
  slide,
}: {
  slide: {
    feedback: string;
    name: string;
    social: string;
    href: string;
    job: string;
  };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex flex-col gap-8 mt-32 w-full">
      <Image src="/aspas.png" alt="aspas" width={100} height={100} className="max-md:w-12" />
      <motion.p ref={ref} initial={{ opacity: 0, x: -150 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-4xl fontmax-w-[590px] text-justify max-lg:text-2xl max-md:text-xl h-64 max-md:h-40">
        {trans.t(slide.feedback)}
      </motion.p>
      <motion.div ref={ref} initial={{ opacity: 0, x: 150 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.7 }} className="flex w-full justify-between items-center mt-8">
        <div>
          <div className="flex gap-4 items-center max-md:flex-col-reverse max-md:gap-2">
            <p className="font-semibold">{slide.name}</p> <span className="max-md:hidden">|</span>
            <Link href={slide.href} target="_blank" className="underline text-xs h-fit max-md:-ml-4">
              {slide.social}
            </Link>
          </div>
          <p className="text-sm mt-2 max-md:text-xs max-md:mt-1">{slide.job}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function IndicationsSession() {
  const slides = [
    {
      feedback: "Qualified and committed developers, who contributed to improving Cidade Altas technology. I recommend it to anyone looking for innovation and professionalism!",
      name: "Igor 'Tony'",
      social: "@GODTONY",
      href: "https://www.instagram.com/godtony/",
      job: "CEO Cidade Alta RP",
    },
    {
      feedback: "Excellent team, delivered secure and scalable solutions with clean code. I recommend it to anyone looking for quality and efficiency.",
      name: "Gerson Aguiar",
      social: "@GERSONAGUIAR.BR",
      href: "https://www.instagram.com/gersonaguiar.br/",
      job: "Senior Developer at @loggi",
    },
    {
      feedback: "The partnership with Anomalie Lab was essential for Snapic. We develop scalable and high-performance systems, such as lives, OAuth authentication and integration with Facebook Meta.",
      name: "Anonymous",
      social: "@SNAPICBR",
      href: "https://www.instagram.com/snapicbr/",
      job: "CEO Snapic",
    },
    {
      feedback: "The page created by Anomalie Lab expanded my reach and brought new clients, generating real results and strengthening my online presence. I recommend it to anyone looking for impact and quality!",
      name: "DRA FRANCIELE CRUZ",
      social: "@drafrancielecruz",
      href: "https://www.instagram.com/drafrancielecruz/",
      job: "Advogada",
    },
  ];

  return (
    <section id="indications" className="relative mt-64 max-md:mt-80">
      <h2 className="font-bold relative uppercase text-4xl w-[90%] max-md:text-3xl text-end max-md:-mb-16">{trans.t("Indications")}</h2>
      <div className="absolute bottom-0 right-9 z-50 max-lg:bottom-6 group">
        <button className="swiper-button-next button-next-indication p-7 z-50 group-hover:rotate-45 duration-300 bg-white text-4xl border-2 rounded-full relative duration-400 ease-linear hover:bg-black hover:text-white max-md:p-2 max-md:text-2xl" aria-label="Next Slide">
          <LiaLongArrowAltRightSolid />
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="min-w-full">
            <Indication slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

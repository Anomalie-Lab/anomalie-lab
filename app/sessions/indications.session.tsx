"use client";
import Image from "next/image";
import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

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
  return (
    <div className="flex flex-col gap-8 mt-32 w-full">
      <Image src="/aspas.png" alt="aspas" width={100} height={100} className="max-md:w-12" />
      <p className="text-4xl font-medium max-w-[590px] text-justify max-lg:text-2xl max-md:text-xl">{slide.feedback}</p>
      <div className="flex w-full justify-between items-center mt-8">
        <div>
          <div className="flex gap-4 items-center max-md:flex-col-reverse max-md:gap-2">
            <p className="font-semibold">{slide.name}</p> <span className="max-md:hidden">|</span>
            <Link href={slide.href} target="_blank" className="underline text-xs h-fit max-md:-ml-4">
              {slide.social}
            </Link>
          </div>
          <p className="text-sm mt-2 max-md:text-xs text-end max-md:mt-1">{slide.job}</p>
        </div>
      </div>
    </div>
  );
}

export function IndicationsSession() {
  const slides = [
    {
      feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
    {
      feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
    {
      feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
    {
      feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
    {
      feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
  ];

  return (
    <section className="relative mt-64">
      <h2 className="font-bold relative text-4xl w-[90%] max-md:text-3xl text-end max-md:-mb-16">INDICATIONS</h2>
      <div className="absolute bottom-0 right-9 z-50 max-lg:bottom-6">
        <button className="swiper-button-next button-next-indication p-7 bg-white text-4xl border-2 rounded-full relative duration-400 ease-linear hover:bg-black hover:text-white max-md:p-2 max-md:text-2xl" aria-label="Next Slide">
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

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
      <Image src="/aspas.png" alt="aspas" width={100} height={100} />
      <p className="text-4xl font-medium max-w-[590px] text-justify">
        {slide.feedback}
      </p>
      <div className="flex w-full justify-between items-center mt-8">
        <div>
          <div className="flex gap-4 items-center">
            <p className="font-semibold">{slide.name}</p> |
            <Link
              href={slide.href}
              target="_blank"
              className="underline text-xs h-fit"
            >
              {slide.social}
            </Link>
          </div>
          <p className="text-sm mt-2">{slide.job}</p>
        </div>
      </div>
    </div>
  );
}

export function IndicationsSession() {
  const slides = [
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
    {
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      name: "RAUL GUSTAVO",
      social: "@RAULHGUSTAVO",
      href: "#",
      job: "CEO AMAZON",
    },
  ];

  return (
    <section className="relative h-[600px] mt-36">
      <h2 className="font-bold relative right-14 text-4xl w-full text-end">
        INDICATIONS
      </h2>
      <div className="absolute bottom-0 right-9 z-50">
        <button
          className="swiper-button-next button-next-indication p-7 bg-white text-4xl border-2 rounded-full relative duration-400 ease-linear hover:bg-black hover:text-white"
          aria-label="Next Slide"
        >
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

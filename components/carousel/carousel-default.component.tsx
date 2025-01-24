import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export const CarouselDefaultComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const items = [
    {
      id: 1,
      image: "/ConsultoriaTrabalhista.svg",
      title: "Consultoria trabalhista",
      description: "Orientação preventiva, elaboração de contratos e acompanhamento de reclamações trabalhistas.",
    },
    {
      id: 2,
      image: "/Consumidor.svg",
      title: "Assessoria em Direito do Consumidor",
      description: "Defesa em processos e atuação preventiva para evitar passivos com consumidores.",
    },
    {
      id: 3,
      image: "/Empresarial.svg",
      title: "Planejamento societário e empresarial",
      description: "Auxílio na estruturação e reorganização societária, além de consultoria em questões fiscais e tributárias.",
    },
    {
      id: 4,
      image: "/Estratégico.svg",
      title: "Contencioso estratégico",
      description: "Defesa em processos judiciais e administrativos, atuando de forma assertiva para proteger os interesses da sua empresa.",
    },
  ];

  const handleNext = useCallback(() => {
    if (!isAnimating && currentIndex < items.length - 2) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 2);
    }
  }, [currentIndex, isAnimating, items.length]);

  const handlePrevious = useCallback(() => {
    if (!isAnimating && currentIndex > 0) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 2);
    }
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div
      className="max-w-3xl relative outline-none max-md:w-86"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrevious();
      }}
      tabIndex={0}
    >
      <div className="overflow-hidden relative">
        <div className={`flex transition-transform duration-500 ease-in-out gap-16`} style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
          {items.map((item) => (
            <div key={item.id} className="w-80 flex-shrink-0">
              <div className="overflow-hidden h-full transform transition-transform duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={320}
                    height={192}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/320x192";
                    }}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl text-black font-black mb-2 text-justify">{item.title}</h3>
                  <p className="opacity-70 text-black font-base text-justify mt-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex space-x-4 justify-between items-center w-full">
        <div className="gap-3 flex">
          <button onClick={handlePrevious} disabled={currentIndex === 0} aria-label="Previous slides" className={`p-3 rounded-full ${currentIndex === 0 ? "bg-accentSecondary cursor-not-allowed" : "bg-black hover:bg-black"} text-white transition-all duration-300 focus:outline-none shadow-lg`}>
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={handleNext} disabled={currentIndex >= items.length - 2} aria-label="Next slides" className={`p-3 rounded-full ${currentIndex >= items.length - 2 ? "bg-accentSecondary cursor-not-allowed" : "bg-black hover:bg-black"} text-white transition-all duration-300 focus:outline-none shadow-lg`}>
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
          <div className="font-semibold text-lg cta hover-effect">
                <Link href="/support" className="border-none bg-none cursor-pointer">
                  <span className=" text-black hover-underline-animation relative pb-2 tracking-widest flex gap-3 items-center font-base text-base max-md:text-xs">
                    Veja Todos <IoIosArrowForward />
                  </span>
                </Link>
          </div>
      </div>
    </div>
  );
};

"use client";
import { useState, useEffect } from "react";
import { TbArrowUp } from "react-icons/tb";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const irParaOTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={irParaOTopo} className="z-50 flex fixed right-5 bottom-5 border-custom-accentColor shadow-md bg-accentSecondary rounded-full items-center justify-center w-7 h-7 text-2xl text-custom-accentColor duration-300">
          <span className="back-to-top text-white">
            <TbArrowUp />
          </span>
        </button>
      )}
    </>
  );
};

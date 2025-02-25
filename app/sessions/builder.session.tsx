"use client";
import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { trans } from "../libs/i18n.lib";
import { useState } from "react";

export function BuilderSession() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { offsetX, offsetY, target } = e.nativeEvent;

    if (target instanceof HTMLElement) {
      const width = target.offsetWidth;
      const height = target.offsetHeight;
      const x = (offsetX / width - 0.5) * 20;
      const y = (offsetY / height - 0.5) * -20;

      setStyle({
        transform: `rotateX(${y}deg) rotateY(${x}deg)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
    });
  };
  return (
    <section id="contacts" className="mt-24  h-[600px] flex items-end hover-card group max-md:mb-24 max-md:mt-0 max-md:h-[450px]" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ perspective: "1000px" }}>
      <div className="p-20 bg-black shadow-xl duration-500 text-white w-full rounded-xl flex justify-between items-end h-96 max-md:p-8 max-md:h-72 hover-content p gap-4" style={{ ...style }}>
        <h4 className="text-4xl max-w-96 font-medium max-md:text-2xl">{trans.t("take the first step towards your digital success.")}</h4>
        <Link href="https://wa.link/qr8nbk" target="_blank" className="p-5 text-center bg-white text-black rounded-md text-2xl  hover:scale-125">
          <LiaLongArrowAltRightSolid className="group-hover:rotate-45 duration-300" />
        </Link>
      </div>
    </section>
  );
}

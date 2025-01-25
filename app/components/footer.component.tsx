import Image from "next/image";
import React from "react";
import { Input } from "antd";
import Link from "next/link";
import {
  LiaLinkedin,
  LiaLongArrowAltRightSolid,
  LiaWhatsapp,
} from "react-icons/lia";

export function FooterComponent() {
  return (
    <footer className="flex w-full justify-between items-center h-[500px]">
      <div className="flex flex-col gap-7">
        <Image alt="logo-name" src="/logo-name.png" width={200} height={200} />
        <ul className="flex flex-col flex-wrap max-h-36 gap-6 font-semibold mt-7">
          <li>
            <Link href="#" className="menu__link">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#" className="menu__link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#" className="menu__link">
              Interviews
            </Link>
          </li>
          <li>
            <Link href="#" className="menu__link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="font-normal">Entrar em contato</button>
        <div className="mt-4">
          <Input
            className="rounded-none w-96 h-10 p-0"
            placeholder="Entrar com email"
            suffix={
              <button
                className="h-10 w-20 flex justify-center items-center bg-black border border-black text-4xl relative duration-400 ease-linear hover:bg-black hover:text-white"
                aria-label="Next Slide"
              >
                <LiaLongArrowAltRightSolid className="text-sm text-white" />
              </button>
            }
          />
          <div className="flex gap-1 mt-6">
            <LiaWhatsapp className="text-3xl" />
            <LiaLinkedin className="text-3xl " />
          </div>
        </div>
      </div>
    </footer>
  );
}

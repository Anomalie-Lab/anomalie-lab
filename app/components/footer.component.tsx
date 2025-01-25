import Image from "next/image";
import React from "react";

export function FooterComponent() {
  return (
    <footer className="flex w-full justify-between">
      <div className="flex flex-col gap-7">
        <Image alt="logo-name" src="/logo-name.png" width={200} height={200} />
        <ul className="flex flex-col flex-wrap max-h-32 gap-6 font-semibold mt-7">
          <li>Contact</li>
          <li>Projects</li>
          <li>Interviews</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <button>Receive Offer</button>
      </div>
    </footer>
  );
}

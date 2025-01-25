import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

export function BuilderSession() {
  return (
    <section className="mt-24 h-[600px] flex items-end">
      <div className="builder-session p-20 bg-black text-white w-full rounded-xl flex justify-between items-end h-96 peer-hover:bg-white">
        <h2 className="text-4xl max-w-72 font-medium">Build your ideal workspace today.</h2>
        <Link href="#" className="p-5 text-center bg-white text-black rounded-md text-2xl peer">
          <LiaLongArrowAltRightSolid />
        </Link>
      </div>
    </section>
  );
}

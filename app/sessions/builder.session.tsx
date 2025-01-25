import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export function BuilderSession() {
  return (
    <div className="p-20 bg-black text-white w-full rounded-xl flex justify-between items-end h-96">
      <h2 className="text-4xl max-w-72 font-medium">Build your ideal workspace today.</h2>
      <Link href="#" className="p-5 text-center bg-white text-black rounded-md text-2xl">
        <FaArrowRightLong />
      </Link>
    </div>
  );
}

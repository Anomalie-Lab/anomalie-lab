import { HeaderComponent } from "../components/headers";
import { LiaArrowRightSolid } from "react-icons/lia";
export function HomeSection() {
  return (
    <>
      <HeaderComponent />
      <div className="uppercase font-semibold">
        <h1 className="text-[230px]  h-56 flex relative items-center right-4  justify-between">
          Lab.
        </h1>
        <div className="bg-[url('/artHome.jpg')] h-96 bg-cover bg-center z-20 relative"></div>
        <div className="flex items-center justify-between">
          <h1 className="text-[230px] relative bottom-36 right-5  z-10">
            Lab.
          </h1>
          <button className="border rounded-full flex justify-around items-center relative bottom-12 font-semibold border-black w-60 h-14">
            <p className="relative left-8 uppercase font-semibold text-sm">
              Contact Us
            </p>
            <div className="bg-black rounded-full flex items-center justify-center h-16 w-16 relative left-7">
              <LiaArrowRightSolid className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

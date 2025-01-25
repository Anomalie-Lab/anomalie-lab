import Link from "next/link";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { trans } from "../libs/i18n.lib";

export function BuilderSession() {
  return (
    <section className="mt-24  h-[600px] flex items-end">
      <div className="p-20 bg-black text-white w-full rounded-xl flex justify-between items-end h-96">
        <h2 className="text-4xl max-w-96 font-medium">
          {trans.t("Dê o primeiro passo para seu sucesso digital")}
        </h2>
        <Link
          href="#"
          className="p-5 text-center bg-white text-black rounded-md text-2xl"
        >
          <LiaLongArrowAltRightSolid />
        </Link>
      </div>
    </section>
  );
}

"use client";
import { FiChevronRight } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { template } from "./template-mail.component";
import * as yup from "yup";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import { TbLoader3 } from "react-icons/tb";
interface InputsFormContactI {
  name: string;
  email: string;
}
const schema = yup.object().shape({
  name: yup.string().required("Esse campo e obrigatorio!"),
  email: yup.string().email("Insira um email valido").required("Esse campo e obrigatorio"),
});

export const FormDefaultComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: InputsFormContactI) => {
    try {
      setLoading(true);
      toaster.create({
        description: "File saved successfully",
        duration: 6000,
      });
      const res = await axios.post("/messenger", { email: data.email, html: template(data.name), subject: "Sub titulo" });

      if (res.status !== 200) {
        throw new Error();
      }

      toast.success("Email enviado!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        style: {
          backgroundColor: "#171717",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      });
    } catch (error) {
      toast.error("Ocorreu um erro interno!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        style: {
          backgroundColor: "#171717",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="h-auto p-0 w-1/2 max-md:w-full ">
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-white mb-2 font-base" htmlFor="nome">
              Nome
            </label>
            <input id="nome" className="w-full border border-white p-3 bg-transparent placeholder-white text-sm" type="text" placeholder="Digite seu nome" {...register("name")} />
            <span>{formState?.errors?.name?.message}</span>
          </div>
          <div className="w-1/2">
            <label className="block text-white mb-2 font-base" htmlFor="email">
              Email
            </label>
            <input id="email" className="w-full border border-white p-3 bg-transparent placeholder-white text-sm" type="email" placeholder="Digite seu email" {...register("email")} />
            <span>{formState?.errors?.email?.message}</span>
          </div>
        </div>

        {/* <div className="mb-4 mt-8">
          <label className="block text-white mb-2 font-base" htmlFor="mensagem">
            Mensagem
          </label>
          <textarea id="mensagem" className="w-full border border-white p-3 bg-transparent placeholder-white text-sm" rows={4} placeholder="Adicione sua mensagem aqui." {...register("message")} />
          <span>{formState?.errors?.message?.message}</span>
        </div> */}

        <div className="flex justify-between items-center mt-14">
          <Link target="_blank" href="https://wa.link/iahv2w" className="text-white rounded-full border-2 border-white bg-transparent h-16 w-16 flex items-center justify-center">
            <IoLogoWhatsapp size={30} />
          </Link>
          <button disabled={loading} onClick={handleSubmit(onSubmit)} type="button" className={`border border-white text-white p-2 ${!loading && "hover:bg-white hover:text-black"} transition w-56 h-12 flex items-center justify-around`}>
            <p className="text-sm font-base">Agende sua consulta</p>
            {loading ? <TbLoader3 className="animate-spin text-xl" /> : <FiChevronRight className="w-6 h-6" />}
          </button>
        </div>
      </form>
    </>
  );
};

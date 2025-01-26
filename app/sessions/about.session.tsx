"use client";
import { motion, useInView } from "framer-motion";
import { ConfigProvider, Tabs } from "antd";
import React, { useRef } from "react";
import { trans } from "../libs/i18n.lib";

const AnimatedTabContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto"
    >
      <h3 className="text-4xl w-1/2 text-center mx-auto font-bold pt-12">
        WHAT IS LOREM IPSUM WHAT.
      </h3>
      <div className=" mt-16 text-xl text-justify font-semibold">
        {children}
      </div>
    </motion.div>
  );
};

export function AboutSession() {
  const items = [
    {
      key: "1",
      label: (
        <h2 className="pb-2 text-base px-[60px]">{trans.t("Sobre Nós")}</h2>
      ),
      children: (
        <AnimatedTabContent>{trans.t("Sobre Nos copy")}</AnimatedTabContent>
      ),
    },
    {
      key: "2",
      label: (
        <h2 className="pb-2 text-base px-[60px]">
          {trans.t("Nosso Propósito")}
        </h2>
      ),
      children: (
        <AnimatedTabContent>
          {trans.t("Nosso Propósito copy")}
        </AnimatedTabContent>
      ),
    },
    {
      key: "3",
      label: (
        <h2 className="pb-2 text-base px-[60px]">
          {trans.t("Como Trabalhamos")}
        </h2>
      ),
      children: (
        <AnimatedTabContent>
          {trans.t("Como trabalhamos copy")}
        </AnimatedTabContent>
      ),
    },
    {
      key: "4",
      label: (
        <h2 className="pb-2 text-base px-[60px]">{trans.t("Resultados")}</h2>
      ),
      children: (
        <AnimatedTabContent>{trans.t("Resultados copy")}</AnimatedTabContent>
      ),
    },
  ];

  return (
    <section className="max-w-[1000px] mx-auto p-4  h-[700px]">
      <ConfigProvider
        theme={{
          token: {
            colorPrimaryBorder: "rgba(0,0,0,0)",
          },
          components: {
            Tabs: {
              inkBarColor: "rgba(0,0,0)",
              itemActiveColor: "rgba(0,0,0,0.88)",
              itemSelectedColor: "rgba(0,0,0,0.88)",
              itemHoverColor: "rgba(0,0,0,0.88)",
              itemColor: "rgba(0,0,0,0.88)",
              cardPadding: " 0px 20px",
              verticalItemMargin: "0 0 0 0",
              verticalItemPadding: "0 0 0 0",
            },
          },
        }}
      >
        <Tabs centered animated defaultActiveKey="1" items={items} />
      </ConfigProvider>
    </section>
  );
}

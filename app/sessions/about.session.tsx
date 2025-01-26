"use client";
import { motion, useInView } from "framer-motion";
import { ConfigProvider, Tabs } from "antd";
import React, { useRef } from "react";

const AnimatedTabContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="mx-auto">
      <h3 className="text-4xl w-1/2 text-center mx-auto font-bold pt-12 max-md:text-3xl max-md:pt-2 max-md:w-2/3">WHAT IS LOREM IPSUM WHAT.</h3>
      <div className=" mt-16 text-xl text-justify font-semibold max-md:text-lg">{children}</div>
    </motion.div>
  );
};

export function AboutSession() {
  const items = [
    {
      key: "1",
      label: <h2 className="pb-2 text-base px-[4.3vw] max-lg:px-[8vw] max-md:px-[6vw] max-sm:px-[4.5vw] max-sm:text-sm">Interviews</h2>,
      children: <AnimatedTabContent>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</AnimatedTabContent>,
    },
    {
      key: "2",
      label: <h2 className="pb-2 text-base px-[4.3vw] max-lg:px-[8vw] max-md:px-[6vw] max-sm:px-[4.5vw] max-sm:text-sm">Awards</h2>,
      children: <AnimatedTabContent>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</AnimatedTabContent>,
    },
    {
      key: "3",
      label: <h2 className="pb-2 text-base px-[4.3vw] max-lg:px-[8vw] max-md:px-[6vw] max-sm:px-[4.5vw] max-sm:text-sm">Social</h2>,
      children: <AnimatedTabContent>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</AnimatedTabContent>,
    },
    {
      key: "4",
      label: <h2 className="pb-2 text-base px-[4.3vw] max-lg:px-[8vw] max-md:px-[6vw] max-sm:px-[4.5vw] max-sm:text-sm">Exibitions</h2>,
      children: <AnimatedTabContent>Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</AnimatedTabContent>,
    },
  ];

  return (
    <section className="max-w-[900px] mx-auto h-[700px]">
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

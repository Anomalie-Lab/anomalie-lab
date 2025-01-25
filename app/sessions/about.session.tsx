"use client";
import { motion, useInView } from "framer-motion";
import { ConfigProvider, Tabs } from "antd";
import React, { useRef } from "react";

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
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mx-auto mt-12"
    >
      <h3 className="text-4xl w-1/2 text-center mx-auto font-bold">
        WHAT IS LOREM IPSUM WHAT.
      </h3>
      <div className="mx-20 mt-12 font-medium text-xl text-justify">
        {children}
      </div>
    </motion.div>
  );
};

export function AboutSession() {
  const items = [
    {
      key: "1",
      label: <h2 className="pb-2  text-lg">Interviews</h2>,
      children: (
        <AnimatedTabContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AnimatedTabContent>
      ),
    },
    {
      key: "2",
      label: <h2 className="pb-2  text-lg">Awards</h2>,
      children: (
        <AnimatedTabContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AnimatedTabContent>
      ),
    },
    {
      key: "3",
      label: <h2 className="pb-2 text-lg">Social</h2>,
      children: (
        <AnimatedTabContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AnimatedTabContent>
      ),
    },
    {
      key: "4",
      label: <h2 className="pb-2 text-lg">Exibitions</h2>,
      children: (
        <AnimatedTabContent>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AnimatedTabContent>
      ),
    },
  ];

  return (
    <div className="max-w-[750px] mx-auto p-4 flex">
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
            },
          },
        }}
      >
        <Tabs
          centered
          animated
          defaultActiveKey="1"
          items={items}
          className=""
        />
      </ConfigProvider>
    </div>
  );
}

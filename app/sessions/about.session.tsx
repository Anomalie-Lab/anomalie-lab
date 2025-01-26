"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

const AnimatedTabContent: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 2 }}
      className="mx-auto"
    >
      <h3 className="text-4xl w-1/2 text-center mx-auto font-bold pt-12 max-md:text-3xl max-md:pt-2 max-md:w-2/3 mt-12">
        {title}
      </h3>
      <div className=" mt-16 text-xl text-justify font-semibold max-md:text-lg">
        {children}
      </div>
    </motion.div>
  );
};

export function AboutSession() {
  const items = [
    {
      key: "1",
      children: (
        <AnimatedTabContent title="WHAT IS LOREM IPSUM WHAT">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AnimatedTabContent>
      ),
    },
    {
      key: "2",
      children: (
        <AnimatedTabContent title="WHAT IS LOREM IPSUM WHAT">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AnimatedTabContent>
      ),
    },
    {
      key: "3",
      children: (
        <AnimatedTabContent title="WHAT IS LOREM IPSUM WHAT">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AnimatedTabContent>
      ),
    },
    {
      key: "4",
      children: (
        <AnimatedTabContent title="WHAT IS LOREM IPSUM WHAT">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AnimatedTabContent>
      ),
    },
  ];

  return (
    <section className="max-w-[900px] w-full mx-auto h-[700px]">
      <Tabs isFitted variant="unstyled">
        <TabList>
          <Tab _selected={{ fontWeight: "medium" }}>Interviews</Tab>
          <Tab _selected={{ fontWeight: "medium" }}>Awards</Tab>
          <Tab _selected={{ fontWeight: "medium" }}>Social</Tab>
          <Tab _selected={{ fontWeight: "medium" }}>Exibitions</Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="black" borderRadius="1px" />
        <TabPanels>
          {items.map((item) => (
            <TabPanel key={item.key}>{item.children}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </section>
  );
}

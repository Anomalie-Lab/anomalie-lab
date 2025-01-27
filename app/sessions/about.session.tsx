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
      <motion.h4
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.4 }}
        className="text-4xl w-1/2 text-center mx-auto font-bold pt-12 max-md:text-3xl max-md:pt-2 max-md:w-2/3 mt-12"
      >
        {title}
      </motion.h4>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className=" mt-16 text-xl text-justify font-semibold max-md:text-lg"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export function AboutSession() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
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
          <Tab _selected={{ fontWeight: "medium" }}>
            <motion.h3
              ref={ref1}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              Interviews
            </motion.h3>
          </Tab>
          <Tab _selected={{ fontWeight: "medium" }}>
            <motion.h3
              ref={ref1}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Awards
            </motion.h3>
          </Tab>
          <Tab _selected={{ fontWeight: "medium" }}>
            <motion.h3
              ref={ref1}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Social
            </motion.h3>
          </Tab>
          <Tab _selected={{ fontWeight: "medium" }}>
            <motion.h3
              ref={ref1}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              Exibitions
            </motion.h3>
          </Tab>
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

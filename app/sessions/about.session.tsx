"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";
import { trans } from "../libs/i18n.lib";

const AnimatedTabContent: React.FC<{
  children: string;
  title: string;
}> = ({ children, title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 2 }} className="mx-auto">
      <motion.h4 ref={ref} initial={{ opacity: 0, y: -100 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }} transition={{ duration: 0.4 }} className="uppercase text-4xl w-1/2 text-center mx-auto font-bold pt-12 max-md:text-3xl max-md:pt-2 max-md:w-2/3 mt-12">
        {trans.t(title)}
      </motion.h4>
      <motion.div ref={ref} initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} transition={{ duration: 0.4, delay: 0.3 }} className=" mt-16 text-xl text-justify font-semibold max-md:text-lg">
        {trans.t(children)}
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
        <AnimatedTabContent title="Innovating Beyond Boundaries">
          At Anomalie Lab, our clients success is our greatest achievement. We work to deliver results that translate into process optimization, performance improvements, and increased operational efficiency. Our solutions are designed to create real impact, helping businesses achieve their goals more quickly and intelligently. Through advanced technology and personalized strategies, we propel businesses toward excellence.
        </AnimatedTabContent>
      ),
    },
    {
      key: "2",
      children: (
        <AnimatedTabContent title="Leveraging the Power of Innovation">
          We believe great projects require cutting-edge tools. Thats why at Anomalie Lab, we use the best technologies in the market to ensure robust, scalable, and secure solutions. We work with modern stacks such as React, Node.js, NestJS, Next.js, Typescript and other leading technologies, always staying aligned with industry trends. This approach enables us to create innovative systems ready to face the challenges of an ever-evolving world.
        </AnimatedTabContent>
      ),
    },
    {
      key: "3",
      children: (
        <AnimatedTabContent title="Clarity, Collaboration, and Outcomes">
          Our commitment goes beyond delivering a product. We offer dedicated post-sale support, ensuring our clients have continuous assistance and solutions that grow with their businesses. We prioritize transparency at every stage of development and stand out for our ability to understand each clients specific needs, turning goals into tangible results. Choosing Anomalie Lab means opting for quality, partnership, and innovation.
        </AnimatedTabContent>
      ),
    },
    {
      key: "4",
      children: (
        <AnimatedTabContent title="Turning Goals into Real Success">
          At Anomalie Lab, our clients success is our greatest achievement. We work to deliver results that translate into process optimization, performance improvements, and increased operational efficiency. Our solutions are designed to create real impact, helping businesses achieve their goals more quickly and intelligently. Through advanced technology and personalized strategies, we propel businesses toward excellence.
        </AnimatedTabContent>
      ),
    },
  ];

  return (
    <section id="about" className="max-w-[900px] w-full mx-auto h-[700px]">
      <Tabs isFitted variant="unstyled">
        <TabList>
          <Tab _selected={{ fontWeight: "medium" }}>
            <motion.h3 ref={ref1} initial={{ opacity: 0, y: 10 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5 }}>
              {trans.t("About Us")}
            </motion.h3>
          </Tab>
          <Tab _selected={{ fontWeight: "medium" }}>
            <motion.h3 ref={ref1} initial={{ opacity: 0, y: 10 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 0.25 }}>
              {trans.t("Technologies")}
            </motion.h3>
          </Tab>
          <Tab _selected={{ fontWeight: "medium" }}>
            <motion.h3 ref={ref1} initial={{ opacity: 0, y: 10 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 0.4 }}>
              {trans.t("Differentials")}
            </motion.h3>
          </Tab>
          <Tab _selected={{ fontWeight: "medium" }}>
            <motion.h3 ref={ref1} initial={{ opacity: 0, y: 10 }} animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 0.55 }}>
              {trans.t("Results")}
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

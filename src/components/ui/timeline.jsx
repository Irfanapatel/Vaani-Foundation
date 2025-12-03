"use client";;
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:bg-neutral-950 font-sans md:px-10 py-12 md:py-16"
      ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-4 md:pt-16 md:gap-6 group">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-12 w-12 absolute left-2 md:left-2 rounded-full bg-gradient-to-br from-blue-50 to-white dark:bg-black flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-neutral-900 transition-all duration-300 group-hover:scale-110 group-hover:ring-blue-100">
                <div
                  className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:bg-blue-600 border-2 border-white dark:border-neutral-800 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-200" />
              </div>
              <h3
                className="hidden md:block text-lg md:pl-24 md:text-3xl font-bold text-gray-700 dark:text-neutral-300 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-xl mb-4 text-left font-bold text-gray-700 dark:text-neutral-300">
                {item.title}
              </h3>
              <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-800 p-6 md:p-8 hover:border-blue-200 dark:hover:border-blue-800">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 bottom-0 w-[3px]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 rounded-full shadow-lg shadow-blue-200" />
        </div>
      </div>
    </div>
  );
};

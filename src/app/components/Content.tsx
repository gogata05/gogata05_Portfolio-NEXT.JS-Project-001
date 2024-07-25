"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function Content({}: Props) {
  const [showLess, setShowLess] = useState(true);
  return (
    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h3 className=" phone:top-12 uppercase tracking-[20px] phone:tracking-[10px] text-gray-500 text-2xl font-Kanit">{"- About -"}</h3>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>

          <div className="max-w-xl mb-6 ">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight opacity-60 text-white sm:text-4xl sm:leading-none">
              Here a little
              <br className="hidden md:block" />
              background <span className="inline-block text-deep-purple-accent-400">about me</span>
            </h2>
            {showLess ? (
              <motion.p key={"less"} className="text-base text-gray-500 md:text-lg phone:mr-4" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 400 }}>
                {`I was a gaming YouTuber for 6 years, but since October 2022, when I started studying full-time at `}
                <a href="https://softuni.bg/" target="_bank" className="font-bold">
                  SoftUni
                </a>
                {`, I haven't stopped. I don't have days off. I write for 10-15 hours every day until my eyes hurt. I have a Triple Monitor Desktop with which I can do the following 6 things simultaneously, which helps me see similarities/differences and understand new things extremely quickly.`}
                <h2 className="font-semibold">{" Separately, I have 2 laptops by the bed to plan my next actions for the end of the day when I'm tired so I don't waste any time at all. "}</h2>
              </motion.p>
            ) : (
              <motion.p key={"more"} className="text-base text-gray-600 md:text-lg phone:mr-6" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 400 }}>
                {`I was a gaming YouTuber for 6 years, but since October 2022, when I started studying full-time at`}
                <h2 className="font-semibold">{" SoftUni "}</h2>
              </motion.p>
            )}
          </div>
          <div>
            {showLess ? (
              <h1 className="flex justify-center  text-gray-500 items-center cursor-pointer font-semibold transition-colors duration-200  -mt-4 opacity-60" onClick={() => setShowLess(!showLess)}>
                <p className="text-[#2ed3db]">+</p> show more
              </h1>
            ) : (
              <h1 className="flex justify-center  text-gray-500 items-center cursor-pointer font-semibold transition-colors duration-200  -mt-4 opacity-60" onClick={() => setShowLess(!showLess)}>
                <p className="text-[#2ed3db]">-</p>show less
              </h1>
            )}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <motion.img className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56" src="view.webp" alt="" />
            <motion.img className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="background.webp" alt="" />
          </div>
          <div className="px-3">
            <motion.img className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="pc.webp" alt="" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Content;

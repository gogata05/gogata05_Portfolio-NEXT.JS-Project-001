// src\app\components\About2.tsx
"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {};

function About2({}: Props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="grid grid-cols-1 w-full px-2 justify-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className=" mt-8 justify-center grid">
        <h1 className="uppercase tracking-[10px] opacity-60 font-Kanit ">- About -</h1>
      </motion.div>
      <motion.div
        initial={{
          x: -200,
          opacity: 0
        }} /*1:2.4 */
        transition={{
          duration: 0.9
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }} /* do animation only if you are starting to view the image*/
        viewport={{ once: true }}
        className="grid justify-center mt-8">
        <motion.img src="background.jpg" alt="backgroundPicture" className="flex-shrink-0 w-56 h-56 rounded-full object-cover" />
      </motion.div>
      <motion.div className="mt-12">
        <h4 className="text-xl text-center font-semibond">
          {" "}
          Here is a <span className="underline decoration-[#d106ca91]/40"> little</span> background
        </h4>{" "}
        <div className="text-left justify-center px-5 mt-8 flex">
          {showMore ? (
            <>
              <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 400 }} className=" max-w-[500px] text-left mb-4 h-fit text-sm font-Inter">
                I was a gaming YouTuber for 6 years, but since October 2022, when I started studying full-time at SoftUni, I havent stopped. I dont have days off. I write for 10-15 hours every day until my eyes hurt. I have a Triple Monitor Desktop with which I can do the following 6 things simultaneously, which helps me see similarities/differences and understand new things extremely quickly. Separately, I have 2 laptops by the bed to plan my next actions for the end of the day when Im tired so I dont waste any time at all. I dont have a personal life and I can work non-stop without any problems. People go out, take days off, I attack.{" "}
                <p className="flex justify-end " onClick={() => setShowMore(!showMore)}>
                  <p className="text-[#2ed3db] tracking-[10px] font-bold ">{"-"}</p>show less
                </p>
              </motion.h1>
            </>
          ) : (
            <>
              <h1 className="max-w-[300px] mb-4 font-semibold">
                I was a gaming YouTuber for 6 years, but since October 2022, when I started studying full-time at SoftUni, I havent stopped.{" "}
                <p className="flex justify-center mt-4" onClick={() => setShowMore(!showMore)}>
                  <p className="text-[#2ed3db] tracking-[10px] font-bold ">{"+"}</p>show more..
                </p>
              </h1>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default About2;

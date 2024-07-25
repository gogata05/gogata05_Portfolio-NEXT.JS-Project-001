"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 500;
  const [showMore, setShowMore] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 phone:top-12 uppercase tracking-[20px] phone:tracking-[10px] text-gray-500 text-2xl font-Kanit">- About -</h3>

      <motion.img
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
        viewport={{ once: true }} /* do animation only once,when you see it once stop doing it*/
        src="background.jpg"
        className="-mb-20  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] phone:w-40 phone:h-40 "
      />
      {/* <img src='/profile.jpg' className='rounded-full w-20 flex flex-shrink-0 left-[3vh] top-[27vh] absolute '/> */}

      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-3xl text-center font-semibond">
          {" "}
          Here is a <span className="underline decoration-[#d106ca91]/40"> little</span> background
        </h4>{" "}
        <p className=" max-w-[500px] text-left">I was a gaming YouTuber for 6 years, but since October 2022, when I started studying full-time at SoftUni, I haven't stopped. I don't have days off. I write for 10-15 hours every day until my eyes hurt. I have a Triple Monitor Desktop with which I can do the following 6 things simultaneously, which helps me see similarities/differences and understand new things extremely quickly. Separately, I have 2 laptops by the bed to plan my next actions for the end of the day when I'm tired so I don't waste any time at all. I don't have a personal life and I can work non-stop without any problems. People go out, take days off, I attack.</p>
      </div>
    </motion.div>
  );
}

export default About;

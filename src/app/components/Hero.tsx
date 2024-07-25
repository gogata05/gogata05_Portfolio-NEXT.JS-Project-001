"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};
interface Typewriter {
  words: string[];
  loop: boolean;
  delaySpeed: number;
}
const typewriterOptions: Typewriter = {
  words: ["Hi, my name is Georgi Markov", "I don't stop", "i have no days off", "I get the job done"],
  loop: true,
  delaySpeed: 1500
};

function Hero({}: Props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isTypeWriter = windowWidth < 300;

  const [text, count] = useTypewriter(typewriterOptions);

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="profile.jpg" alt="" />
      <div className="z-20">
        <h2 className="text-sm uppercase text-purple-50 pb-2 tracking-[15px] phone:tracking-[10px] font-Kanit">Georgi Markov</h2>
        <h3 className="text-xs uppercase text-purple-50 pb-2 tracking-[15px] phone:tracking-[10px] font-Hanken">Full-Stack Developer</h3>
        <h3 className="text-xs uppercase text-purple-50 pb-2 tracking-[5px] px-1">
          {" "}
          With .NET,React and Angular since <text className="text-[#2ed3db] font-Kanit text-sm uppercase  tracking-[2px] font-semibold ">October 2022</text>
        </h3>
        <h5 className="text-xs uppercase text-purple-50 pb-2 tracking-[7px] phone:tracking-[2px]">
          <text className="text-[#2ed3db] text-sm font-semibold uppercase pb-2 font-Kanit tracking-[7px] phone:tracking-[5px] "></text>
        </h5>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          {isTypeWriter ? (
            ""
          ) : (
            <>
              <span className="mr-3 phone:text-[16px] text-white opacity-80 ">
                {text}
                <text className="text-[#2ed3db] ">/</text>
              </span>
              <Cursor cursorColor="#d106ca" />
            </>
          )}
        </h1>
        <div className="pt-5 font-Kanit ">
          <Link href="#about">
            <button
              className="heroButton px-6 py-2 border border-[#242424] rounded-full mr-2 mt-2 uppercase text-xs
        tracking-widest text-gray-200/60 transition-all
         hover:border-[#F74AB0]/40 hover:text-[#2ed3db]/60 ">
              About
            </button>
          </Link>
          <Link href="#education">
            <button
              className="heroButton  px-6 py-2 border border-[#242424] rounded-full mr-2 mt-2  uppercase text-xs
        tracking-widest text-gray-200/60 transition-all
         hover:border-[#F74AB0]/40 hover:text-[#2ed3db]/60">
              Education
            </button>
          </Link>
          {/* <Link href="#skills">
            <button className='heroButton'>Skills</button>
        </Link> */}
          <Link href="#projects">
            <button
              className="heroButton px-6 py-2 border border-[#242424] rounded-full mr-2 mt-2 uppercase text-xs
        tracking-widest text-gray-200/60 transition-all
         hover:border-[#F74AB0]/40 hover:text-[#2ed3db]/60">
              Projects
            </button>
          </Link>
          {/* <Link href="#contacts">
          <button className='heroButton px-6 py-2 border border-[#242424] rounded-full mt-2  uppercase text-xs
        tracking-widest text-gray-500 transition-all
         hover:border-[#F74AB0]/40 hover:text-[#2ed3db]/60'>Contacts</button>
        </Link> */}
          {/* <Link href="/reviews">
          <button className='heroButton'>Reviews</button>
        </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;

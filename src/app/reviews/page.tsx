"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function page({}: Props) {
  return (
    <div className=" mt-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h3 className=" items-center flex phone:top-12 uppercase tracking-[20px] phone:tracking-[5px] text-gray-500 text-2xl font-Kanit justify-center">- It will be added soon -</h3>
      <a href="/">
        {" "}
        <h3 className="  mt-12 items-center flex phone:top-12 uppercase tracking-[20px] phone:tracking-[5px] text-white text-2xl font-Kanit justify-center">{"Go Back <"}</h3>
      </a>
    </div>
  );
}

export default page;

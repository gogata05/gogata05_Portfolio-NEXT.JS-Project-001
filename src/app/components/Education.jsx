"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Education({ props }) {
  const [activeId, setActiveId] = useState(0);
  const [imageRotation, setImageRotation] = useState(0);
  const handleClick = itemId => {
    setActiveId(activeId === itemId ? "0" : itemId);
    setImageRotation(imageRotation === 0 ? 180 : 0);
  };
  return (
    <>
      <div className=" mt-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h3 className=" items-center flex phone:top-12 uppercase tracking-[20px] phone:tracking-[5px] text-gray-500 text-2xl font-Kanit justify-center">- Education -</h3>
      </div>
      <div className=" flex justify-center  w-full  ">
        <div className="flex flex-col justify-center  md:max-w-[1296px] phone:min-w-full   w-full px-20 phone:px-2   ">
          {props.map((item, index) => (
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ delay: `${item.delay}` }} key={item.id} className="w-full -mt-14  mb-[32px] font-inter    ">
              <div className=" border-t-[1px] mt-[72px] border-[#636363]    "></div>

              <div className="mt-[46px]  text-[16px] font-normal leading-[26px] text-grayText phone:px-2   ">
                <span className={` ${activeId == item.id ? "text-cyan-200" : " text-white opacity-40"}`}>{"0" + item.id}</span>
              </div>
              <div onClick={() => handleClick(item.id)} className="flex  -mt-8 justify-between items-center font-medium text-grayText cursor-pointer   ">
                <div className="flex flex-col w-full">
                  <span className="leading-[42px]  phone:text-[16px] phone:leading-[20px] font-medium text-[32px] text-darkText ml-[48px] phone:mr-4  text-gray-200  ">{item.title}</span>
                  <span className="pl-14 phone:text-[12px] text-cyan-300 opacity-60 phone:mr-4">
                    {item.location}
                    <div className="flex flex-row pt-1">
                      {item.icons?.map((tag, index) => (
                        <img key={index + tag} src={tag} className="max-w-6 max-h-6 mr-2  " />
                      ))}
                    </div>
                  </span>
                </div>

                <motion.img initial={{ rotate: 0 }} animate={{ rotate: activeId == item.id ? imageRotation : 0 }} src="Arrow.svg" className=" flex justify-end items-end rotate-12 max-w-full phone:w-12 " />
              </div>
              {activeId == item.id && (
                <div className=" pt-[25px] ml-[51px] mr-[200px] phone:mr-1">
                  <span className="text-grayText leading-[26px] text-[16px] text-white/70">{item.text}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;

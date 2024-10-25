// src\app\components\Contact.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
{
  /*yarn add @heroicons/react */
}
import { useForm, SubmitHandler } from "react-hook-form";
import { SocialIcon } from "react-social-icons";
{
  /* */
}

type Props = {};
{
  /* */
}
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  {
    /* */
  }
  const { register, handleSubmit } = useForm<Inputs>();
  {
    /* */
  }
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:gogata1905@gmail.com?subject=${formData.subject}&body=Hi,my name is ${formData.name}.${formData.message}(
            ${formData.email}
        )`;
  };
  return (
    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className=" mt-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <h3 className=" items-center flex phone:top-12 uppercase tracking-[20px] phone:tracking-[5px] text-gray-500 text-2xl font-Kanit justify-center">- CONTACTS -</h3>
      <div className=" justify-center mt-20 flex flex-col">
        <div className="space-y-10 mb-10">
          <div className="flex flex-row items-center justify-center font-Exo">
            <SocialIcon url="https://github.com/gogata05" fgColor="gray" bgColor="transparent" />
            <h1 className="font-semibold text-gray-500 tracking-[4px]">/gogata05</h1>
          </div>
          <div className="flex flex-row items-center justify-center font-Exo    ">
            <SocialIcon url="https://linkedin.com/in/georgi-markov-57b5b224b/" fgColor="gray" bgColor="transparent" />
            <h1 className="font-semibold text-gray-500 tracking-[4px]">georgi-markov-57b5b224b/</h1>
          </div>
          <div className="flex flex-row items-center justify-center font-Exo">
            <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
            <h1 className="font-semibold text-gray-500 tracking-[4px]">gogata1905@gmail.com</h1>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col">
          <div className="    max-w-[600px] flex self-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-fit mx-auto">
              <input {...register("name")} placeholder="Name" className="contactInput text-black rounded-xl px-2 py-1" type="text" />
              <input {...register("email")} placeholder="Email" className="contactInput text-black rounded-xl px-2 py-1" type="email" />

              <input {...register("subject")} placeholder="Subject" className="contactInput text-black rounded-xl px-2 py-1" type="text" />

              <textarea {...register("message")} placeholder="Message" className="contactInput text-black rounded-xl px-2 py-1 overflow-y-hidden" />
              <button
                className="heroButton px-6 py-2 border border-[#242424] rounded-full mr-2 mt-2 uppercase text-xs
        tracking-widest text-gray-200/60 transition-all
         hover:border-[#F74AB0]/40 hover:text-[#2ed3db]/60 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;

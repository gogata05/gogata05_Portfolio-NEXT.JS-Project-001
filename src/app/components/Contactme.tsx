"use client";
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
{
  /*yarn add @heroicons/react */
}
import { useForm, SubmitHandler } from "react-hook-form";
{
  /* */
}

{
  /* */
}
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function Contactme({}: Props) {
  {
    /* */
  }
  const { register, handleSubmit } = useForm<Inputs>();
  {
    /* */
  }
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:gogata1905@gmail.com?subject=${formData.subject}&body=Hi,my name is${formData.name}.${formData.message}(
            ${formData.email}
        )`;
  };

  return (
    <div className=" phone:mx-4 h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="flex absolute my-0 top-10 uppercase tracking-[20px] text-gray-500 text-2xl font-Kanit">- Contact -</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center ">
          If i have just what you need. <span className="decoration-[#F74AB0]/50 underline animate-pulse">Lets talk.</span>
        </h4>
      </div>
      <div className="space-y-10">
        <div className="flex items-center space-x-5 justify-center">
          {/* <PhoneIcon className='text-[#F74AB0] h-7 w-7 animate-pulse ' />
                    <p className='text-2xl'>+359 898 31 73 74</p> */}
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F74AB0] h-7 w-7 animate-pulse " />
          <p className="text-2xl">gogata1905@gmail.com</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#F74AB0] h-7 w-7 animate-pulse " />
          <p className="text-2xl">Bulgaria</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} placeholder="Name" className="contactInput text-black rounded-xl px-2" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput text-black rounded-xl px-2" type="email" />
          </div>

          <input {...register("subject")} placeholder="Subject" className="contactInput text-black rounded-xl px-2" type="text" />

          <textarea {...register("message")} placeholder="Message" className="contactInput text-black rounded-xl px-2" />
          <button type="submit" className="bg-[#F74AB0]/90 py-2 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactme;

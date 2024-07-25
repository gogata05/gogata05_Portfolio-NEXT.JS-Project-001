"use client";
import React, { useState } from "react";
import { projectData, skills } from "../../../util/data";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  const [hover, setHover] = useState({ status: false, id: -1 });
  const colorVariants = {
    cyan: "bg-cyan-500",
    yellow: "bg-yellow-500"
  };
  return (
    <>
      <div className=" mt-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h3 className=" items-center flex phone:top-12 uppercase tracking-[20px] phone:tracking-[5px] text-gray-500 text-2xl font-Kanit justify-center">- SKILLS -</h3>
      </div>
      <div className=" flex justify-center phone:grid phone:grid-rows-1  phone:gap-y-4   w-full">
        {projectData.map(project => (
          <motion.article
            key={project.id + project.color}
            whileHover={{ scale: 1.1 }}
            onClick={e => {
              e.preventDefault();
              window.open(project.links.github, "_blank");
            }}
            className={`mx-auto phone:mx-4  phone:max-w-2/3 max-w-sm shadow-xl bg-cover bg-center min-h-150 transform  cursor-pointer group ${hover.status && hover.id != project.id && hover.id != -1 ? "blur-sm " : "hover:rounded-xl phone:rounded-xl "} font-Exo`}
            style={{ backgroundImage: `url(${project.image})` }}
            onMouseEnter={() => setHover({ status: true, id: project.id })}
            onMouseLeave={() => setHover({ status: true, id: -1 })}>
            <div key={project.id + project.color} className="bg-black bg-opacity-20 min-h-150   px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75  transform duration-300">
              <h1 className=" text-gray-300 font-semibold text-3xl mb-5 transform translate-y-20 phone:translate-y-0 group-hover:translate-y-0 duration-300">
                {project.title}
                <div className="flex flex-row">
                  {project.tags.map(tag => (
                    <img key={tag} src={tag} className="w-8" />
                  ))}
                </div>
              </h1>
              <div key={project.id + project.color} className={` hover:w-24 w-16 h-2 ${colorVariants[project.color]} rounded-full mb-5 transform translate-y-20 phone:translate-y-0 group-hover:translate-y-0 duration-300 `}></div>
              <p className="opacity-0  text-white text-xl group-hover:opacity-80 phone:opacity-80 transform duration-500">{project.subTitle}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}

export default Skills;

// {hover.status == true && hover.id !== -1 && hover.id === project.id ? (
//   <div key={project.id + project.links.github} className='flex  justify-start mb-2'>
//     <a href={project.links.github} target='_blank' ><img src='icons/github.svg' className='w-8 mx-2 mt-2'/></a>
//     <a href={project.links.vercel} target='_blank' ><img src='icons/vercel.svg' className='w-8  mx-2 mt-2 bg-white rounded-full'/></a>
//   </div>
// ) : "" }

{
  /* <div key={project.id + project.links.github} className={`flex justify-start mb-2 ${
  hover.status && hover.id !== -1 && hover.id === project.id ? 'opacity-100 ' : 'opacity-0'
}`}>
                      <a href={project.links.github} target='_blank' ><img src='icons/github.svg' className='w-8 mx-2 mt-2'/></a>
                      <a href={project.links.vercel} target='_blank' ><img src='icons/vercel.svg' className='w-8  mx-2 mt-2 bg-white rounded-full'/></a>
                    </div> */
}

{
  /* <div className=' grid grid-flow-col  max-w-[1000px] max-h-[200px]    w-full   p-4 '>
      {skills.map((skill)=> (
        <div className='grid justify-center items-center '>
          <img src={skill.icon} className='w-[35px] h-[35px] justify-self-center ' />
          <h1 className='font-Kanit text-md justify-self-center '>{skill.title}</h1>
        </div>

      ))}
    
   
          </div> */
}

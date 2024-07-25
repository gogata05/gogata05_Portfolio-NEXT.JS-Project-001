"use client";
import React, { useState } from "react";
import { projectData, skills } from "../../../util/data";
import { motion } from "framer-motion";

function Projects() {
  const [hover, setHover] = useState({ status: false, id: -1 });
  const colorVariants = {
    cyan: "bg-cyan-500",
    yellow: "bg-yellow-500",
    pink: "bg-[#FFB9B9]",
    green: "bg-green-500",
    red: "bg-red-500",
    slate: "bg-slate-500"
  };
  return (
    <>
      <div className=" mt-20 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h3 className=" items-center flex phone:top-12 uppercase tracking-[20px] phone:tracking-[5px] text-gray-500 text-2xl font-Kanit justify-center">- PROJECTS -</h3>
      </div>
      <div className=" grid gap-20  justify-center phone:grid phone:grid-rows-1 phone:gap-y-7 sm:grid-cols-2 sm:gap-5 xl:gap-y-10 2xl:gap-14 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4     w-full">
        {projectData.map(project => (
          <motion.article
            key={project.id + project.color}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ delay: 0.5 }}
            onClick={e => {
              e.preventDefault();
              window.open(project.links.github, "_blank");
            }}
            className={`mx-auto phone:mx-4     phone:max-w-2/3 max-w-sm h-full shadow-xl bg-cover bg-center min-h-150 transform  cursor-pointer group ${hover.status && hover.id != project.id && hover.id != -1 ? "blur-sm " : "hover:rounded-xl phone:rounded-xl "} font-Exo`}
            style={{ backgroundImage: `url(${project.image})` }}
            onMouseEnter={() => setHover({ status: true, id: project.id })}
            onMouseLeave={() => setHover({ status: true, id: -1 })}>
            <div key={project.id + project.color} className="bg-black h-full  bg-opacity-20 min-h-[150px] max-w-[340px]   px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 phone:bg-opacity-75  transform duration-300">
              <h1 className=" text-gray-300 font-semibold text-3xl  transform translate-y-20 phone:translate-y-0 group-hover:translate-y-0 duration-300">
                {project.title}
                <div className="flex flex-row">
                  {project.tags.map(tag => (
                    <img key={tag} src={tag} className="w-8 " />
                  ))}
                </div>
              </h1>
              <div key={project.id + project.color} className={` hover:w-56 w-16 h-2 mt-2 ${colorVariants[project.color]} rounded-full  transform translate-y-20 phone:translate-y-0 group-hover:translate-y-0 duration-300 flex `}></div>
              <p className="opacity-0 flex flex-wrap  text-white text-xl group-hover:opacity-80 phone:opacity-80 transform duration-500">{project.subTitle}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}

export default Projects;

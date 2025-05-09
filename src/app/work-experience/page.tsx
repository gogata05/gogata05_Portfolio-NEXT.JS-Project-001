"use client";

import React from "react";
import { workExperienceData } from "../../../util/data";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";

const WorkExperiencePage = () => {
  console.log("Rendering WorkExperiencePage, pulling data:", workExperienceData);
  if (!workExperienceData) {
    console.error("workExperienceData is undefined or null in WorkExperiencePage.");
  }
  return (
    <div className="bg-black overflow-x-hidden min-h-screen">
      <Header />
      <WorkExperience props={workExperienceData} />
    </div>
  );
};

export default WorkExperiencePage; 
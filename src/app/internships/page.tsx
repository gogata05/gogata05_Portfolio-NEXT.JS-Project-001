// src/app/internships/page.tsx
"use client";

import React from "react";
import { internshipsData } from "../../../util/data";
import Internships from "../components/Internships";
import Header from "../components/Header";

const InternshipsPage = () => {
  return (
    <div className="bg-black overflow-x-hidden min-h-screen">
      <Header />
      <Internships props={internshipsData} />
    </div>
  );
};

export default InternshipsPage;

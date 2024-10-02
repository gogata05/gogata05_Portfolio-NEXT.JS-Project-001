// src/app/certificates/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const Certificates = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
      {/* Main Content */}
      <main className="container mx-auto py-10">
        <h1 className="text-center text-4xl font-bold mb-10">Diplomas and Certificates</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <article key={index} className="p-4 rounded-md shadow-lg" style={{ backgroundColor: "#000000" }}>
              <header className="mb-4">
                <span className="block text-sm" style={{ color: "#FFFFFF" }}>
                  {cert.date}
                </span>
                <h2 className="text-2xl font-bold">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
                    {cert.title}
                  </a>
                </h2>
              </header>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <Image src={cert.image} alt={cert.title} className="rounded-md" width={300} height={200} />
              </a>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};
const certificates = [
  {
    date: "October 2022 - May 2024",
    title: "Diploma C# Full-Stack Developer",
    link: "https://softuni.bg/certificates/details/226035/4c9782f7",
    image: "/images/CSharp_Full-Stack.png"
  },
  {
    date: "October 2022 - May 2024",
    title: "Diploma for C# Web Developer",
    link: "https://softuni.bg/certificates/details/216179/78065f72",
    image: "/images/CSharp Web Developer.png"
  },
  {
    date: "October 2022 - May 2024",
    title: "Diploma for JS Web Developer",
    link: "https://softuni.bg/certificates/details/215936/8d639b39",
    image: "/images/JS Web Developer.png"
  },
  {
    date: "October 2022 - Retake",
    title: "C# Basic - RETAKE",
    link: "https://softuni.bg/trainings/3871/programming-basics-with-csharp-october-2022",
    image: "/images/Programming_Basic_October 2022-Retake.png"
  },
  {
    date: "January 2023",
    title: "C# Fundamentals",
    link: "https://softuni.bg/trainings/3950/programming-fundamentals-with-csharp-january-2023",
    image: "/images/CSharp_Fundamentals_January_2023.png"
  },
  {
    date: "May 2023",
    title: "C# Advanced",
    link: "https://softuni.bg/trainings/4098/csharp-advanced-may-2023",
    image: "/images/CSharp-Advanced_May-2023.png"
  },
  {
    date: "June 2023",
    title: "C# OOP",
    link: "https://softuni.bg/trainings/4099/csharp-oop-june-2023",
    image: "/images/CSharpOOPJune2023.png"
  },
  {
    date: "May 2023",
    title: "HTML & CSS",
    link: "https://softuni.bg/trainings/4114/html-and-css-may-2023",
    image: "/images/HTML-CSS-May 2023.png"
  },
  {
    date: "June 2023",
    title: "JS Front-End",
    link: "https://softuni.bg/trainings/4113/js-front-end-june-2023",
    image: "/images/JS-Front-End-June-2023.png"
  },
  {
    date: "September 2023",
    title: "MS SQL",
    link: "https://softuni.bg/trainings/4182/ms-sql-september-2023",
    image: "/images/MSSQLSeptember2023.png"
  },
  {
    date: "October 2023",
    title: "Entity Framework Core",
    link: "https://softuni.bg/trainings/4234/entity-framework-core-october-2023",
    image: "/images/EntityFrameworkCoreOctober2023.png"
  },
  {
    date: "September 2023",
    title: "JS Advanced",
    link: "https://softuni.bg/trainings/4227/js-advanced-september-2023",
    image: "/images/JSAdvancedSeptember2023.png"
  },
  {
    date: "October 2023",
    title: "JS Applications",
    link: "https://softuni.bg/trainings/4228/js-applications-october-2023",
    image: "/images/JSApplicationsOctober2023.png"
  },
  {
    date: "November 2023",
    title: "Data Structures Advanced with C#",
    link: "https://softuni.bg/trainings/4273/data-structures-advanced-with-csharp-november-2023",
    image: "/images/DataStructuresNovember2023.png"
  },
  {
    date: "January 2024",
    title: "JS Back-End",
    link: "https://softuni.bg/trainings/4364/js-back-end-january-2024",
    image: "/images/JSBackEndJanuary2024.png"
  },
  {
    date: "January 2024",
    title: "ASP.NET Fundamentals",
    link: "https://softuni.bg/trainings/4367/asp-net-fundamentals-january-2024",
    image: "/images/ASP.NETFundamentalsJanuary2024.png"
  },
  {
    date: "February 2024",
    title: "ASP.NET Advanced",
    link: "https://softuni.bg/trainings/4369/asp-net-advanced-february-2024",
    image: "/images/ASP.NETAdvancedFebruary2024.png"
  },
  {
    date: "February 2024",
    title: "Angular",
    link: "https://softuni.bg/trainings/4363/angular-february-2024",
    image: "/images/AngularFerbruary2024.png"
  },
  {
    date: "April 2024",
    title: "TypeScript",
    link: "https://softuni.bg/trainings/4550/typescript-april-2024",
    image: "/images/TypeScriptApril2024.png"
  },
  {
    date: "June 2024",
    title: "ReactJS",
    link: "https://softuni.bg/trainings/4529/reactjs-june-2024",
    image: "/images/ReactJS-June2024.png"
  },
  {
    date: "May 2024",
    title: "PostgreSQL",
    link: "https://softuni.bg/trainings/4536/postgresql-may-2024",
    image: "/images/PostgreSQL-May-2024.png"
  },
  {
    date: "May 2024",
    title: "Software E. and DevOps",
    link: "https://softuni.bg/trainings/4525/software-engineering-and-devops-may-2024",
    image: "/images/DevOps.png"
  },
  {
    date: "June 2024",
    title: "Container and Cloud",
    link: "https://softuni.bg/trainings/4524/containers-and-cloud-july-2024",
    image: "/images/ContainerAndCloudJune2024.png"
  }
];

export default Certificates;

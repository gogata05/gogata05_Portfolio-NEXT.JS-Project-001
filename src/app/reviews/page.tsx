"use client";

import Image from "next/image";
import Link from "next/link";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-customGray text-customWhite">
      {/* Main Content */}
      <main className="container mx-auto py-10">
        <h1 className="text-center text-4xl font-bold mb-10">My Certificates</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <article key={index} className="bg-basicBlack p-4 rounded-md shadow-lg">
              <header className="mb-4">
                <span className="block text-sm text-customGray400">{cert.date}</span>
                <h2 className="text-2xl font-bold">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-customOrange">
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
    title: "Programing Basic with C# RETAKE",
    link: "https://softuni.bg/trainings/3871/programming-basics-with-csharp-october-2022",
    image: "/images/Programming Basic - October 2022 Retake.jfif"
  },
  {
    date: "January 2023",
    title: "C# Fundamentals",
    link: "https://softuni.bg/trainings/3950/programming-fundamentals-with-csharp-january-2023",
    image: "/images/CSharp Fundamentals - January 2023.jfif"
  },
  {
    date: "May 2023",
    title: "C# Advanced",
    link: "https://softuni.bg/trainings/4098/csharp-advanced-may-2023",
    image: "/images/CSharp Advanced - May 2023.jfif"
  },
  {
    date: "June 2023",
    title: "C# OOP",
    link: "https://softuni.bg/trainings/4099/csharp-oop-june-2023",
    image: "/images/CSharpOOP-June2023.jfif"
  },
  {
    date: "May 2023",
    title: "HTML & CSS",
    link: "https://softuni.bg/trainings/4114/html-and-css-may-2023",
    image: "/images/HTML & CSS - May 2023.jfif"
  },
  {
    date: "June 2023",
    title: "JS Front-End",
    link: "https://softuni.bg/trainings/4113/js-front-end-june-2023",
    image: "/images/JS Front-End - June 2023.jfif"
  },
  {
    date: "September 2023",
    title: "MS SQL",
    link: "https://softuni.bg/trainings/4182/ms-sql-september-2023",
    image: "/images/MS SQL - September 2023.jfif"
  },
  {
    date: "October 2023",
    title: "Entity Framework Core",
    link: "https://softuni.bg/trainings/4234/entity-framework-core-october-2023",
    image: "/images/Entity Framework Core - October 2023.jfif"
  },
  {
    date: "September 2023",
    title: "JS Advanced",
    link: "https://softuni.bg/trainings/4227/js-advanced-september-2023",
    image: "/images/JS Advanced - September 2023.jfif"
  },
  {
    date: "October 2023",
    title: "JS Applications",
    link: "https://softuni.bg/trainings/4228/js-applications-october-2023",
    image: "/images/JS Applications - October 2023.jfif"
  },
  {
    date: "November 2023",
    title: "Data Structures Advanced with C#",
    link: "https://softuni.bg/trainings/4273/data-structures-advanced-with-csharp-november-2023",
    image: "/images/DataStructuresNovember2023.jfif"
  },
  {
    date: "January 2024",
    title: "JS Back-End",
    link: "https://softuni.bg/trainings/4364/js-back-end-january-2024",
    image: "/images/JS Back-End - January 2024.jfif"
  },
  {
    date: "January 2024",
    title: "ASP.NET Fundamentals",
    link: "https://softuni.bg/trainings/4367/asp-net-fundamentals-january-2024",
    image: "/images/ASP.NET Fundamentals - January 2024.jfif"
  },
  {
    date: "February 2024",
    title: "ASP.NET Advanced",
    link: "https://softuni.bg/trainings/4369/asp-net-advanced-february-2024",
    image: "/images/ASP.NET Advanced - February 2024.jfif"
  },
  {
    date: "February 2024",
    title: "Angular",
    link: "https://softuni.bg/trainings/4363/angular-february-2024",
    image: "/images/Angular - Ferbruary 2024.jfif"
  },
  {
    date: "April 2024",
    title: "TypeScript",
    link: "https://softuni.bg/trainings/4550/typescript-april-2024",
    image: "/images/TypeScript - April 2024.png"
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
  }
];

export default Reviews;

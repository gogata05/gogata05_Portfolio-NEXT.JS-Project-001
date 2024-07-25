import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import About2 from "../components/About2";
import Content from "../components/Content";
import Education from "../components/Education";
import Projects from "../components/Projects";
import { educationData } from "../../../util/data";
import Skills from "../components/Skills";
import Contactme from "../components/Contactme";
import Contact from "../components/Contact";

function about() {
  return (
    <div className=" bg-black overflow-x-hidden">
      <Header />
      <Hero />

      <section id="about" className="snap-center">
        {/* <About />     */}
        <Content />
      </section>
      <section id="education" className="snap-center">
        <Education props={educationData} />
      </section>
      {/* <sectin id="skills" className="snap-center">
    <Skills />
    </sectin> */}

      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contacts" className="snap-center">
        {/* <Contactme /> */}
        <Contact />
      </section>
      {/* <About2 /> */}
    </div>
  );
}

export default about;

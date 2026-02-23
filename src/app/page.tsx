import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import React from "react";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <section className="py-30">
        <Hero />
      </section>
      <section id="about" className="py-30">
        <About />
      </section>
      <section id="about" className="py-30">
        <Project />
      </section>
      <section id="experience" className="py-30">
        <Experience />
      </section>
      <section id="contact" className="py-30">
        <Contact />
      </section>
    </main>
  );
};

export default page;

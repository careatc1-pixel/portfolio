"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FortexaSecure",
    description:
      "Secure SaaS platform with encryption, authentication layers, and cloud architecture.",
    link: "https://www.fortexasecure.com/",
    image: "/projects/fortexa.png",
    tech: ["Next.js", "Node.js", "MongoDB", "AWS"],
    highlight: true,
  },
  {
    title: "Meradhan",
    description:
      "Digital investment platform with modern frontend architecture and financial tools.",
    link: "https://www.meradhan.co/",
    image: "/projects/meradhan.png",
    tech: ["Next.js", "React", "API"],
  },
  {
    title: "XInterview",
    description:
      "AI-powered interview preparation platform with interactive UI and scalable backend.",
    link: "https://www.xinterview.ai/",
    image: "/projects/xinterview.png",
    tech: ["Next.js", "AI", "Node"],
  },
  {
    title: "XResume",
    description:
      "Smart resume builder with optimized UX and responsive design.",
    link: "https://xresume.ai/",
    image: "/projects/xresume.png",
    tech: ["React", "Next.js"],
  },
  {
    title: "LightSense IoT",
    description:
      "Enterprise IoT platform for smart lighting monitoring and analytics.",
    link: "https://lesoft.com/product/lightsense/",
    image: "/projects/lightsense.png",
    tech: ["Dashboard", "IoT"],
  },
  {
    title: "Discretal IoT",
    description:
      "Industrial IoT solution for device monitoring and operational insights.",
    link: "https://lesoft.com/product/discretal-iot/",
    image: "/projects/discretal.png",
    tech: ["IoT", "Analytics"],
  },
  {
  title: "StudyNotion",
  description:
    "Full-stack learning management platform with course browsing, authentication, and interactive user experience.",
  link: "https://www.studynotion.app/",
  image: "/projects/studynotion.png",
  tech: ["React", "Node.js", "MongoDB", "Express"],
},
];

export default function Project() {
  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Products & Projects
        </motion.h2>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          A selection of products and platforms I’ve worked on, including SaaS,
          enterprise applications, and AI-powered solutions.
        </p>

        {/* Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className={`
                group
                rounded-2xl
                border
                overflow-hidden
                backdrop-blur-xl
                ${
                  project.highlight
                    ? "ring-1 ring-indigo-500/40"
                    : ""
                }
              `}
              style={{
                background: "rgba(var(--navbar),0.6)",
                borderColor: "rgb(var(--border))",
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="
                  absolute inset-0
                  bg-black/40
                  opacity-0
                  group-hover:opacity-100
                  transition
                  flex items-center justify-center
                ">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="
                      px-4 py-2
                      rounded-lg
                      bg-white text-black
                      text-sm font-medium
                      flex items-center gap-2
                    "
                  >
                    Visit
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        text-xs
                        px-2.5 py-1
                        rounded-full
                        border
                      "
                      style={{
                        borderColor: "rgb(var(--border))",
                        background: "rgba(var(--navbar),0.4)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
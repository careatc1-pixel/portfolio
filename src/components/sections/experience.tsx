"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Javascript Developer",
    company: "Leader Investment Group (LIG)",
    period: "Oct 2025 — Present",
    location: "Riyadh, Saudi Arabia · Remote",
    points: [
      "Contributing to enterprise IoT platforms covering Smart City and Discretal IoT use cases.",
      "Building scalable frontend solutions aligned with product and business requirements.",
      "Collaborating with backend, QA, and product teams to deliver production-ready features.",
    ],
  },
  {
    role: "Software Developer",
    company: "Web2Success",
    period: "Apr 2024 — Oct 2025",
    location: "London, England · Remote",
    points: [
      "Developed and maintained frontend features using React and Next.js.",
      "Implemented SSR strategies to improve performance and user experience.",
      "Worked closely with designers and backend teams for seamless integrations.",
      "Participated in code reviews, debugging, and production issue resolution.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "OrangeFox",
    period: "Nov 2023 — Apr 2024",
    location: "North York, Ontario, Canada · Remote",
    points: [
      "Built applications using Next.js with server-side rendering for performance and SEO.",
      "Improved UI components and frontend architecture.",
      "Gained hands-on experience in modern development workflows and collaboration.",
    ],
  },
  {
    role: "Freelance Software Engineer",
    company: "Freelance",
    period: "Jul 2023 — Nov 2023",
    location: "India · Remote",
    points: [
      "Worked on backend and frontend web development projects using modern frameworks.",
      "Delivered client-focused solutions with performance and scalability considerations.",
      "Managed independent project lifecycles from development to deployment.",
    ],
  },
  {
    role: "Associate Software Engineer Intern",
    company: "Vittoria Sempre",
    period: "Jan 2023 — Jun 2023",
    location: "Delhi, India · Remote",
    points: [
      "Developed interactive frontend applications translating business requirements into UI solutions.",
      "Worked with TypeScript and modern web technologies in team environments.",
      "Participated in code reviews and collaborative development processes.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Experience
        </motion.h2>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          My professional journey working on real-world products, scalable
          platforms, and modern web applications.
        </p>

        {/* Timeline */}
        <div className="mt-14 relative">

          {/* Vertical Line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgb(var(--border)), transparent)",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[7px] top-2">
                  <div
                    className="
                      w-4 h-4 rounded-full
                      shadow-md
                    "
                    style={{
                      background: "rgb(var(--foreground))",
                      boxShadow:
                        "0 0 0 4px rgba(var(--navbar),0.6)",
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="
                    group
                    rounded-2xl
                    border
                    p-6
                    backdrop-blur-xl
                    transition
                    hover:shadow-xl
                  "
                  style={{
                    background: "rgba(var(--navbar),0.6)",
                    borderColor: "rgb(var(--border))",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-lg">
                      {exp.role}
                    </h3>

                    <span
                      className="
                        text-xs
                        px-3 py-1
                        rounded-full
                        border
                      "
                      style={{
                        borderColor: "rgb(var(--border))",
                        background: "rgba(var(--navbar),0.4)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.company}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {exp.location}
                  </p>

                  {/* Points */}
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-foreground/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

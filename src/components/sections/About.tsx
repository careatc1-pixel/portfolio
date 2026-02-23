"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          About Me
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-8
            rounded-2xl
            border
            p-8
            backdrop-blur-xl
            space-y-6
          "
          style={{
            background: "rgba(var(--navbar),0.6)",
            borderColor: "rgb(var(--border))",
          }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            I’m a software engineer focused on building modern web products
            with strong attention to user experience, scalability, and
            reliability. My primary expertise lies in frontend engineering,
            while also working across backend systems, databases, and cloud
            deployment environments.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Professionally, I’ve worked on real-world products including
            enterprise IoT platforms and production web applications, where I
            contributed to frontend architecture, feature development, and
            performance optimization using technologies like React, Next.js,
            and Node.js.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Alongside my professional work, I’ve built my own SaaS product,
            gaining hands-on experience in system design decisions, security
            implementation, authentication flows, subscription systems, and
            cloud infrastructure. This experience strengthened my
            understanding of how software behaves beyond code — in production
            environments with real users.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Currently, I’m focused on advancing my knowledge in
            industry-level system design, scalable architectures, and
            performance engineering to grow into a well-rounded engineer who
            can contribute across the entire product lifecycle.
          </p>
        </motion.div>

        {/* Skills */}
  {/* Skills */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-12 grid md:grid-cols-2 gap-6"
>
  {[
    {
      title: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "C++", "C", "SQL", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI"],
    },
    {
      title: "Backend & Database",
      items: ["Node.js", "Express.js", "MongoDB", "Prisma ORM"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS (EC2, S3, CloudFront, VPC)", "Docker", "CI/CD", "Vercel", "Netlify"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "GitLab", "Playwright","Jira"],
    },
    {
      title: "Practices",
      items: ["REST APIs", "Secure Authentication", "Agile/Scrum", "Problem Solving"],
    },
  ].map((category) => (
    <div
      key={category.title}
      className="
        rounded-2xl
        border
        p-6
        backdrop-blur-xl
      "
      style={{
        background: "rgba(var(--navbar),0.5)",
        borderColor: "rgb(var(--border))",
      }}
    >
      <h3 className="font-semibold mb-3">{category.title}</h3>

      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span
            key={skill}
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
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))}
</motion.div>
      </div>
    </section>
  );
}
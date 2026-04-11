"use client";

import { motion } from "framer-motion";

const process = [
  {
    step: "Step 01",
    title: "Discovery & Consultation",
    period: "Day 1",
    location: "On-Site or Remote · Delhi NCR",
    points: [
      "We start with a free consultation to understand your business, existing IT setup, and pain points.",
      "Our team audits your current infrastructure, software stack, and security posture.",
      "We identify gaps, risks, and automation opportunities specific to your operations.",
    ],
  },
  {
    step: "Step 02",
    title: "Custom Solution Design",
    period: "Day 2–3",
    location: "Planning Phase",
    points: [
      "Based on the audit, we design a tailored IT support or automation plan aligned to your goals.",
      "We provide a transparent scope of work, timeline, and pricing — no hidden costs.",
      "Solutions are built to scale with your business, not just fix today's problems.",
    ],
  },
  {
    step: "Step 03",
    title: "Implementation & Setup",
    period: "Day 3–7",
    location: "On-Site / Remote Deployment",
    points: [
      "Our engineers handle full deployment — network configuration, software setup, automation pipelines, or security hardening.",
      "We minimize disruption to your operations with planned maintenance windows.",
      "Every implementation is documented and handed over with full transparency.",
    ],
  },
  {
    step: "Step 04",
    title: "Testing & Quality Assurance",
    period: "Day 7–10",
    location: "QA & Validation Phase",
    points: [
      "All systems, automations, and configurations are rigorously tested before going live.",
      "We simulate real-world usage scenarios to catch edge cases early.",
      "Security checks and performance benchmarks are validated against agreed standards.",
    ],
  },
  {
    step: "Step 05",
    title: "Ongoing Support & Monitoring",
    period: "Post Go-Live · Continuous",
    location: "Remote & On-Site · 24/7",
    points: [
      "We provide continuous monitoring, proactive alerts, and regular maintenance to keep everything running smoothly.",
      "Dedicated support channels ensure your team gets fast responses when issues arise.",
      "Monthly reports keep you informed on system health, incidents, and improvements.",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          How We Work
        </motion.h2>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          A simple, transparent process designed to get your IT running
          smoothly — from the first call to long-term partnership.
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
            {process.map((item, index) => (
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
                    className="w-4 h-4 rounded-full shadow-md"
                    style={{
                      background: "rgb(var(--foreground))",
                      boxShadow: "0 0 0 4px rgba(var(--navbar),0.6)",
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
                    <div>
                      <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">
                        {item.step}
                      </span>
                      <h3 className="font-semibold text-lg mt-0.5">
                        {item.title}
                      </h3>
                    </div>

                    <span
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{
                        borderColor: "rgb(var(--border))",
                        background: "rgba(var(--navbar),0.4)",
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mt-1">
                    {item.location}
                  </p>

                  {/* Points */}
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-foreground/60 shrink-0" />
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
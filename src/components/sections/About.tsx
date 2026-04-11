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
            Atharv Tech Co. is a Delhi-based IT services company specializing in
            end-to-end IT support and intelligent business automation. Founded
            with a mission to make technology accessible and dependable for
            businesses of all sizes, we bring enterprise-grade solutions with a
            personal, hands-on approach that larger firms simply can't offer.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Atharv Tech Co. is a Delhi-based IT services company specializing in
            end-to-end IT support and intelligent business automation. Founded
            with a mission to make technology accessible and dependable for
            businesses of all sizes, we bring enterprise-grade solutions with a
            personal, hands-on approach that larger firms simply can't offer.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Our team brings deep expertise across IT infrastructure management,
            network setup and maintenance, hardware diagnostics, remote and
            on-site support, and software troubleshooting. Whether you're a
            growing startup or an established enterprise, we ensure your systems
            stay online, secure, and running at peak performance — so you can
            focus on your business, not your tech.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Beyond traditional IT support, we design and deploy custom
            automation solutions that eliminate repetitive manual tasks and
            streamline business operations. From automated reporting pipelines
            and workflow triggers to CRM integrations and scheduled task
            management, we help organizations reclaim time and reduce human
            error at scale.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Security is at the core of everything we do. We implement robust
            cybersecurity practices including network monitoring, access
            control, data backup strategies, and compliance-ready configurations
            — giving you confidence that your business data is always protected.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            At Atharv Tech Co., we don't just fix problems — we build long-term
            technology partnerships. Our clients across Delhi and NCR trust us
            as their dedicated tech team, available when it matters most and
            proactive enough to prevent issues before they arise.
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
              title: "IT Support",
              items: [
                "Remote & On-Site Support",
                "Hardware Diagnostics & Repair",
                "Software Installation & Troubleshooting",
                "Help Desk Services",
                "System Health Monitoring",
              ],
            },
            {
              title: "Network & Infrastructure",
              items: [
                "Network Setup & Configuration",
                "Router, Switch & Firewall Management",
                "LAN/WAN Infrastructure",
                "VPN Setup & Management",
                "Server Administration",
              ],
            },
            {
              title: "Business Automation",
              items: [
                "Workflow Automation",
                "Automated Reporting & Dashboards",
                "CRM & ERP Integrations",
                "Scheduled Task Management",
                "RPA (Robotic Process Automation)",
              ],
            },
            {
              title: "Cybersecurity",
              items: [
                "Network Security Monitoring",
                "Access Control & IAM",
                "Data Backup & Recovery",
                "Antivirus & Endpoint Protection",
                "Security Audits & Compliance",
              ],
            },
            {
              title: "Cloud Services",
              items: [
                "Cloud Migration & Setup",
                "AWS & Azure Management",
                "Cloud Storage Solutions",
                "SaaS Deployment & Support",
                "Disaster Recovery Planning",
              ],
            },
            {
              title: "Our Approach",
              items: [
                "Proactive Maintenance",
                "24/7 Availability",
                "Transparent Pricing",
                "Dedicated Account Support",
                "Scalable Solutions",
              ],
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
                {category.items.map((item) => (
                  <span
                    key={item}
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
                    {item}
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

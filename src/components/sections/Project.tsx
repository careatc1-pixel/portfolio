"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bot, Cloud, HeadphonesIcon, Monitor, ShieldCheck, Wifi } from "lucide-react";

const services = [
  {
    title: "IT Help Desk Support",
    description:
      "Round-the-clock remote and on-site support for hardware issues, software errors, system crashes, and general IT troubleshooting — keeping your team productive without downtime.",
    icon: HeadphonesIcon,
    tags: ["Remote Support", "On-Site", "24/7 Availability"],
    highlight: true,
  },
  {
    title: "Network Setup & Management",
    description:
      "End-to-end network design, installation, and ongoing management including routers, switches, firewalls, VPNs, and LAN/WAN infrastructure for offices of all sizes.",
    icon: Wifi,
    tags: ["LAN/WAN", "Firewall", "VPN", "Router Config"],
  },
  {
    title: "Business Process Automation",
    description:
      "We automate repetitive workflows, integrate your tools, and build scheduled pipelines — freeing your team from manual tasks and reducing operational overhead significantly.",
    icon: Bot,
    tags: ["Workflow Automation", "CRM Integration", "RPA"],
  },
  {
    title: "Cybersecurity & Data Protection",
    description:
      "Protect your business with network monitoring, endpoint security, access control, and data backup strategies. We ensure compliance-ready configurations and fast incident response.",
    icon: ShieldCheck,
    tags: ["Endpoint Security", "Backup & Recovery", "Access Control"],
  },
  {
    title: "Cloud Services & Migration",
    description:
      "Seamlessly migrate your infrastructure to the cloud or manage your existing cloud environment on AWS or Azure. We handle setup, optimization, and ongoing cloud support.",
    icon: Cloud,
    tags: ["AWS", "Azure", "Cloud Migration", "SaaS Support"],
  },
  {
    title: "System & Hardware Management",
    description:
      "Proactive maintenance, diagnostics, and lifecycle management for desktops, laptops, servers, and peripherals — ensuring your hardware stays reliable and up to date.",
    icon: Monitor,
    tags: ["Hardware Repair", "Server Admin", "Preventive Maintenance"],
  },
];

export default function Project() {
  return (
  <section id="services">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Our Services
        </motion.h2>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          From everyday IT support to advanced automation — we deliver
          reliable, scalable technology solutions tailored to your business
          needs in Delhi and across NCR.
        </p>

        {/* Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
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
                  flex flex-col
                  ${service.highlight ? "ring-1 ring-indigo-500/40" : ""}
                `}
                style={{
                  background: "rgba(var(--navbar),0.6)",
                  borderColor: "rgb(var(--border))",
                }}
              >
                {/* Icon Banner */}
                <div
                  className="
                    h-36
                    flex items-center justify-center
                    bg-gradient-to-br from-indigo-500/10 to-purple-500/10
                    border-b
                  "
                  style={{ borderColor: "rgb(var(--border))" }}
                >
                  <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                    <Icon size={36} className="text-indigo-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg">{service.title}</h3>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{
                          borderColor: "rgb(var(--border))",
                          background: "rgba(var(--navbar),0.4)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
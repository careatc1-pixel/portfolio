"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
    inline-flex items-center gap-2
    px-4 py-1.5
    rounded-full
    border
    text-sm
    backdrop-blur-xl
    mb-6
  "
          style={{
            background: "rgba(var(--navbar),0.6)",
            borderColor: "rgb(var(--border))",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Serving Businesses Across India
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="
    text-sm md:text-base
    uppercase
    tracking-widest
    text-muted-foreground
    mb-4
  "
        >
          Atharv Tech Co. • IT Support & Automation Experts
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
    text-4xl md:text-6xl
    font-bold
    tracking-tight
    leading-tight
  "
        >
          Reliable IT Support, Smarter
          <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Automation for Your Business.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
    mt-6
    text-lg
    text-muted-foreground
    max-w-2xl
    mx-auto
  "
        >
Atharv Tech Co. delivers expert IT support and intelligent automation
          solutions to businesses in Delhi and beyond. From troubleshooting and
          infrastructure management to workflow automation, we help you stay
          efficient, secure, and always operational.
        </motion.p>
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {/* View Projects */}
          <Link
            href="#projects"
            className="
      inline-flex items-center
      px-6 py-3
      rounded-xl
      bg-primary text-primary-foreground
      font-medium
      hover:opacity-90
      transition
    "
          >
            Our Services
            <ArrowRight className="ml-2" size={18} />
          </Link>

          {/* Contact */}
          <Link href="#contact">
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl backdrop-blur-xl"
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div
        className="
          absolute inset-0 -z-10
          flex justify-center
          pointer-events-none
        "
      >
        <div
          className="
            w-[500px] h-[500px]
            rounded-full
            blur-3xl
            opacity-30
            bg-gradient-to-r
            from-indigo-500
            to-purple-500
          "
        />
      </div>
    </section>
  );
}

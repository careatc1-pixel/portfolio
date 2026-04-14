"use client";

import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center"
        >
          Let’s Connect
        </motion.h2>

        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Have a project idea, opportunity, or just want to say hello? Feel free
          to reach out — I’m always open to meaningful conversations.
        </p>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mt-12
            rounded-2xl
            border
            p-8
            backdrop-blur-xl
          "
          style={{
            background: "rgba(var(--navbar),0.6)",
            borderColor: "rgb(var(--border))",
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>

              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} />
                <a href="mailto:connect@atharvtechco.com?subject=Hello&body=Hi there,">
                  connect@atharvtechco.com
                </a>
              </div>

              <p className="text-sm text-muted-foreground pt-4">
                I typically respond within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" type="email" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button className="w-full rounded-xl">
                Send Message
                <Send className="ml-2" size={16} />
              </Button>
              <span className="block text-sm text-gray-500 text-center mt-2">
                Contact me at{" "}
                <a
                  href="tel:+919310721874"
                  className="font-semibold hover:underline"
                >
                  +91{' '}9310721874
                </a>
              </span>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

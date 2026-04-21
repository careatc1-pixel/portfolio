"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";

const teamMembers = [
  { name: "Hemant Bhatnagar", role: "CTO" },
  { name: "Vikas Shukla", role: "BDM" },
  { name: "Shivam Ghosh", role: "Frontend Developer" },
  { name: "Aakash Shukla", role: "Tech Consultant" },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success("Message sent successfully 🚀");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Let’s Connect
        </motion.h2>

        <div className="mt-12 rounded-2xl border border-slate-800 p-8 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>

              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} />
                <a href="mailto:connect@atharvtechco.com">
                  connect@atharvtechco.com
                </a>
              </div>
            </div>

            {/* Form */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <Input name="user_name" placeholder="Your Name" required />

              <Input
                name="user_email"
                type="email"
                placeholder="Email Address"
                required
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
              />

              <Button
                type="submit"
                className="w-full rounded-xl cursor-pointer"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2" size={16} />
              </Button>

              <span className="block text-sm text-gray-500 text-center mt-2">
                Contact me at{" "}
                <a
                  href="tel:+919310721874"
                  className="font-semibold hover:underline"
                >
                  +91 9310721874
                </a>
              </span>
            </form>
          </div>
          <div className="border-t border-slate-700 mt-5 px-8 py-4 flex items-center gap-6 flex-wrap whitespace-nowrap">
            {teamMembers.map((m, i) => (
              <div key={m.name} className="flex flex-wrap items-center gap-1 shrink-0">
                <span className="text-sm font-medium">{m.name}</span>
                <span className="text-xs text-gray-400">· {m.role}</span>

                {i !== teamMembers.length - 1 && (
                  <span className="text-gray-500 mx-2">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

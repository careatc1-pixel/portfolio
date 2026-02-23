import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Glass Container */}
        <div
          className="
            rounded-2xl
            border
            px-6 py-8
            backdrop-blur-xl
            flex flex-col md:flex-row
            items-center justify-between
            gap-6
          "
          style={{
            background: "rgba(var(--navbar),0.6)",
            borderColor: "rgb(var(--border))",
          }}
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">
              Let’s build something great.
            </h3>
            <p className="text-sm opacity-70 mt-1">
              Full Stack Developer — MERN & Next.js
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="p-2 rounded-xl border hover:scale-110 transition"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <Github size={18} />
            </Link>

            <Link
              href="#"
              className="p-2 rounded-xl border hover:scale-110 transition"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <Linkedin size={18} />
            </Link>

            <Link
              href="mailto:youremail@gmail.com"
              className="p-2 rounded-xl border hover:scale-110 transition"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-sm opacity-60 mt-6">
          © {new Date().getFullYear()} Hemant Bhatnagar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
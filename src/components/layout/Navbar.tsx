"use client";

import Link from "next/link";
import { Code2, Layers, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme-toggle";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <nav
          className="
          mt-4
          flex items-center justify-between
          rounded-2xl
          border
          px-6 py-3
          backdrop-blur-xl
          shadow-lg
        "
          style={{
            background: "rgba(var(--navbar), 0.7)",
            borderColor: "rgb(var(--border))",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="
    flex items-center justify-center
    w-10 h-10
    rounded-xl
    border
    backdrop-blur-xl
    hover:scale-105
    transition
  "
            style={{ borderColor: "rgb(var(--border))" }}
          >
            <Layers size={18} />
          </Link>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#about" className="hover:opacity-70 transition">
              About
            </Link>
            <Link href="#projects" className="hover:opacity-70 transition">
              Projects
            </Link>
            <Link href="#experience" className="hover:opacity-70 transition">
              Experience
            </Link>
            <Link href="#contact" className="hover:opacity-70 transition">
              Contact
            </Link>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

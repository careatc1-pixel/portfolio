"use client";

import Link from "next/link";
import { Code2, Layers, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme-toggle";
import Image from "next/image";

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
  className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border hover:scale-105 transition bg-white"
  style={{ borderColor: "rgb(var(--border))" }}
>
  <Image
    src="/projects/logo.png"
    alt="Logo"
    width={40}
    height={40}
    className="object-contain"
  />
</Link>

          {/* Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="#about" className="hover:opacity-70 transition">
              About
            </Link>
            <Link href="#services" className="hover:opacity-70 transition">
              Services
            </Link>
            <Link href="#how-we-work" className="hover:opacity-70 transition">
              How We Work
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

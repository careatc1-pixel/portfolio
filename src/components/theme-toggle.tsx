"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative flex items-center
        w-16 h-9
        rounded-full
        p-1
        transition
        hover:scale-105
      "
      style={{
        background: "rgba(var(--navbar),0.6)",
        border: "1px solid rgb(var(--border))",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? "radial-gradient(circle at 75% 50%, rgba(99,102,241,0.25), transparent 60%)"
            : "radial-gradient(circle at 25% 50%, rgba(251,191,36,0.25), transparent 60%)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Toggle Knob */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="
          relative z-10
          flex items-center justify-center
          w-7 h-7
          rounded-full
          shadow-lg
        "
        animate={{
          x: isDark ? 28 : 0,
          rotate: isDark ? 180 : 0,
        }}
        style={{
          background: "rgb(var(--foreground))",
          color: "rgb(var(--background))",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            {isDark ? <Moon size={14} /> : <Sun size={14} />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
}
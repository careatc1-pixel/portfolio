import Link from "next/link";
import { Phone, MessageCircle, Mail, Linkedin } from "lucide-react";
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
            <h3 className="font-semibold text-lg">Atharv Tech Co.</h3>
            <p className="text-sm opacity-70 mt-1">
              IT Support & Automation Experts — Delhi, India
            </p>
          </div>

          {/* Contact Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="tel:+911234567890"
              className="p-2 rounded-xl border hover:scale-110 transition"
              style={{ borderColor: "rgb(var(--border))" }}
              title="Call Us"
            >
              <Phone size={18} />
            </Link>

            <Link
              href="https://wa.me/911234567890"
              target="_blank"
              className="p-2 rounded-xl border hover:scale-110 transition"
              style={{ borderColor: "rgb(var(--border))" }}
              title="WhatsApp"
            >
              <MessageCircle size={18} />
            </Link>

            <Link
              href="mailto:support@atharvtech.in"
              className="p-2 rounded-xl border hover:scale-110 transition"
              style={{ borderColor: "rgb(var(--border))" }}
              title="Email Us"
            >
              <Mail size={18} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/atharvtech"
              target="_blank"
              className="p-2 rounded-xl border hover:scale-110 transition"
              style={{ borderColor: "rgb(var(--border))" }}
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-sm opacity-60 mt-6">
          © {new Date().getFullYear()} Atharv Tech Co. All rights reserved. ·
          Delhi, India
        </div>
      </div>
    </footer>
  );
}

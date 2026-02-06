"use client";

import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-3 right-0 z-[1000] bg-black border-b border-gray-900 transition-shadow duration-300 ${isScrolled ? "shadow-lg shadow-black/50" : ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#3B82F6]" />
            <span className="text-xl font-bold text-white">RecruiterAI</span>
          </div>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm text-gray-400 hover:text-white transition-colors">Product</a>
            <a href="#solutions" className="text-sm text-gray-400 hover:text-white transition-colors">Solutions</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#resources" className="text-sm text-gray-400 hover:text-white transition-colors">Resources</a>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">
              Log In
            </button>
            <button className="bg-[#3B82F6] text-white text-sm font-medium px-6 py-6 rounded-lg hover:bg-[#5B9EF8] transition-colors">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
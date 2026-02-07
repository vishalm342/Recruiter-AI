"use client";

import { Sparkles, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-xl font-bold text-white">RecruiterAI</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["Product", "Solutions", "Pricing", "Resources"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm text-gray-400 hover:text-white transition-colors">
                Log In
              </button>
              <button className="bg-[#3B82F6] text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-[#2563EB] transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-black pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6 text-center">
              {["Product", "Solutions", "Pricing", "Resources"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white py-2 border-b border-white/10"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                <button className="text-gray-300 text-lg py-3">Log In</button>
                <button className="bg-[#3B82F6] text-white text-lg font-bold py-4 rounded-xl">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
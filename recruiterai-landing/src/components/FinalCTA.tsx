"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Headset } from "lucide-react";
import { clsx } from "clsx";

// --- Trust Badges Data (From Prompt 8) ---
const BADGES = [
  { icon: ShieldCheck, label: "ENTERPRISE SECURE" },
  { icon: Zap, label: "INSTANT SETUP" },
  { icon: Headset, label: "24/7 SUPPORT" },
];

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[var(--color-dark-bg)] h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* 1. Background Radial Gradient (The "Glow") */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center">
        
        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl"
        >
          Ready to Hire Better, Faster?
        </motion.h2>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-blue-200/80 text-lg md:text-2xl font-medium mb-12 tracking-wide"
        >
          Join 500+ companies hiring smarter with AI
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-5 w-full justify-center"
        >
          {/* Primary Button (White) */}
          <button className="bg-white text-black text-lg font-bold px-10 py-4 rounded-xl hover:bg-gray-100 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Start Free Trial
          </button>
          
          {/* Secondary Button (Outline) */}
          <button className="bg-transparent border-2 border-white/20 text-white text-lg font-bold px-10 py-4 rounded-xl hover:bg-white/10 hover:border-white transition-all">
            Schedule Demo
          </button>
        </motion.div>

        {/* 3. Trust Badges (Footer) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60"
        >
          {BADGES.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <badge.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <span className="text-xs md:text-sm font-bold tracking-[0.15em] text-gray-400 group-hover:text-white transition-colors">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
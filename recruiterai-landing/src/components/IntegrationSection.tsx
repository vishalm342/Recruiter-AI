"use client";

import React from "react";
import { motion } from "framer-motion";

// --- Logo Data ---
const LOGOS = [
  "LinkedIn", "Naukri.com", "Indeed", "AngelList", "Instahyre",
  "Wellfound", "IIMJobs", "Glassdoor", "Monster", "Cutshort",
];

// --- Pill Component ---
const LogoPill = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 flex items-center justify-center bg-[#111] border border-white/10 rounded-full px-8 py-4 min-w-[160px] hover:bg-[#222] hover:border-[var(--color-primary)]/30 transition-all duration-300 cursor-default shadow-lg">
    <span className="text-gray-300 font-bold text-sm md:text-base tracking-wide whitespace-nowrap">
      {name}
    </span>
  </div>
);

export default function IntegrationSection() {
  return (
    <section className="relative w-full z-10 mt-32 border-t border-white/5 bg-[var(--color-dark-bg)]">
      
      {/* 1. Spacing Container: Handles the vertical distance inside the border */}
      <div className="py-24 md:py-32 flex flex-col items-center">
        
        {/* Ambient Background Glow (Centered) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-primary)]/10 blur-[100px] rounded-full pointer-events-none" />

        {/* 2. Header Content */}
        <div className="relative z-10 w-full max-w-4xl text-center mb-20 px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Post Once, Reach Everywhere
          </h2>
          <p className="text-[var(--color-dark-text)] text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            RecruiterAI automatically syncs your job postings across all major platforms.
          </p>
        </div>

        {/* 3. Infinite Slider Wrapper */}
        <div className="relative w-full overflow-hidden select-none py-4">
          
          {/* Edge Masks (Gradient Fades) */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[var(--color-dark-bg)] via-[var(--color-dark-bg)]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[var(--color-dark-bg)] via-[var(--color-dark-bg)]/90 to-transparent z-20 pointer-events-none" />

          {/* Sliding Track */}
          <div className="flex w-full">
            <motion.div
              className="flex gap-12 pl-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 60,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ width: "fit-content" }}
            >
              {/* Duplicated for seamless loop */}
              {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                <LogoPill key={`${logo}-${index}`} name={logo} />
              ))}
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
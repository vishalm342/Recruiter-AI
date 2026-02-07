"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { clsx } from "clsx";

// --- Testimonial Data (From Prompt 6) ---
const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Founder, TechStart Solutions",
    initials: "RM",
    quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
    color: "text-blue-400", // #3B82F6 equivalent
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500",
    accentBorder: "border-l-blue-300", // #A5D8FF accent
  },
  {
    id: 2,
    name: "Anjali P.",
    role: "VP of Engineering, DataFlow",
    initials: "AP",
    quote: "The AI screening is scarily accurate. It flagged a candidate I would have missed, and she ended up being our best hire this year.",
    color: "text-purple-400", // #D0BCFF equivalent
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500",
    accentBorder: "border-l-purple-300", // #D0BCFF accent
  },
  {
    id: 3,
    name: "Mark D.",
    role: "Head of Operations, GreenLeaf",
    initials: "MD",
    quote: "Finally, I can sleep. I don't have to spend my weekends scheduling interviews manually. The calendar sync just works.",
    color: "text-violet-400", // #B197FC equivalent
    bgColor: "bg-violet-500/20",
    borderColor: "border-violet-500",
    accentBorder: "border-l-violet-300", // #B197FC accent
  },
];

// --- Stats Data (From Screenshot) ---
const STATS = [
  { value: "500+", label: "COMPANIES" },
  { value: "10k+", label: "HIRES MADE" },
  { value: "98%", label: "SUCCESS RATE" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-[var(--color-dark-bg)] py-32 px-6 flex flex-col items-center border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. Section Header */}
      <div className="relative z-10 w-full max-w-4xl text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Trusted by Hiring Teams Everywhere
        </h2>
        <p className="text-[var(--color-dark-text)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          See why founders and hiring managers are switching to automated recruiting.
        </p>
      </div>

      {/* 2. Testimonials Grid */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {TESTIMONIALS.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={clsx(
              "relative flex flex-col bg-[#1A1A1A] p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300",
              "border-l-[4px]", card.accentBorder // The colored left border
            )}
          >
            {/* Decorative Big Quote Icon */}
            <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 rotate-180 group-hover:text-white/10 transition-colors" />

            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
              {/* Avatar */}
              <div className={clsx("w-14 h-14 rounded-full flex items-center justify-center border font-bold text-lg shadow-inner", card.bgColor, card.color, card.borderColor)}>
                {card.initials}
              </div>
              {/* Name & Title */}
              <div>
                <h4 className="text-white font-bold text-lg leading-tight">
                  {card.name}
                </h4>
                <p className="text-[var(--color-dark-text)] text-sm font-medium mt-1">
                  {card.role}
                </p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote className="text-gray-300 text-base leading-relaxed italic relative z-10 flex-grow">
              "{card.quote}"
            </blockquote>

          </motion.div>
        ))}
      </div>

      {/* 3. Bottom Stats (Social Proof) */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
        {STATS.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm font-bold text-[var(--color-dark-text)] tracking-[0.2em]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
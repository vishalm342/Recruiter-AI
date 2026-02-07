"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Clock, 
  Users, 
  ClipboardCheck, 
  BadgeCheck, 
  Wallet, 
  TrendingDown 
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Metric Data ---
const metrics = [
  {
    id: 1,
    value: "10x",
    label: "Faster Screening",
    description: "AI parses and ranks 250+ applications per day vs 25 manually",
    icon: Search,
    color: "text-blue-300", 
    borderColor: "border-t-blue-400",
    shadowColor: "shadow-blue-500/20",
  },
  {
    id: 2,
    value: "70%",
    label: "Faster Time-to-Hire",
    description: "Average hiring timeline drops from 42 days to just 12 days",
    icon: Clock,
    color: "text-indigo-300",
    borderColor: "border-t-indigo-400",
    shadowColor: "shadow-indigo-500/20",
  },
  {
    id: 3,
    value: "25x",
    label: "More Interview Capacity",
    description: "AI conducts 200+ automated screening interviews daily vs 8 manual calls",
    icon: Users,
    color: "text-purple-300",
    borderColor: "border-t-purple-400",
    shadowColor: "shadow-purple-500/20",
  },
  {
    id: 4,
    value: "95%",
    label: "Application Completion",
    description: "Smart application forms reduce candidate drop-off dramatically",
    icon: ClipboardCheck,
    color: "text-sky-300",
    borderColor: "border-t-sky-400",
    shadowColor: "shadow-sky-500/20",
  },
  {
    id: 5,
    value: "89%",
    label: "More Qualified Applications",
    description: "AI job description optimizer attracts higher-quality candidate pipelines",
    icon: BadgeCheck,
    color: "text-violet-300",
    borderColor: "border-t-violet-400",
    shadowColor: "shadow-violet-500/20",
  },
  {
    id: 6,
    value: "80%",
    label: "Lower Recruitment Costs",
    description: "vs traditional recruiting agencies and multiple software subscriptions",
    icon: Wallet,
    color: "text-fuchsia-300",
    borderColor: "border-t-fuchsia-400",
    shadowColor: "shadow-fuchsia-500/20",
  },
];

export default function ImpactSection() {
  return (
    <section className="relative w-full bg-black pt-28 md:pt-36 lg:pt-44 pb-24 md:pb-32 lg:pb-40 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* Container: Centers everything horizontally with a max-width constraint */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- Header Section (Perfectly Centered) --- */}
        <div className="w-full max-w-3xl text-center mb-20 md:mb-24 lg:mb-28 space-y-7 mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            The RecruiterAI Advantage
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Transforming the recruitment landscape with industry-leading efficiency and performance metrics.
          </p>
        </div>

        {/* --- Grid Layout --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Top 6 Metrics */}
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={twMerge(
                "relative flex flex-col items-center justify-center text-center p-10 md:p-12 h-[360px]",
                "bg-[#0d0d0d] rounded-2xl border border-white/10",
                "hover:bg-[#121212] transition-all duration-300",
                "border-t-[4px]",
                metric.borderColor,
                metric.shadowColor,
                "shadow-lg hover:shadow-xl hover:scale-[1.02]"
              )}
            >
              <div className="mb-7 opacity-90 p-4 bg-white/5 rounded-full">
                <metric.icon className={clsx("w-9 h-9", metric.color)} strokeWidth={1.5} />
              </div>

              <h3 className={clsx("text-7xl font-bold mb-5 tracking-tighter", metric.color)}>
                {metric.value}
              </h3>

              <h4 className="text-white font-bold text-xl mb-4">
                {metric.label}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed max-w-[300px] mx-auto">
                {metric.description}
              </p>
            </motion.div>
          ))}

          {/* Bottom Full-Width Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={clsx(
              "col-span-1 md:col-span-2 lg:col-span-3 w-full relative mt-8 md:mt-10",
              "bg-gradient-to-br from-[#0a1628] to-[#0d0d0d] rounded-3xl border-2 border-blue-900/30 p-14 md:p-20",
              "flex flex-col items-center justify-center text-center",
              "overflow-hidden group hover:border-blue-800/40 transition-all duration-300"
            )}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-800/10 to-transparent opacity-60 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
              <div className="mb-8 p-5 bg-blue-500/10 rounded-full">
                <TrendingDown className="w-14 h-14 text-blue-400" strokeWidth={2} />
              </div>
              
              <h3 className="text-8xl md:text-9xl font-bold text-blue-400 mb-8 tracking-tighter drop-shadow-2xl">
                50%
              </h3>
              
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
                Reduction in Bad Hires
              </h4>
              
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                <span className="text-gray-500"></span>AI skills assessment and matching improves hiring accuracy dramatically<span className="text-gray-500"></span>.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
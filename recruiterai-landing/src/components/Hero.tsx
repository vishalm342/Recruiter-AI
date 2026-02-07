"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const cards = [
    {
      initials: "SK",
      name: "Sarah K.",
      role: "Founder at TechStart",
      quote: "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.",
      color: "#A5D8FF",
      desktopPosition: "top-[12%] left-[2%] xl:top-[15%] xl:left-[8%]"
    },
    {
      initials: "RM",
      name: "Rahul M.",
      role: "Hiring Manager at GrowthCo",
      quote: "Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.",
      color: "#D0BCFF",
      desktopPosition: "top-[16%] right-[2%] xl:top-[18%] xl:right-[8%]"
    },
    {
      initials: "PS",
      name: "Priya S.",
      role: "CEO at InnovateLabs",
      quote: "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
      color: "#B197FC",
      desktopPosition: "bottom-[12%] left-[2%] xl:bottom-[15%] xl:left-[10%]"
    },
    {
      initials: "AT",
      name: "Amit T.",
      role: "Head of HR at ScaleUp",
      quote: "Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.",
      color: "#3B82F6",
      desktopPosition: "bottom-[16%] right-[2%] xl:bottom-[18%] xl:right-[12%]"
    }
  ];

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden bg-black pt-28 pb-12 md:pt-0">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(59,130,246,0.15),transparent)]" />
      </div>

      {/* Main Content (Centered) */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white drop-shadow-2xl">
          Every Hire, <br className="hidden md:block" />
          <span className="text-[#3B82F6]">Faster and Better</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-[#3B82F6] text-white text-base md:text-lg font-semibold px-8 py-3.5 rounded-xl hover:bg-[#2563EB] transition-all shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95">
            Start Hiring Smarter
          </button>
          
          <button className="bg-transparent border border-white/20 text-white text-base md:text-lg font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105 active:scale-95">
            See How It Works
          </button>
        </div>

        {/* MOBILE ONLY: Stacked Cards (< 1024px) */}
        <div className="mt-16 grid grid-cols-1 gap-4 w-full max-w-md lg:hidden text-left">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#111] border border-white/10 p-5 rounded-2xl flex gap-4 items-start shadow-lg">
               <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-black shadow-inner" style={{ backgroundColor: card.color }}>
                  {card.initials}
               </div>
               <div>
                  <p className="text-xs text-gray-400 mb-1 font-semibold tracking-wide">{card.name} • {card.role}</p>
                  <p className="text-sm text-gray-200 italic leading-snug">"{card.quote}"</p>
               </div>
            </div>
          ))}
        </div>

      </div>

      {/* DESKTOP ONLY: Floating Cards (>= 1024px) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] // Floating Animation: Up 15px then down
            }}
            transition={{ 
              opacity: { delay: 0.5 + (i * 0.1), duration: 0.5 },
              scale: { delay: 0.5 + (i * 0.1), duration: 0.5 },
              y: { 
                duration: 4, // 4 seconds per float cycle
                repeat: Infinity, // Loop forever
                ease: "easeInOut", // Smooth sine wave motion
                delay: i * 1.5 // Stagger the float so they don't move in unison
              }
            }}
            className={`absolute ${card.desktopPosition} w-80 lg:scale-90 xl:scale-100 origin-center`}
          >
            <div className="bg-[#111]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl hover:border-white/20 transition-all hover:scale-[1.02] cursor-default">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-black shadow-lg" style={{ backgroundColor: card.color }}>
                  {card.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{card.name}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{card.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">"{card.quote}"</p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
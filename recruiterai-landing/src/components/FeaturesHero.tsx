"use client";

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- 1. Reusable Components ---

const Node = ({ 
  children, 
  variant = "default", 
  className 
}: { 
  children: React.ReactNode; 
  variant?: "default" | "primary" | "success" | "danger" | "neutral"; 
  className?: string; 
}) => {
  const styles = {
    default: "bg-[#1A1A1A] border border-white/10 text-gray-300",
    primary: "bg-[#3B82F6] border border-blue-400 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    success: "bg-[#064e3b] border border-emerald-500/50 text-emerald-100",
    danger: "bg-[#450a0a] border border-red-500/50 text-red-100",
    neutral: "bg-[#262626] border border-white/5 text-gray-400 text-[10px] uppercase tracking-wider font-bold",
  };

  return (
    <div className={twMerge(
      "relative z-10 w-full rounded-lg px-2 py-3 text-center text-xs md:text-sm transition-transform hover:scale-[1.01] flex items-center justify-center min-h-[40px]",
      styles[variant as keyof typeof styles],
      className
    )}>
      {children}
    </div>
  );
};

const Connector = ({ height = "h-6" }: { height?: string }) => (
  <div className={clsx("w-[2px] bg-[#333] mx-auto", height)} />
);

const Diamond = ({ label }: { label: React.ReactNode }) => (
  <div className="relative flex justify-center py-2 my-1">
    <div className="relative z-10 flex h-16 w-16 items-center justify-center bg-[#111] border border-[#444] rotate-45 transform shadow-lg">
      <div className="-rotate-45 transform text-center text-[9px] font-bold leading-tight text-white uppercase select-none">
        {label}
      </div>
    </div>
    <div className="absolute inset-0 flex justify-center">
      <div className="w-[2px] h-full bg-[#333]" />
    </div>
  </div>
);

const Branch = ({ leftLabel, rightLabel, leftContent, rightContent }: any) => (
  <div className="relative w-full flex justify-center">
    <div className="flex w-full">
      {/* Left Column (50%) */}
      <div className="w-1/2 flex flex-col items-center relative">
         <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-[#333]" />
         <div className="h-6 w-[2px] bg-[#333]" />
         <span className="mb-2 text-[9px] font-bold text-emerald-500 bg-[#111] px-1 rounded border border-emerald-500/20 z-20">
            {leftLabel}
         </span>
         <div className="w-[95%]">
            {leftContent}
         </div>
      </div>
      {/* Right Column (50%) */}
      <div className="w-1/2 flex flex-col items-center relative">
         <div className="absolute top-0 left-0 w-1/2 h-[2px] bg-[#333]" />
         <div className="h-6 w-[2px] bg-[#333]" />
         <span className="mb-2 text-[9px] font-bold text-red-500 bg-[#111] px-1 rounded border border-red-500/20 z-20">
            {rightLabel}
         </span>
         <div className="w-[95%]">
            {rightContent}
         </div>
      </div>
    </div>
  </div>
);

// --- Main Component ---

export default function FeaturesHero() {
  return (
    <section className="w-full bg-[#0a0a0a] border-t border-white/5 py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            AI Recruiting Software That Works <br className="hidden lg:block"/>
            Like Your Own HR Team
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Build custom hiring workflows in minutes. No coding required.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
{/* === CARD 1: SCREENING === */}
          <div className="flex flex-col h-full bg-[#111] rounded-2xl border border-white/10 p-5 shadow-2xl">
            <h3 className="mb-6 text-base font-bold text-white border-b border-white/10 pb-4 text-center tracking-wide">AUTOMATED SCREENING</h3>
            
            <div className="flex flex-col items-center flex-1 w-full">
              <Node variant="neutral">New Application Received</Node>
              <Connector />
              <Node variant="primary">AI Resume Screening <br/><span className="text-[10px] font-normal opacity-90">Ranks top 20%</span></Node>
              <Connector />
              <Node>Auto-send screening questions</Node>
              <Connector />
              <Diamond label={<>SCORE<br/>&gt; 75%?</>} />
              
              <Branch 
                leftLabel="YES"
                leftContent={<Node variant="success" className="text-[10px]">Auto-schedule interview</Node>}
                rightLabel="NO"
                rightContent={<Node variant="danger" className="text-[10px]">Send thank you email</Node>}
              />

              {/* FIX: Aligned to Left (YES path), Green, and Connected */}
              <div className="w-full flex">
                 <div className="w-1/2 flex flex-col items-center">
                    <Connector />
                    <Node variant="success" className="text-[10px] w-[95%] py-2">Remind 24h before</Node>
                 </div>
                 <div className="w-1/2" />
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <div className="w-full rounded bg-[#A5D8FF]/10 border border-[#A5D8FF]/30 p-3 text-center">
                <p className="text-xs font-bold text-[#A5D8FF]">
                  Screen 250+ applications in minutes
                </p>
              </div>
            </div>
          </div>

          {/* === CARD 2: INTERVIEW === */}
          <div className="flex flex-col h-full bg-[#111] rounded-2xl border border-white/10 p-5 shadow-2xl">
            <h3 className="mb-6 text-base font-bold text-white border-b border-white/10 pb-4 text-center tracking-wide">INTERVIEW AUTOMATION</h3>
            
            <div className="flex flex-col items-center flex-1 w-full">
              <Node variant="neutral">Invite Accepted</Node>
              <Connector />
              <Node variant="primary">AI Video Interview <br/><span className="text-[10px] font-normal opacity-90">Technical</span></Node>
              <Connector />
              <Node>AI scores responses</Node>
              <Connector />
              <Diamond label={<>SCORE<br/>&gt; 80%?</>} />
              
              <Branch 
                leftLabel="YES"
                leftContent={<Node variant="success" className="text-[10px]">Auto-schedule Round 2</Node>}
                rightLabel="NO"
                rightContent={<Node variant="danger" className="text-[10px]">Auto-rejection email</Node>}
              />
               
               {/* FIX: Nested Logic constrained to LEFT side (50%) */}
               <div className="w-full flex">
                  {/* Left Column (Active Path) */}
                  <div className="w-1/2 flex flex-col items-center">
                      <Connector />
                      <Node variant="neutral" className="w-[90%] text-[10px]">Hiring Manager Decision</Node>
                      <Connector />
                      <Diamond label="HIRE?" />
                      
                      {/* Mini Branch inside Left Column */}
                      <div className="w-full flex relative mt-0">
                          <div className="w-1/2 flex flex-col items-center relative">
                              <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-[#333]" />
                              <div className="h-4 w-[2px] bg-[#333]" />
                              <span className="text-[8px] font-bold text-emerald-500 mb-1">YES</span>
                              <Node variant="success" className="text-[9px] w-[95%] py-1 px-1">Offer + Kit</Node>
                          </div>
                          <div className="w-1/2 flex flex-col items-center relative">
                              <div className="absolute top-0 left-0 w-1/2 h-[2px] bg-[#333]" />
                              <div className="h-4 w-[2px] bg-[#333]" />
                              <span className="text-[8px] font-bold text-red-500 mb-1">NO</span>
                              <Node variant="danger" className="text-[9px] w-[95%] py-1 px-1">Reject</Node>
                          </div>
                      </div>
                  </div>
                  
                  {/* Right Column (Empty to keep alignment correct) */}
                  <div className="w-1/2" />
               </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <div className="w-full rounded bg-[#D0BCFF]/10 border border-[#D0BCFF]/30 p-3 text-center">
                <p className="text-xs font-bold text-[#D0BCFF]">
                  Reduce time-to-hire by 70%
                </p>
              </div>
            </div>
          </div>

          {/* === CARD 3: NURTURING === */}
          <div className="flex flex-col h-full bg-[#111] rounded-2xl border border-white/10 p-5 shadow-2xl">
            <h3 className="mb-6 text-base font-bold text-white border-b border-white/10 pb-4 text-center tracking-wide">CANDIDATE NURTURING</h3>
            
            <div className="flex flex-col items-center flex-1 w-full">
              <Node variant="neutral">Rejected (60-74%)</Node>
              <Connector />
              <Node variant="primary">Add to 'Future Talent' DB</Node>
              <Connector />
              <Node>Wait 3 Months</Node>
              <Connector />
              <Diamond label={<>NEW ROLE<br/>OPEN?</>} />
              
              <Branch 
                leftLabel="YES"
                leftContent={<Node variant="success" className="text-[10px]">Send re-engagement email</Node>}
                rightLabel="NO"
                rightContent={<Node variant="neutral" className="text-[10px]">Check next quarter</Node>}
              />
              
              {/* FIX: Nested Logic constrained to LEFT side (50%) */}
              <div className="w-full flex">
                  {/* Left Column (Active Path) */}
                  <div className="w-1/2 flex flex-col items-center">
                      <Connector />
                      <Diamond label="INTEREST?" />
                      
                      {/* Mini Branch inside Left Column */}
                      <div className="w-full flex relative mt-0">
                          <div className="w-1/2 flex flex-col items-center relative">
                              <div className="absolute top-0 right-0 w-1/2 h-[2px] bg-[#333]" />
                              <div className="h-4 w-[2px] bg-[#333]" />
                              <span className="text-[8px] font-bold text-emerald-500 mb-1">YES</span>
                              <Node variant="success" className="text-[9px] w-[95%] py-1 px-1">Fast-track</Node>
                          </div>
                          <div className="w-1/2 flex flex-col items-center relative">
                              <div className="absolute top-0 left-0 w-1/2 h-[2px] bg-[#333]" />
                              <div className="h-4 w-[2px] bg-[#333]" />
                              <span className="text-[8px] font-bold text-gray-500 mb-1">NO</span>
                              <Node variant="neutral" className="text-[9px] w-[95%] py-1 px-1">Keep in Pool</Node>
                          </div>
                      </div>
                  </div>

                  {/* Right Column (Empty) */}
                  <div className="w-1/2" />
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <div className="w-full rounded bg-[#B197FC]/10 border border-[#B197FC]/30 p-3 text-center">
                <p className="text-xs font-bold text-[#B197FC]">
                  Build pipelines automatically
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
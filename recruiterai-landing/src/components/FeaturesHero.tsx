"use client";

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Reusable Components ---

const Node = ({ 
  children, 
  variant = "default", 
  className 
}: { 
  children: React.ReactNode; 
  variant?: "default" | "primary" | "success" | "danger" | "neutral" | "highlight"; 
  className?: string; 
}) => {
  const styles = {
    default: "bg-[#1A1A1A] border border-white/10 text-gray-300",
    primary: "bg-[#3B82F6] border border-blue-400 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    success: "bg-[#064e3b] border border-emerald-500/50 text-emerald-100",
    danger: "bg-[#450a0a] border border-red-500/50 text-red-100",
    neutral: "bg-[#262626] border border-white/5 text-gray-400 text-[10px] uppercase tracking-wider font-bold",
    highlight: "bg-[#2563EB] text-white font-semibold",
  };

  return (
    <div className={twMerge(
      "relative z-10 w-full rounded-xl px-4 py-3.5 text-center text-xs md:text-sm transition-transform hover:scale-[1.01]",
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
  <div className="relative flex justify-center py-4">
    <div className="relative z-10 flex h-20 w-20 items-center justify-center bg-[#111] border-2 border-[#444] rotate-45 transform">
      <div className="-rotate-45 transform text-center text-[10px] font-bold leading-tight text-white uppercase px-2">
        {label}
      </div>
    </div>
    {/* Vertical line passing through - spans full height to connect top and bottom */}
    <div className="absolute inset-0 flex justify-center -z-0">
      <div className="w-[2px] h-full bg-[#333]" />
    </div>
  </div>
);

interface BranchProps {
  leftLabel: string;
  rightLabel: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftColor?: "green" | "red" | "gray";
  rightColor?: "green" | "red" | "gray";
}

const Branch = ({ 
  leftLabel, 
  rightLabel, 
  leftContent, 
  rightContent,
  leftColor = "green",
  rightColor = "red"
}: BranchProps) => {
  
  // Helper to get color classes
  const getColorClasses = (color: string) => {
    switch (color) {
      case "green": return { text: "text-emerald-500", border: "border-t-emerald-500" };
      case "red": return { text: "text-red-500", border: "border-t-red-500" };
      case "gray": return { text: "text-gray-500", border: "border-t-gray-500" };
      default: return { text: "text-gray-500", border: "border-t-gray-500" };
    }
  };

  const leftStyle = getColorClasses(leftColor);
  const rightStyle = getColorClasses(rightColor);

  return (
    <div className="relative w-full">
      {/* Horizontal connecting line - Perfectly centered between the two branches */}
      {/* Spans from 25% (center of left col) to 75% (center of right col) */}
      <div className="absolute top-0 h-[2px] bg-[#333]" style={{ left: '25%', width: '50%' }} />
      
      <div className="flex w-full justify-between gap-2 lg:gap-4">
        {/* Left Branch */}
        <div className="flex flex-1 flex-col items-center">
          {/* Vertical line connecting to horizontal split */}
          <div className="h-8 w-[2px] bg-[#333]" />
          
          {/* Arrowhead */}
          <div className={clsx("w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent mb-2", leftStyle.border)} />
          
          {/* Label */}
          <span className={clsx("mb-2 text-[10px] font-bold", leftStyle.text)}>{leftLabel}</span>
          
          {/* Content */}
          {leftContent}
        </div>

        {/* Right Branch */}
        <div className="flex flex-1 flex-col items-center">
          {/* Vertical line connecting to horizontal split */}
          <div className="h-8 w-[2px] bg-[#333]" />
          
          {/* Arrowhead */}
          <div className={clsx("w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent mb-2", rightStyle.border)} />
          
          {/* Label */}
          <span className={clsx("mb-2 text-[10px] font-bold", rightStyle.text)}>{rightLabel}</span>
          
          {/* Content */}
          {rightContent}
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function FeaturesHero() {
  return (
    <section className="bg-black pt-24 md:pt-32 lg:pt-40 pb-20 md:pb-28 lg:pb-36 px-4 md:px-6 lg:px-8 overflow-hidden w-full flex flex-col items-center">
      
      {/* Header */}
      <div className="w-full max-w-4xl text-center mb-16 md:mb-20 lg:mb-24 mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 md:mb-7">
          AI Recruiting Software That Works <br className="hidden md:block"/>
          Like Your Own HR Team
        </h2>
        <p className="text-[#999] text-base md:text-lg max-w-2xl">
          Build custom hiring workflows in minutes. No coding required.
        </p>
      </div>

      {/* Flowcharts Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
        
        {/* === CARD 1: AI RESUME SCREENING === */}
        <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-9 shadow-2xl h-full">
          <h3 className="mb-10 text-lg md:text-xl font-bold text-white pl-2">AI Resume Screening</h3>
          
          <div className="flex flex-col items-center space-y-0 flex-1 w-full">
            <Node variant="neutral">New Application Received</Node>
            <Connector height="h-8" />
            <Node variant="primary">AI Resume Screening <br/><span className="text-[10px] font-normal opacity-90">Ranks top 20% of candidates</span></Node>
            <Connector height="h-7" />
            <Node>Auto-send screening questions via email to qualified candidates</Node>
            <Connector height="h-8" />
            
            <Diamond label={<>QUALIFICATION<br/>SCORE &gt; 75%?</>} />
            
            <Branch 
              leftLabel="YES"
              leftContent={
                <>
                  <Node variant="success" className="text-[11px] py-3.5">Auto-schedule interview via calendar link</Node>
                  <Connector height="h-6" />
                  <Node className="text-[11px] py-3">Send reminder 24 hours before interview</Node>
                </>
              }
              rightLabel="NO"
              rightContent={<Node variant="danger" className="text-[11px] py-3.5">Send thank you email + Keep in talent pool for future</Node>}
            />
          </div>

          <div className="mt-12 w-full rounded-2xl bg-[#A5D8FF] p-5 md:p-6 text-center shadow-lg">
            <p className="text-sm md:text-base font-bold text-black leading-snug">
              Screen 250+ applications in minutes vs. 8 hours manually
            </p>
          </div>
        </div>

        {/* === CARD 2: INTERVIEW PROCESS AUTOMATION === */}
        <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-9 shadow-2xl h-full">
          <h3 className="mb-10 text-lg md:text-xl font-bold text-white pl-2">Interview Process Automation</h3>
          
          <div className="flex flex-col items-center space-y-0 flex-1 w-full">
            <Node variant="neutral">Invite Accepted</Node>
            <Connector height="h-8" />
            <Node variant="primary">AI VIDEO INTERVIEW <br/><span className="text-[10px] font-normal opacity-90">Technical screening with AI assessment</span></Node>
            <Connector height="h-7" />
            <Node>AI scores responses using custom rubric</Node>
            <Connector height="h-8" />
            
            <Diamond label={<>SCORE<br/>&gt; 80%?</>} />
            
            <Branch 
              leftLabel="YES"
              leftContent={
                <div className="flex flex-col items-center w-full">
                  <Node variant="success" className="text-[11px] py-3.5">Auto-schedule Round 2</Node>
                  <Connector height="h-6" />
                  <Node className="text-[11px] py-3 bg-[#1f1f1f]">Hiring manager interview & decision</Node>
                  <Connector height="h-6" />
                  
                  {/* Nested Decision */}
                  <Diamond label={<>DECISION:<br/>HIRE OR<br/>REJECT?</>} />
                  <Branch 
                    leftLabel="YES"
                    leftContent={
                      <div className="bg-emerald-900/40 border border-emerald-500/30 text-emerald-100 text-[9px] p-2 rounded-lg w-full text-center">
                        HIRE: Send offer + Welcome kit
                      </div>
                    }
                    rightLabel="NO"
                    rightContent={
                      <div className="bg-red-900/40 border border-red-500/30 text-red-100 text-[9px] p-2 rounded-lg w-full text-center">
                        REJECT: Personalized rejection
                      </div>
                    }
                  />
                </div>
              }
              rightLabel="NO"
              rightContent={<Node variant="danger" className="text-[11px] py-3.5">Auto-rejection with feedback</Node>}
            />
          </div>

          <div className="mt-12 w-full rounded-2xl bg-[#D0BCFF] p-5 md:p-6 text-center shadow-lg">
            <p className="text-sm md:text-base font-bold text-black leading-snug">
              Reduce time-to-hire from 42 days to 12 days
            </p>
          </div>
        </div>

        {/* === CARD 3: PASSIVE CANDIDATE NURTURING === */}
        <div className="flex flex-col rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-9 shadow-2xl h-full">
          <h3 className="mb-10 text-lg md:text-xl font-bold text-white pl-2">Passive Candidate Nurturing</h3>
          
          <div className="flex flex-col items-center space-y-0 flex-1 w-full">
            <Node variant="neutral">Candidate rejected but scored 60-74%</Node>
            <Connector height="h-8" />
            <Node variant="primary">FUTURE TALENT DB <br/><span className="text-[10px] font-normal opacity-90">for long-term nurturing</span></Node>
            <Connector height="h-7" />
            <Node>Wait 3 months - Automated patience period</Node>
            <Connector height="h-8" />
            
            <Diamond label={<>NEW ROLE<br/>OPEN?</>} />
            
            <Branch 
              leftLabel="YES"
              leftContent={
                <div className="flex flex-col items-center w-full">
                  <Node variant="success" className="text-[11px] py-3.5">AI sends re-engagement email</Node>
                  <Connector height="h-6" />
                  
                  {/* Nested Decision */}
                  <Diamond label={<>INTERESTED<br/>IN APPLYING?</>} />
                  <Branch 
                    leftLabel="YES"
                    rightLabel="NO"
                    rightColor="gray" /* Custom color for 'No Response' path */
                    leftContent={
                      <div className="bg-emerald-900/40 border border-emerald-500/30 text-emerald-100 text-[9px] p-2 rounded-lg w-full text-center">
                         Fast-track to interview
                      </div>
                    }
                    rightContent={
                      <div className="bg-gray-800/60 border border-gray-600/30 text-gray-400 text-[9px] p-2 rounded-lg w-full text-center">
                        Continue in pool
                      </div>
                    }
                  />
                </div>
              }
              rightLabel="NO"
              rightColor="gray" /* Custom color for initial No path */
              rightContent={<Node variant="neutral" className="text-[11px] py-3.5">Check again next quarter</Node>}
            />
          </div>

          <div className="mt-12 w-full rounded-2xl bg-[#B197FC] p-5 md:p-6 text-center shadow-lg">
            <p className="text-sm md:text-base font-bold text-black leading-snug">
              Build a qualified talent pipeline automatically
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
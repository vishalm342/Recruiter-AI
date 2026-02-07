"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

// --- FAQ Data (From Prompt 7) ---
const FAQS = [
  {
    id: 1,
    question: "How does AI screening work?",
    answer: "Our AI analyzes resumes against your specific job descriptions, ranking candidates based on skills, experience match, and semantic relevance—not just keywords. The system uses natural language processing to understand context and evaluates candidates holistically, considering both hard skills and cultural fit indicators. You can customize scoring criteria to match your exact hiring needs."
  },
  {
    id: 2,
    question: "Does RecruiterAI integrate with our existing ATS?",
    answer: "Yes, we provide seamless 2-way sync with major ATS platforms including Greenhouse, Lever, Workable, and Ashby. All candidate data, interview notes, and hiring decisions automatically flow between systems in real-time. If you're using a custom ATS, our API allows easy integration with full documentation and developer support."
  },
  {
    id: 3,
    question: "What's the pricing structure?",
    answer: "We offer flexible monthly plans starting at $199/month for startups (up to 50 active jobs), with scaling tiers for growing companies. Enterprise plans include custom pricing based on volume, dedicated support, and advanced features like custom AI training. All plans include unlimited AI screening, automated scheduling, and integrations."
  },
  {
    id: 4,
    question: "How long does setup take?",
    answer: "You can be up and running in less than 10 minutes. Simply connect your email and calendar (we support Google Workspace, Microsoft 365, and others), paste in your job descriptions, and the AI starts screening immediately. Most teams complete their first automated interview within 24 hours."
  },
  {
    id: 5,
    question: "Is candidate data secure?",
    answer: "Absolutely. We are SOC 2 Type II compliant and encrypt all candidate data both at rest (AES-256) and in transit (TLS 1.3). All data is stored in secure AWS data centers with regular security audits. We're fully GDPR and CCPA compliant, giving candidates full control over their data."
  }
];

export default function FAQSection() {
  // State to track which item is open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[var(--color-dark-bg)] py-32 px-6 flex flex-col items-center border-t border-white/5">
      
      {/* 1. Section Header */}
      <div className="relative z-10 w-full max-w-4xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-[var(--color-dark-text)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about the RecruiterAI platform.
        </p>
      </div>

      {/* 2. Accordion Container */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={faq.id}
              initial={false}
              className={clsx(
                "rounded-xl border transition-all duration-300 overflow-hidden",
                isOpen 
                  ? "bg-[#1A1A1A] border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
                  : "bg-[#111] border-white/5 hover:bg-[#161616] hover:border-white/10"
              )}
            >
              {/* Question Header (Clickable) */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:px-8 text-left focus:outline-none"
              >
                <span className={clsx(
                  "text-lg font-semibold transition-colors duration-300",
                  isOpen ? "text-blue-400" : "text-white"
                )}>
                  {faq.question}
                </span>
                
                <ChevronDown 
                  className={clsx(
                    "w-5 h-5 transition-transform duration-300",
                    isOpen ? "text-blue-400 rotate-180" : "text-gray-500"
                  )} 
                />
              </button>

              {/* Answer Panel (Animated) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-8">
                      <p className="text-gray-400 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* 3. Footer / Support Link (Optional polish) */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Still have questions?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-400 underline decoration-blue-500/30 underline-offset-4 transition-colors">
            Contact our support team
          </a>
        </p>
      </div>

    </section>
  );
}
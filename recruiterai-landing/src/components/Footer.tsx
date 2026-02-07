"use client";

import React from "react";
import { Sparkles, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-xl font-bold text-white">RecruiterAI</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Automating the hiring process for modern teams. Hire faster, better, and smarter with AI.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#3B82F6] transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 RecruiterAI Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" aria-label="GitHub" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
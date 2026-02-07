import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Load the Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Defines the CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "RecruiterAI - Every Hire, Faster and Better",
  description: "Automate your hiring workflow with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}> 
      {/* 2. Apply the variable to HTML and force font-sans on Body */}
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
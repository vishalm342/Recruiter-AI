import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import FeaturesHero from "../src/components/FeaturesHero";
import ImpactSection from "@/src/components/ImpactSection"; 
import IntegrationSection from "@/src/components/IntegrationSection";
import TestimonialsSection from "@/src/components/Testimonial";
import FAQSection from "@/src/components/FAQSection";
import FinalCTA from "@/src/components/FinalCTA";
import Footer from "@/src/components/Footer";
// import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
 
      <div className="flex flex-col">
        <Hero />
        <FeaturesHero />
        <ImpactSection />
        <IntegrationSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
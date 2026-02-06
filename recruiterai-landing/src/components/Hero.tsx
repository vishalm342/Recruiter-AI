"use client";

export default function Hero() {
  const cards = [
    {
      initials: "SK",
      name: "Sarah K.",
      role: "Founder at TechStart",
      quote: "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.",
      color: "#A5D8FF",
      position: "top-28 left-12"
    },
    {
      initials: "RM",
      name: "Rahul M.",
      role: "Hiring Manager at GrowthCo",
      quote: "Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.",
      color: "#D0BCFF",
      position: "top-28 right-12"
    },
    {
      initials: "PS",
      name: "Priya S.",
      role: "CEO at InnovateLabs",
      quote: "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
      color: "#B197FC",
      position: "bottom-28 left-12"
    },
    {
      initials: "AT",
      name: "Amit T.",
      role: "Head of HR at ScaleUp",
      quote: "Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.",
      color: "#3B82F6",
      position: "bottom-28 right-12"
    }
  ];

  return (
    <section className="relative h-screen overflow-hidden pt-16">
      
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(59, 130, 246, 0.15), transparent)'
          }}
        />
      </div>

      {/* Desktop Cards */}
      {cards.map((card) => (
        <div key={card.initials} className={`hidden lg:block absolute ${card.position} w-80 z-10`}>
          <div 
            className="bg-[#1a1a1a] rounded-2xl p-5 border-2"
            style={{ borderColor: card.color }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-sm"
                style={{ backgroundColor: card.color }}
              >
                {card.initials}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: card.color }}>
                  {card.name}
                </p>
                <p className="text-xs text-gray-500">{card.role}</p>
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed">"{card.quote}"</p>
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center px-6 max-w-4xl">
          
          <h1 className="text-7xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
            <span className="text-white block">Every Hire,</span>
            <span className="text-[#3B82F6] block">Faster and Better</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="bg-[#3B82F6] text-white text-base font-semibold px-7 py-3 rounded-lg hover:bg-[#5B9EF8] transition-all w-full sm:w-auto">
              Start Hiring Smarter
            </button>
            <button className="border border-gray-600 text-white text-base font-normal px-7 py-3 rounded-lg hover:border-gray-400 transition-all w-full sm:w-auto">
              See How It Works
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden px-4 pt-[70vh] pb-16 space-y-4 relative z-10">
        {cards.map((card) => (
          <div 
            key={card.initials}
            className="bg-[#1a1a1a] rounded-2xl p-5 border-2"
            style={{ borderColor: card.color }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-sm"
                style={{ backgroundColor: card.color }}
              >
                {card.initials}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: card.color }}>
                  {card.name}
                </p>
                <p className="text-xs text-gray-500">{card.role}</p>
              </div>
            </div>
            <p className="text-white text-sm leading-relaxed">"{card.quote}"</p>
          </div>
        ))}
      </div>

    </section>
  );
}
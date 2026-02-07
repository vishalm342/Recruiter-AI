# RecruiterAI - AI-Powered Hiring Automation


[cite_start]This is a conversion-focused landing page built for the **OneSol AI Labs Founder Intern Assessment** [cite: 1-3]. It demonstrates a modern, high-performance SaaS interface for an AI recruiting platform.

## 🚀 Live Demo

**[View Live Deployment Here](https://recruiter-ai-theta.vercel.app/)**

## 🛠️ Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Language:** TypeScript
* **Deployment:** Vercel

## ✨ Key Features

* **Responsive Hero Section:** Features floating testimonials with complex positioning and backdrop blurs.
* **Interactive Flowcharts:** visualizations of AI screening, interviewing, and nurturing workflows using CSS grid and Flexbox layouts.
* **Animated Metrics:** High-impact stat cards with gradient borders and hover effects.
* **Infinite Logo Slider:** A seamless, auto-scrolling integration marquee.
* **Dark Mode UI:** A "Linear-style" professional dark theme using specific hex codes (`#000000`, `#404040`, `#3B82F6`) as per brand guidelines.

## 🏃‍♂️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/recruiterai-landing.git](https://github.com/yourusername/recruiterai-landing.git)
    cd recruiterai-landing
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Reference

* **Figma File:** [https://www.figma.com/design/pVQSWa6hUmLCQkqkuBAFOs/Recruiter-AI?node-id=0-1&t=LgCz7u94veaM0K2N-1]
* **Assessment Context:** Designed based on the OneSol AI Labs prompt to solve recruiting pain points through AI automation.

## 📂 Project Structure

```bash
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Inter font configuration & global metadata
│   │   └── page.tsx      # Main landing page composition
│   ├── components/
│   │   ├── Hero.tsx      # Main hook & floating bubbles
│   │   ├── FeaturesHero.tsx # Automation flowcharts
│   │   ├── ImpactSection.tsx # Performance metrics
│   │   ├── IntegrationSection.tsx # Infinite logo slider
│   │   ├── Testimonials.tsx # Social proof
│   │   ├── FAQSection.tsx   # Accordion FAQs
│   │   └── FinalCTA.tsx     # Trial conversion section
│   └── globals.css       # Tailwind v4 imports & variables
├── tailwind.config.js    # Custom color palette configuration
└── public/               # Static assets

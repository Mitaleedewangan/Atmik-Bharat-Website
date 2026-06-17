



import  { useState } from 'react';

const TechStack = () => {
  // एक्टिव टैब को मैनेज करने के लिए स्टेट
  const [activeTab, setActiveTab] = useState(0);

  // अपग्रेडेड टेक्नोलॉजी डेटा (कैटेगरी, डिस्क्रिप्शन और टूल्स के साथ)
  const techData = [
    {
      category: "Frontend & Mobile",
      desc: "Creating seamless user interfaces and high-performance cross-platform mobile experiences.",
      techs: [
        { name: "React.js", desc: "Web Apps" },
        { name: "Next.js", desc: "SSR & SEO" },
        { name: "Tailwind CSS", desc: "Modern UI" },
        { name: "TypeScript", desc: "Type Safety" },
        { name: "Flutter", desc: "Cross-Platform" },
        { name: "React Native", desc: "Native Apps" }
      ]
    },
    {
      category: "Backend & DB",
      desc: "Powering applications with secure, robust architectures and highly optimized databases.",
      techs: [
        { name: "Node.js", desc: "Runtime Engine" },
        { name: "Express", desc: "REST APIs" },
        { name: "Python", desc: "Backend/Data" },
        { name: "FastAPI", desc: "High Performance" },
        { name: "MongoDB", desc: "NoSQL Database" },
        { name: "PostgreSQL", desc: "Relational DB" }
      ]
    },
    {
      category: "Cloud & DevOps",
      desc: "Ensuring 99.9% uptime with reliable cloud infrastructure and automated deployment pipelines.",
      techs: [
        { name: "AWS", desc: "Cloud Hosting" },
        { name: "Docker", desc: "Containerization" },
        { name: "GitHub Actions", desc: "CI/CD Automation" },
        { name: "Cloudflare", desc: "Security & CDN" },
        { name: "Vercel", desc: "Fast Deployment" },
        { name: "Linux Server", desc: "Core Infra" }
      ]
    },
    {
      category: "AI & Deep Tech",
      desc: "Integrating intelligent machine learning models and smart workflows to automate operations.",
      techs: [
        { name: "OpenAI API", desc: "LLM Systems" },
        { name: "LangChain", desc: "AI Workflows" },
        { name: "NLP Models", desc: "Chatbots" },
        { name: "Automation Bots", desc: "Smart Scripts" },
        { name: "TensorFlow", desc: "Predictive ML" },
        { name: "Vector DB", desc: "AI Memory" }
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/40 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#0B4884] font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Our Core Engine
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#16365F] leading-[1.2]">
            Modern Tech Stack We Trust
          </h2>
          <p className="text-base text-slate-500 font-normal leading-relaxed">
            We don't just write code; we choose the right architectural tools to make your business platform bulletproof.
          </p>
        </div>

        {/* MODERN TAB SWITCHER BUTTONS */}
        <div className="flex flex-wrap justify-center bg-[#F8FAFC] p-1.5 rounded-2xl border border-slate-100/80 max-w-3xl mx-auto mb-12 gap-1 sm:gap-0">
          {techData.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 min-w-[140px] py-3 px-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === idx
                  ? "bg-[#0B4884] text-white shadow-md shadow-blue-900/10"
                  : "text-slate-500 hover:text-[#0B4884] hover:bg-slate-50"
              }`}
            >
              {tab.category}
            </button>
          ))}
        </div>

        {/* ACTIVE TAB CONTENT DISPLAY CONTAINER */}
        <div className="bg-[#F8FAFC] rounded-[28px] p-6 sm:p-10 border border-slate-100/60 shadow-inner grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-500">
          
          {/* Left Area: Tab Meta Information (4 Columns) */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <h3 className="text-xl font-extrabold text-[#16365F]">
              {techData[activeTab].category}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              {techData[activeTab].desc}
            </p>
            <div className="w-12 h-[3px] bg-[#0B4884] rounded-full pt-1 opacity-60" />
          </div>

          {/* Right Area: Interactive Technology Grid Cards (8 Columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {techData[activeTab].techs.map((tech, tIdx) => (
              <div
                key={tIdx}
                className="bg-white rounded-xl p-4 border border-slate-200/40 shadow-sm flex items-center gap-3.5 hover:border-blue-200 hover:shadow-md transition-all duration-300 group text-left transform hover:-translate-y-0.5"
              >
                {/* Tech Mini Code Tag Visual Indicator Icon */}
                <div className="w-9 h-9 bg-blue-50 text-[#0B4884] font-mono text-xs font-bold rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#0B4884] group-hover:text-white transition-colors">
                  &lt;/&gt;
                </div>
                
                {/* Tech Meta Data */}
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-[#16365F] tracking-tight truncate">
                    {tech.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium truncate mt-0.5">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechStack;
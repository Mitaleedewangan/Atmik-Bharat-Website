

const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Consultation",
      hindiTitle: "आईडिया डिस्कशन",
      desc: "We discuss your business ideas, requirements, and challenges to align on a perfect strategy.",
      icon: "💬",
      bgColor: "bg-blue-50 text-blue-600"
    },
    {
      num: "02",
      title: "Planning & Architecture",
      hindiTitle: "ब्लूप्रिंट और डिज़ाइन",
      desc: "Creating technical roadmaps, database design, wireframes, and UI/UX prototypes before coding.",
      icon: "📋",
      bgColor: "bg-indigo-50 text-indigo-600"
    },
    {
      num: "03",
      title: "Development & Testing",
      hindiTitle: "कोडिंग और टेस्टिंग",
      desc: "Writing clean, scalable code followed by rigorous testing to ensure a bug-free experience.",
      icon: "⚙️",
      bgColor: "bg-sky-50 text-sky-600"
    },
    {
      num: "04",
      title: "Deployment & Support",
      hindiTitle: "लाइव लॉन्च और सपोर्ट",
      desc: "Launching your project securely onto the cloud and providing consistent maintenance and updates.",
      icon: "🚀",
      bgColor: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section className="w-full bg-[#EDF4F9]/40 py-20 px-6 lg:px-8 font-sans relative">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#0B4884] font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#16365F] leading-[1.2]">
            Simple 4-Step Process
          </h2>
          <p className="text-base text-slate-500 font-normal">
            Our transparent implementation workflow keeps your project structured from idea to launch.
          </p>
        </div>

        {/* PROCESS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative hover:shadow-xl hover:border-blue-200 transition-all duration-300 group text-left flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-slate-100 group-hover:text-blue-100/80 transition-colors tracking-tight">
                    {step.num}
                  </span>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${step.bgColor}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#16365F] mb-1 group-hover:text-[#0B4884] transition-colors">
                  {step.title}
                </h3>
                {/* <span className="text-[11px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 inline-block mb-3">
                  {step.hindiTitle}
                </span> */}
                <p className="text-sm text-slate-500 font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Decorative accent dot */}
              <div className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-[#0B4884] mt-6 rounded-full transition-colors" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
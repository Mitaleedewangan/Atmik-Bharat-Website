
const SectorsWeServe = () => {
  const sectors = [
    {
      title: "SMEs and MSMEs",
      desc: "Smart solutions to scale efficiently.",
      icon: (
        <svg className="w-6 h-6 text-[#0B4884]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      tag: "Scale & Efficiency"
    },
    {
      title: "Startups",
      desc: "Innovative solutions for rapid growth.",
      icon: (
        <svg className="w-6 h-6 text-[#0B4884]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      tag: "Rapid Innovation"
    }
    ,{
      // NEW ADDITION: GOVERNMENT SECTOR
      title: "Governments",
      desc: "Secure, highly compliant digital transformation portals, citizen services, and automation.",
      icon: (
        <svg className="w-6 h-6 text-[#0B4884] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4 M3 10h18M3 14h18M3 18h18" />
        </svg>
      ),
      tag: "Compliance & Security"
    }
  ];

  return (
    <section className="w-full bg-[#EDF4F9]/40 py-20 px-6 lg:px-8 font-sans relative" id="services">
      <div className="max-w-5xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-widest text-[#0B4884] font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Sectors We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#16365F] leading-[1.2]">
            Chosen by Innovators to Build Smarter Futures
          </h2>
        </div>

        {/* SECTORS CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none transition-all group-hover:scale-150 duration-500" />

              <div className="flex flex-col sm:flex-row items-start gap-5 relative z-10">
                {/* Icon Container */}
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#0B4884] transition-colors duration-300">
                  <span className="group-hover:text-white transition-colors duration-300">
                    {sector.icon}
                  </span>
                </div>

                {/* Content Area */}
                <div className="space-y-2 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-[#16365F] group-hover:text-[#0B4884] transition-colors">
                      {sector.title}
                    </h3>
                    <span className="text-[10px] font-semibold tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      {sector.tag}
                    </span>
                  </div>
                  
                  <p className="text-base text-slate-500 font-normal leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Line Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-100 group-hover:bg-[#0B4884] transition-colors duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectorsWeServe;
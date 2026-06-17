

const TechStats = () => {
  const stats = [
  { number: "100K+", label: "Monthly AI Interactions", desc: "Handling high-concurrency citizen workflows smoothly.", color: "text-cyan-400" },
  { number: "₹14 Cr+", label: "Revenue Processed", desc: "Secured transactional system deployed for public services.", color: "text-blue-400" },
  { number: "Multi-lang", label: "Conversational AI", desc: "RAG-powered localized language processing for diverse users.", color: "text-teal-400" },
  { number: "Enterprise", label: "Integrations & APIs", desc: "Built with scalable Java backends and seamless API management.", color: "text-sky-400" }
];

  return (
    <section className=" py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Component Header */}
        <div className="mb-12 lg:text-center">
         <h2 className="text-base  text-cyan-400 font-semibold tracking-wide uppercase">
  Technical Excellence
</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Production-Ready Architecture at Scale
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 border border-slate-700/60 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors duration-300"
            >
              <div className="text-4xl font-extrabold text-cyan-400 mb-2">
  {stat.number}
</div>
              <div className="text-lg font-bold text-slate-100 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-400 leading-relaxed">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStats;
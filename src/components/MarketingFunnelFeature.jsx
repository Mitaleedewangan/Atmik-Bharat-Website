

// ==========================================
// 1. SUB-COMPONENT: FUNNEL VISUAL (RIGHT)
// ==========================================
const FunnelVisual = () => {
  const funnelStages = [
    { label: 'Attract', stage: 'Awareness', color: 'bg-blue-600', width: 'w-full' },
    { label: 'Inform', stage: 'Consideration', color: 'bg-blue-500', width: 'w-4/5' },
    { label: 'Convert', stage: 'Conversion', color: 'bg-blue-400', width: 'w-3/5' },
    { label: 'Engage', stage: 'Loyalty', color: 'bg-blue-300', width: 'w-2/5' }
  ];

  return (
    <div className="w-full max-w-[500px] bg-white rounded-2xl p-6 shadow-xl border border-slate-100 flex gap-6 items-center">
      {/* Left Column: Channels & Platforms Row Group */}
      <div className="flex-1 space-y-4 text-[11px] font-semibold text-slate-500">
        <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
          <span>📢 Google & Meta Ads</span>
          <span className="text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded text-[9px]">Attract</span>
        </div>
        <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
          <span>✉️ Email & WhatsApp</span>
          <span className="text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded text-[9px]">Inform</span>
        </div>
        <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
          <span>🛒 Shopify & Web Store</span>
          <span className="text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded text-[9px]">Convert</span>
        </div>
        <div className="flex items-center justify-between">
          <span>🔄 CRM & Live Chat</span>
          <span className="text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded text-[9px]">Engage</span>
        </div>
      </div>

      {/* Right Column: Dynamic Abstract Funnel Component */}
      <div className="flex flex-col items-center gap-1.5 w-[180px]">
        {funnelStages.map((f, index) => (
          <div 
            key={index} 
            className={`${f.color} ${f.width} text-white font-bold py-3 text-center text-[10px] uppercase tracking-wider shadow-sm transition-all hover:brightness-105`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
              borderRadius: '2px'
            }}
          >
            {f.stage}
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 2. MAIN COMPONENT: MARKETING FUNNEL FEATURE
// ==========================================
const MarketingFunnelFeature = () => {
  // Bottom Workflow Steps
  const steps = [
    { name: 'Create Post', icon: '📝' },
    { name: 'Schedule', icon: '📅' },
    { name: 'Broadcast', icon: '📣' },
    { name: 'Convert', icon: '🎯' },
    { name: 'Analyze', icon: '📊' },
    { name: 'Engage', icon: '❤️' }
  ];

  return (
    <section className="w-full bg-[#EDF4F9]/60 py-20 px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Soft Wave Background Pattern Graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========================================== */}
        {/* NEW ADDITION: CENTERED SECTION HEADING    */}
        {/* ========================================== */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1.5 rounded-full uppercase tracking-widest">
            Marketing Automation
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight max-w-3xl mx-auto mt-4 leading-tight">
            Accelerate Growth With Full-Funnel <span className="text-[#0B4884] bg-blue-50 px-2 rounded-lg">Ad Campaigns</span>
          </h2>
          <div className="h-1 w-12 bg-[#0B4884] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HIGHLIGHTED TEXT BLOCK (Prevents text mixing) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* प्रीमियम कार्ड कंटेनर जो पिछले कंपोनेंट के डिज़ाइन से मैच करता है */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100/80 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
                Create, Schedule, & Track Ads with Ease Across <span className="text-cyan-600 font-extrabold">Multiple Channels</span>
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed">
                Maximize your marketing potential with our comprehensive platform. Create, schedule, and track ads across multiple channels seamlessly. Gain valuable insights into ad performance, all in one place. Simplify your marketing workflow with our integrated solution.
              </p>
            </div>

            {/* Bottom Row Step Workflow Process Indicators */}
            <div className="flex flex-wrap items-center gap-y-4 pt-2">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5 bg-white py-2 px-3 rounded-xl shadow-sm border border-slate-100 min-w-[85px] hover:shadow-md transition-shadow">
                    <span className="text-lg">{step.icon}</span>
                    <span className="text-[10px] font-bold text-slate-600 whitespace-nowrap">{step.name}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <span className="text-slate-400 font-bold px-1.5 sm:px-2.5 text-xs text-center">+</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Action Button */}
            <div className="pt-2">
              <button className="bg-[#0B4884] text-white px-7 py-3 rounded-xl text-xs font-bold shadow-md shadow-blue-900/10 hover:bg-blue-800 transition-all uppercase tracking-wider transform active:scale-95">
                View in Detail
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Funnel Graphics Widget Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FunnelVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketingFunnelFeature;
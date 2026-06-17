
// SUB-COMPONENT: LEFT COLUMN (Content & Copywriting)
const HeroLeft = () => {
  return (
    // यहाँ पिछले कोड की idclassName वाली टाइपो एरर को बिल्कुल फिक्स कर दिया गया है
    <div className="space-y-6 lg:pr-6 text-left">
      
      {/* NEW: टॉप प्रीमियम बैज जो पेज लोड होते ही ध्यान खींचेगा */}
      <div className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100 px-3 py-1.5 rounded-full shadow-sm">
        <span className="flex h-2 w-2 rounded-full bg-[#0B4884] animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B4884]">
          🚀 Next-Gen Technology Solutions
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-[#16365F] leading-[1.15]">
        Building <br className="hidden lg:block" />
        <span className="bg-gradient-to-r from-[#0B4884] via-indigo-600 to-blue-600 bg-clip-text text-transparent">
          Scalable IT Solutions
        </span> <br />
        for a Digital Future
      </h1>
      
      <p className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed font-normal">
        We build everything from apps and websites to AI chatbots and automation—end-to-end IT solutions that empower SMEs, MSMEs, startups, and governments to grow smarter and faster.
      </p>

      {/* Buttons Custom Layout */}
      <div className="flex flex-wrap gap-4 pt-2">
        <button className="bg-[#0B4884] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-all transform active:scale-95 duration-200">
          Start a Project
        </button>
        <button className="border-2 border-slate-200 text-[#16365F] px-8 py-4 rounded-xl text-sm font-bold bg-white hover:bg-slate-50 hover:border-slate-300 transition-all transform active:scale-95 duration-200">
          Book a Demo
        </button>
      </div>

      {/* Trust Checkpoints Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 pt-8 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-600">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          AI Integrations
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          Project Managed
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          Industry Specific
        </div>
      </div>
    </div>
  );
};

// SUB-COMPONENT: RIGHT COLUMN (Visuals & Populated Cards)
const HeroRight = () => {
  return (
    <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 w-full px-4">
      {/* Main Image Frame Component */}
      <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-white bg-slate-100 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80" 
          alt="IT Solutions Team Meeting" 
          className="w-full h-full object-cover brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Cards (नए यूनिक कलर्स के साथ ताकि इमेज से अलग दिखें) */}
      
      {/* 1. AI Chatbots Card (Amber Style) */}
      <div className="absolute -top-5 left-0 sm:left-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 flex items-center gap-3.5 transition-transform hover:-translate-y-1 duration-300">
        <div className="bg-amber-50 w-10 h-10 rounded-xl flex items-center justify-center text-amber-600 font-bold text-xs shadow-inner">
          🤖
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-800 tracking-wide">AI Chatbots</h4>
          <p className="text-[10px] text-slate-400 font-semibold mt-0.5">2,450 Integrations</p>
        </div>
      </div>

      {/* 2. HR & Payroll Card (Emerald Style) */}
      <div className="absolute -bottom-5 left-4 sm:left-12 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 flex items-center gap-3.5 transition-transform hover:-translate-y-1 duration-300">
        <div className="bg-emerald-50 w-10 h-10 rounded-xl flex items-center justify-center text-emerald-600 shadow-inner">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-800 tracking-wide">HR & Payroll Platforms</h4>
          <p className="text-[10px] text-slate-400 font-semibold mt-0.5">3,200 Clients</p>
        </div>
      </div>

      {/* 3. CRM & ERP Card (Classic Blue Style) */}
      <div className="absolute top-1/2 -right-2 sm:-right-6 transform -translate-y-1/2 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 flex items-center gap-3.5 transition-transform hover:-translate-y-1 duration-300">
        <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 shadow-inner">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-800 tracking-wide">CRM & ERP Systems</h4>
          <p className="text-[10px] text-slate-400 font-semibold mt-0.5">1,890 Businesses</p>
        </div>
      </div>
    </div>
  );
};

// MAIN HERO SECTION COMPONENT
const HeroSection = () => {
  return (
    <div className="w-full pt-12 lg:pt-20 bg-white relative overflow-hidden" id="home">
      
      {/* Background Layer: Soft Fluidic Blurs */}
      <div className="absolute top-12 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Container Layout */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        <section className="lg:col-span-6 order-2 lg:order-1">
          <HeroLeft />
        </section>
        <section className="lg:col-span-6 order-1 lg:order-2 flex justify-center w-full">
          <HeroRight />
        </section>
      </main>
    </div>
  );
};

export default HeroSection;
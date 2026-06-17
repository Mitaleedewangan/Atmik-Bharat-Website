

const ExpertiseServices = () => {
  // आपकी सभी सर्विसेज का डेटा एरे (Icons के साथ)
  const services = [
    {
      title: "Mobile App Development",
      desc: "Build secure native and cross-platform apps with seamless experiences.",
      icon: "📱"
    },
    {
      title: "Website & Web App Development",
      desc: "Create responsive, scalable web solutions for modern businesses.",
      icon: "💻"
    },
    {
      title: "AI & Chatbot Development",
      desc: "Develop intelligent AI chatbots to automate support and boost engagement.",
      icon: "🤖"
    },
    {
      title: "Analytics",
      desc: "Leverage data analytics to gain actionable insights for business growth.",
      icon: "📊"
    },
    {
      title: "Automation",
      desc: "Streamline processes with smart automation to enhance efficiency and output.",
      icon: "⚙️"
    },
    {
      title: "Cloud Integration",
      desc: "Enable seamless cloud migration, integration and optimized resource management.",
      icon: "☁️"
    },
    {
      title: "AI/ML",
      desc: "Deliver advanced AI and machine learning models for predictive solutions.",
      icon: "🧠"
    },
    {
      title: "Deep Tech",
      desc: "Adopt cutting-edge deep tech innovations to tackle complex challenges.",
      icon: "🔬"
    },
    {
      title: "AWS Integration",
      desc: "Expert AWS integration for high-performance systems.",
      icon: "📦"
    },
    {
      title: "Gateway Integration",
      desc: "Connect systems and applications securely with robust gateway integrations.",
      icon: "💳"
    },
    {
      title: "API & Plugin Development",
      desc: "Design custom APIs and plugins to extend application functionalities.",
      icon: "🔌"
    },
    {
      title: "Custom Solutions",
      desc: "Tailor unique technology solutions to meet specific business requirements.",
      icon: "🎯"
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-6 lg:px-8 font-sans relative overflow-hidden" id="about">
      {/* Background soft glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-3xl uppercase tracking-widest text-[#0B4884] font-bold bg-blue-50 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#16365F] leading-[1.2]">
            What We Do Best
          </h2>
          {/* आपका दिया हुआ विज़न स्टेटमेंट यहाँ आ गया */}
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-normal">
            Transforming businesses with innovative technology solutions to scale faster, automate smarter, and stay ready for tomorrow.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Container with subtle background hover */}
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-50 transition-colors duration-300">
                  {service.icon}
                </div>
                
                {/* Service Title */}
                <h3 className="text-lg font-bold text-[#16365F] group-hover:text-[#0B4884] transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {service.desc}
                </p>
              </div>

              {/* Decorative clean line at the bottom of each card */}
              <div className="w-0 h-[3px] bg-[#0B4884] mt-6 rounded-full group-hover:w-12 transition-all duration-350" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertiseServices;
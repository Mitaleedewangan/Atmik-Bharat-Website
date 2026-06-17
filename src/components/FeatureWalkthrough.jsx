


const FeatureWalkthrough = () => {
  const features = [
    {
      icon: "🏆",
      title: "National Recognition",
      desc: "Awarded 'Highest Impact based on Beneficiaries' at the India AI Impact Summit 2026 by STPI, Ministry of Electronics & IT.",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: "🏛️",
      title: "GovTech & Citizen Scale",
      desc: "Trusted by Raipur Municipal Corporation to build India's first municipal WhatsApp bot, processing ₹14 Cr in taxes in just 1 month.",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: "🚀",
      title: "Global AI Ecosystem",
      desc: "Proud member of the NVIDIA Inception Program and strategic partner with Salesforce to build next-generation CPaaS + AI solutions.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "💰",
      title: "MeitY TIDE 2.0 Funded",
      desc: "Selected for ₹30 Lakhs in funding under the prestigious MeitY TIDE 2.0 scheme, backed by the Government of India.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🌐",
      title: "Global Showcase",
      desc: "Handpicked by Startup India & DPIIT to showcase groundbreaking conversational innovations at Web Summit Qatar.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: "🌾",
      title: "AgriTech Innovation",
      desc: "Honored with a ₹25 Lakhs RKVY-RAFTAAR Grant-in-aid by the Chhattisgarh Government for transforming digital agriculture.",
      color: "from-green-500 to-lime-500"
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-black leading-[1.2]">
            Why Choose <span className="text-[#16365F]">Atmik Bharat?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering governments and enterprises with proven AI-powered automation and national-scale digital infrastructure.
          </p>
        </div>

        {/* Responsive Grid Layout (1 Column on Mobile, 2 on Tablet, 3 on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Icon Background Container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform text-white shadow-md`}>
                  {feature.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeatureWalkthrough;
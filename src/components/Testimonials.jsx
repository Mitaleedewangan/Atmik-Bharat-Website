

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStartup India",
      image: "https://i.pravatar.cc/100?img=1",
      quote: "Atmik Bharat transformed our WhatsApp integration. Customer engagement increased by 40%!"
    },
    {
      name: "Priya Sharma",
      role: "Founder, MSME Solutions",
      image: "https://i.pravatar.cc/100?img=5",
      quote: "The best digital solution for startups! Fast, secure, and incredibly easy to use."
    },
    {
      name: "Amit Patel",
      role: "Director, Growth Hub",
      image: "https://i.pravatar.cc/100?img=8",
      quote: "Vertex Suite helped us scale operations 3x faster. WhatsApp integration is seamless."
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-black leading-[1.2]">
            What Our <span className="text-[#0B4884]">Customers Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-gray-200 mb-6"></div>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
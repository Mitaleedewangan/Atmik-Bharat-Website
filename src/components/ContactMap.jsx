

const ContactMap = () => {
  // आपके दिए गए लिंक से निकाला गया सटीक पिन-पॉइंट एम्बेड URL
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0827253549226!2d81.32677007604473!3d21.208743980489243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd46bfa33261%3A0xc66ce5b7d6e6800f!2sAtmik%20Bharat%20Industries%20Private%20Limited!5e0!3m2!1sen!2sin!4v1718550000000!5m2!1sen!2sin";

  return (
    <section className="w-full  py-20 px-6 lg:px-8 font-sans" id="contact">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#0B4884] font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0B4884] leading-[1.2]">
            Our Location & Contact Details
          </h2>
          <p className="text-base text-slate-500 font-normal">
            Get in touch or visit our head office to discuss your next big digital solution.
          </p>
        </div>

        {/* TWO COLUMN LAYOUT: DETAILS + MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#EDF4F9]/30 rounded-[32px] p-6 sm:p-8 lg:p-12 border border-slate-100 shadow-sm items-center">
          
          {/* LEFT COLUMN: ADDRESS & INFO */}
          <div className="lg:col-span-5 space-y-8 text-left lg:pr-4">
            <div>
              <h3 className="text-2xl font-bold text-[#16365F] mb-2">Atmik Bharat</h3>
              <p className="text-slate-500 text-sm">Head Office Location</p>
            </div>

            <div className="space-y-6">
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#16365F]">Registered Office</h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    H.O.- Block 86, Nehru Nagar<br />
                    East-490020, Bhilai<br />
                    Chhattisgarh, India
                  </p>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-lg shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#16365F]">Phone Number</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    +91-7218077740 / 30
                  </p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#16365F]">Email Address</h4>
                  <p className="text-sm text-slate-600 mt-1 hover:text-[#0B4884] transition-colors">
                    <a href="mailto:info@atmikbharat.com">info@atmikbharat.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: GOOGLE MAP INTERACTIVE EMBED */}
          <div className="lg:col-span-7 w-full h-[350px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md border-4 border-white relative group">
            <iframe
              src={mapSrc}
              className="w-full h-full border-0 rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atmik Bharat Office Location Map"
            />
            <div className="absolute inset-0 rounded-xl border border-slate-200/50 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;
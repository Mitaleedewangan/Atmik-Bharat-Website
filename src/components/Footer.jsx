// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 w-full text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">Atmik Bharat</h3>
//             <p className="text-gray-400">
//               Your Partner in Business Growth and Success
//             </p>
//           </div>
          
//           <div>
//             <h4 className="font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
//               <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
//               <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-bold mb-4">Contact</h4>
//             <p className="text-gray-400">Bhilai, Chhattisgarh, India</p>
//             <p className="text-gray-400 mt-2">📧 info@atmikbharat.com</p>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p>&copy; 2026 Atmik Bharat. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B4884] w-full text-white pt-16 pb-8 font-sans selection:bg-white selection:text-[#0B4884]">
      {/* Main Grid Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* COLUMN 1: Brand Info & Social Icons (4 Cols Wide) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold tracking-wide">
              Atmik Bharat Industries Private Limited
            </h3>
            <p className="text-blue-100/80 text-[14px] leading-relaxed max-w-sm">
              Your partner in building innovative, reliable, and scalable technology for startups, enterprises, and government.
            </p>
            
            {/* Circular Social Icons Group */}
            <div className="flex items-center space-x-3 pt-2">
              {['X', 'f', 'ig', 'wa'].map((icon, idx) => (
                <a 
                  key={idx} 
                  href={`#${icon}`} 
                  className="w-10 h-10 rounded-full border border-blue-200/40 flex items-center justify-center text-sm font-semibold text-blue-100 hover:bg-white hover:text-[#0B4884] hover:border-white transition-all transform hover:-translate-y-1"
                >
                  {icon === 'X' && <span className="font-mono text-xs">X</span>}
                  {icon === 'f' && <span className="font-serif text-base font-bold">f</span>}
                  {icon === 'ig' && <span className="text-xs">📷</span>}
                  {icon === 'wa' && <span className="text-xs">💬</span>}
                </a>
              ))}
            </div>
          </div>
          
          {/* COLUMN 2: Useful Links (2 Cols Wide) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold border-b-2 border-blue-400/30 pb-2 inline-block tracking-wide">
              Useful Links
            </h4>
            <ul className="space-y-3 text-[14px] text-blue-100/80">
              <li><a href="#home" className="hover:text-white hover:underline transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-white hover:underline transition-all">About us</a></li>
              <li><a href="#services" className="hover:text-white hover:underline transition-all">Services</a></li>
              <li><a href="#terms" className="hover:text-white hover:underline transition-all">Terms of service</a></li>
              <li><a href="#privacy" className="hover:text-white hover:underline transition-all">Privacy policy</a></li>
            </ul>
          </div>
          
          {/* COLUMN 3: Our Services (3 Cols Wide) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold border-b-2 border-blue-400/30 pb-2 inline-block tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-3 text-[14px] text-blue-100/80">
              <li><a href="#design" className="hover:text-white hover:underline transition-all">Web Design</a></li>
              <li><a href="#dev" className="hover:text-white hover:underline transition-all">Web Development</a></li>
              <li><a href="#pm" className="hover:text-white hover:underline transition-all">Product Management</a></li>
              <li><a href="#marketing" className="hover:text-white hover:underline transition-all">Marketing</a></li>
              <li><a href="#graphic" className="hover:text-white hover:underline transition-all">Graphic Design</a></li>
            </ul>
          </div>
          
          {/* COLUMN 4: Contact Us (3 Cols Wide) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold border-b-2 border-blue-400/30 pb-2 inline-block tracking-wide">
              Contact Us
            </h4>
            <div className="text-[14px] text-blue-100/80 space-y-3">
              <p className="leading-relaxed">
                H.O.- Block 86, Nehru Nagar<br />
                East-490020, Bhilai<br />
                Chhattisgarh, India
              </p>
              <p className="pt-2">
                <span className="font-bold text-white">Phone:</span> +91-7218077740/30
              </p>
              <p>
                <span className="font-bold text-white">Email:</span> info@atmikbharat.com
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Sub-Footer Bar */}
      <div className="w-full bg-[#093C6E] border-t border-blue-900/40 pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-blue-100/70">
          <p className="text-center sm:text-left w-full sm:w-auto">
            © Copyright <span className="font-bold text-white">Atmik Bharat</span>. All Rights Reserved
          </p>
          
          {/* Scroll to Top Arrow Button Indicator */}
          <a 
            href="#home" 
            className="bg-[#0B4884] p-2 rounded hover:bg-blue-500 transition-colors shadow-inner flex items-center justify-center group"
            title="Scroll to top"
          >
            <svg 
              className="w-4 h-4 text-white transform group-hover:-translate-y-0.5 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
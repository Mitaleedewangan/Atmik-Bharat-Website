

const Navbar = () => {
  return (
    // 'fixed top-0 left-0 right-0' से यह हमेशा ऊपर चिपका रहेगा
    // 'bg-white/80 backdrop-blur-md' से इसे एक मॉडर्न ग्लास लुक (Glassmorphic look) मिलेगा
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="text-2xl font-bold tracking-tight text-[#0B4884]">
          <a href="#home" className="hover:opacity-90 transition-opacity">
            Atmik Bharat
          </a>
        </div>
        
        {/* Nav Menu & Action Button */}
        <nav className="hidden md:flex items-center space-x-10 text-[15px] font-medium text-slate-600">
           <a href="#home" className="text-[#0B4884] font-semibold border-b-2 border-[#0B4884] pb-1">Home</a>
         <a href="#about" className="hover:text-[#0B4884] transition-colors">About</a>
        <a href="#services" className="hover:text-[#0B4884] transition-colors">Services</a>
        <a href="#contact" className="hover:text-[#0B4884] transition-colors">Contact</a>
          
          {/* Get in touch बटन */}
         <a href="#contact" className="inline-block">
            <button className="bg-[#0B4884] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all shadow-md shadow-blue-900/10 active:scale-95 cursor-pointer">
              Get in touch
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
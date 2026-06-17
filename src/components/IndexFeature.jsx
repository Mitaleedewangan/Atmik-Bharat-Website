// import React from 'react';

// // ==========================================
// // 1. SUB-COMPONENT: DASHBOARD PREVIEW (LEFT)
// // ==========================================
// const DashboardPreview = () => {
//   return (
//     <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden text-left font-sans text-xs flex flex-col h-[340px]">
//       {/* Dashboard Header */}
//       <div className="bg-[#0B4884] text-white px-3 py-2 flex items-center gap-4 text-[10px] font-medium">
//         <span className="font-bold text-xs opacity-90">S</span>
//         <span className="border-b-2 border-white pb-0.5">Mailboxes</span>
//         <span className="opacity-70">Docs</span>
//         <span className="opacity-70">Reports</span>
//         <span className="opacity-70">Manage</span>
//       </div>

//       {/* Main Panel Content */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Left Sidebar: Chats List */}
//         <div className="w-2/5 border-r border-slate-100 bg-slate-50/50 p-2 flex flex-col gap-1.5 overflow-y-auto">
//           <div className="text-[10px] font-bold text-slate-400 mb-1 tracking-wider">CHATS</div>
          
//           {/* Active Chat Item */}
//           <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100 relative">
//             <div className="flex justify-between items-center">
//               <span className="font-bold text-slate-700">Sijmen Immens</span>
//               <span className="bg-red-50 text-red-500 font-extrabold px-1 rounded text-[8px] tracking-wide scale-90">WAITING</span>
//             </div>
//             <p className="text-[9px] text-slate-400 truncate mt-0.5">Hi there I'd like to talk to someone...</p>
//           </div>

//           {/* Regular Chat Item */}
//           <div className="p-2 rounded-lg hover:bg-white/80 transition-colors relative">
//             <div className="flex justify-between items-center">
//               <span className="font-semibold text-slate-600">Stephanie Matthews</span>
//               <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
//             </div>
//             <p className="text-[9px] text-slate-400 truncate mt-0.5">I'm still wondering why my new...</p>
//           </div>

//           <div className="p-2 rounded-lg hover:bg-white/80 transition-colors">
//             <span className="font-semibold text-slate-600 block">olivia.b@comcast.net</span>
//             <p className="text-[9px] text-slate-400 truncate mt-0.5">Anyone there?</p>
//           </div>
//         </div>

//         {/* Right Sidebar: Active Conversation View */}
//         <div className="w-3/5 bg-white p-3 flex flex-col justify-between h-full">
//           {/* Conversation Thread */}
//           <div className="space-y-3 overflow-y-auto">
//             {/* Incoming Message */}
//             <div className="flex items-start gap-2 max-w-[85%]">
//               <div className="w-5 h-5 rounded-full bg-slate-200 flex-shrink-0" />
//               <div className="bg-slate-100 p-2 rounded-xl rounded-tl-none text-slate-600 leading-tight">
//                 Hello! I just received my new bicycle and seem to be missing one of the parts...
//               </div>
//             </div>

//             {/* Outgoing Reply */}
//             <div className="flex items-start gap-2 max-w-[85%] ml-auto justify-end">
//               <div className="bg-blue-50 text-slate-700 p-2 rounded-xl rounded-tr-none border border-blue-100/50 leading-tight">
//                 I would be happy to check that for you! Could you provide your order number?
//               </div>
//             </div>
//           </div>
          
//           {/* Quick Input Bar Indicator */}
//           <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[10px] text-slate-400">
//             <span>Write a reply...</span>
//             <span className="text-[#0B4884] font-bold">Send</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==========================================
// // 2. MAIN PARENT COMPONENT: SHARED INBOX FEATURE
// // ==========================================
// const SharedInboxFeature = () => {
//   // Integrations List Data
//   const socialIcons = [
//     { name: 'Twitter', color: 'bg-[#1DA1F2]/10 text-[#1DA1F2]', svg: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
//     { name: 'Instagram', color: 'bg-pink-50 text-pink-600', isCustom: true, iconText: 'IG' },
//     { name: 'Gmail', color: 'bg-red-50 text-red-500', isCustom: true, iconText: 'M' },
//     { name: 'Messenger', color: 'bg-blue-50 text-blue-600', isCustom: true, iconText: 'N' },
//     { name: 'WhatsApp', color: 'bg-green-50 text-green-500', isCustom: true, iconText: 'WA' },
//     { name: 'LinkedIn', color: 'bg-blue-50 text-blue-700', isCustom: true, iconText: 'in' },
//   ];

//   return (
//     <section className="w-full bg-white py-20 px-6 lg:px-8 font-sans">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
//         {/* LEFT COLUMN: Visual Dashboard & Connecting Nodes */}
//         <div className="lg:col-span-6 flex items-center justify-center lg:justify-start relative w-full">
          
//           {/* 1. Dashboard Box */}
//           <DashboardPreview />

//           {/* 2. Dotted Connectors & Social Column (Hidden on Mobile for cleaner UI) */}
//           <div className="hidden sm:flex items-center absolute right-[-20px] lg:right-[-40px] h-full z-10">
//             {/* Curved Connecting Line Indicator Graphic using SVG */}
//             <svg className="w-16 h-72 text-blue-400 stroke-current fill-none opacity-80" viewBox="0 0 100 300">
//               <path 
//                 d="M 0 150 Q 50 150 50 50 T 100 50 M 0 150 Q 50 150 50 250 T 100 250 M 0 150 L 50 150" 
//                 strokeDasharray="4 4" 
//                 strokeWidth="2" 
//               />
//             </svg>

//             {/* Vertical Stack of Integration Badges */}
//             <div className="flex flex-col gap-2.5 items-center bg-white py-2 px-1.5 rounded-full shadow-md border border-slate-100/80 -ml-4">
//               {socialIcons.map((icon, idx) => (
//                 <div key={idx} className="flex flex-col items-center gap-1">
//                   <div className={`w-8 h-8 rounded-full ${icon.color} flex items-center justify-center font-bold text-xs shadow-sm`}>
//                     {icon.isCustom ? (
//                       <span>{icon.iconText}</span>
//                     ) : (
//                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                         <path d={icon.svg} />
//                       </svg>
//                     )}
//                   </div>
//                   {idx < socialIcons.length - 1 && <span className="text-[9px] text-slate-300 font-bold">+</span>}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Feature Text and Copywriting */}
//         <div className="lg:col-span-6 space-y-6 lg:pl-12 text-left mt-8 lg:mt-0">
//           <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#16365F] leading-[1.2]">
//             Unify, Simplify, Amplify:<br />
//             Your <span className="text-[#0B4884]">All-in-One</span> Shared Inbox Solution
//           </h2>
          
//           <p className="text-base text-slate-500 max-w-xl leading-relaxed font-normal">
//             Connect Instagram, Twitter, Facebook, WhatsApp, and more in a single platform for better communication. Simplify your messaging workflow & stay connected with your audience effortlessly.
//           </p>

//           <div className="pt-2">
//             <button className="bg-[#0B4884] text-white px-7 py-3 rounded-lg text-sm font-bold shadow-md shadow-blue-900/10 hover:bg-blue-800 transition-all uppercase tracking-wider transform active:scale-95">
//               View in Detail
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SharedInboxFeature;


import React from 'react';

// ==========================================
// 1. SUB-COMPONENT: DASHBOARD PREVIEW (LEFT)
// ==========================================
const DashboardPreview = () => {
  return (
    <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden text-left font-sans text-xs flex flex-col h-[340px]">
      {/* Dashboard Header */}
      <div className="bg-[#0B4884] text-white px-3 py-2 flex items-center gap-4 text-[10px] font-medium">
        <span className="font-bold text-xs opacity-90">S</span>
        <span className="border-b-2 border-white pb-0.5">Mailboxes</span>
        <span className="opacity-70">Docs</span>
        <span className="opacity-70">Reports</span>
        <span className="opacity-70">Manage</span>
      </div>

      {/* Main Panel Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Chats List */}
        <div className="w-2/5 border-r border-slate-100 bg-slate-50/50 p-2 flex flex-col gap-1.5 overflow-y-auto">
          <div className="text-[10px] font-bold text-slate-400 mb-1 tracking-wider">CHATS</div>
          
          {/* Active Chat Item */}
          <div className="p-2 rounded-lg bg-white shadow-sm border border-slate-100 relative">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-700">Sijmen Immens</span>
              <span className="bg-red-50 text-red-500 font-extrabold px-1 rounded text-[8px] tracking-wide scale-90">WAITING</span>
            </div>
            <p className="text-[9px] text-slate-400 truncate mt-0.5">Hi there I'd like to talk to someone...</p>
          </div>

          {/* Regular Chat Item */}
          <div className="p-2 rounded-lg hover:bg-white/80 transition-colors relative">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-600">Stephanie Matthews</span>
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            </div>
            <p className="text-[9px] text-slate-400 truncate mt-0.5">I'm still wondering why my new...</p>
          </div>

          <div className="p-2 rounded-lg hover:bg-white/80 transition-colors">
            <span className="font-semibold text-slate-600 block">olivia.b@comcast.net</span>
            <p className="text-[9px] text-slate-400 truncate mt-0.5">Anyone there?</p>
          </div>
        </div>

        {/* Right Sidebar: Active Conversation View */}
        <div className="w-3/5 bg-white p-3 flex flex-col justify-between h-full">
          {/* Conversation Thread */}
          <div className="space-y-3 overflow-y-auto">
            {/* Incoming Message */}
            <div className="flex items-start gap-2 max-w-[85%]">
              <div className="w-5 h-5 rounded-full bg-slate-200 flex-shrink-0" />
              <div className="bg-slate-100 p-2 rounded-xl rounded-tl-none text-slate-600 leading-tight">
                Hello! I just received my new bicycle and seem to be missing one of the parts...
              </div>
            </div>

            {/* Outgoing Reply */}
            <div className="flex items-start gap-2 max-w-[85%] ml-auto justify-end">
              <div className="bg-blue-50 text-slate-700 p-2 rounded-xl rounded-tr-none border border-blue-100/50 leading-tight">
                I would be happy to check that for you! Could you provide your order number?
              </div>
            </div>
          </div>
          
          {/* Quick Input Bar Indicator */}
          <div className="border-t border-slate-100 pt-2 flex items-center justify-between text-[10px] text-slate-400">
            <span>Write a reply...</span>
            <span className="text-[#0B4884] font-bold">Send</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. MAIN PARENT COMPONENT: SHARED INBOX FEATURE
// ==========================================
const SharedInboxFeature = () => {
  const socialIcons = [
    { name: 'Twitter', color: 'bg-[#1DA1F2]/10 text-[#1DA1F2]', svg: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
    { name: 'Instagram', color: 'bg-pink-50 text-pink-600', isCustom: true, iconText: 'IG' },
    { name: 'Gmail', color: 'bg-red-50 text-red-500', isCustom: true, iconText: 'M' },
    { name: 'Messenger', color: 'bg-blue-50 text-blue-600', isCustom: true, iconText: 'N' },
    { name: 'WhatsApp', color: 'bg-green-50 text-green-500', isCustom: true, iconText: 'WA' },
    { name: 'LinkedIn', color: 'bg-blue-50 text-blue-700', isCustom: true, iconText: 'in' },
  ];

  return (
    // bg-slate-50/50 जोड़ने से यह सेक्शन थोड़ा अलग और साफ दिखेगा
    <section className="w-full bg-slate-50/50 py-20 px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP HEADING: इसे थोड़ा लाइट और बड़ा किया है */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1.5 rounded-full uppercase tracking-widest">
            Omnichannel Communication
          </span>
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-950 tracking-tight max-w-3xl mx-auto mt-4 leading-tight">
            Manage All Consumer Channels From A <span className="text-[#0B4884] bg-blue-50 px-2 rounded-lg">Single Dashboard</span>
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Visual Dashboard & Connecting Nodes */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-start relative w-full">
            <DashboardPreview />

            {/* Dotted Connectors */}
            <div className="hidden sm:flex items-center absolute right-[-20px] lg:right-[-40px] h-full z-10">
              <svg className="w-16 h-72 text-blue-300 stroke-current fill-none opacity-80" viewBox="0 0 100 300">
                <path 
                  d="M 0 150 Q 50 150 50 50 T 100 50 M 0 150 Q 50 150 50 250 T 100 250 M 0 150 L 50 150" 
                  strokeDasharray="4 4" 
                  strokeWidth="2" 
                />
              </svg>

              {/* Vertical Badges */}
              <div className="flex flex-col gap-2.5 items-center bg-white py-2 px-1.5 rounded-full shadow-md border border-slate-100/80 -ml-4">
                {socialIcons.map((icon, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div className={`w-8 h-8 rounded-full ${icon.color} flex items-center justify-center font-bold text-xs shadow-sm`}>
                      {icon.isCustom ? <span>{icon.iconText}</span> : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={icon.svg} /></svg>
                      )}
                    </div>
                    {idx < socialIcons.length - 1 && <span className="text-[9px] text-slate-300 font-bold">+</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGHLIGHTED TEXT BLOCK (यह अब मिक्स नहीं होगा) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6 text-left mt-8 lg:mt-0">
            
            {/* कार्ड जैसा बैकग्राउंड और हाइलाइट बॉर्डर जो इसे अलग दिखाएगा */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
                Unify, Simplify, Amplify:<br />
                Your <span className="text-cyan-600 font-extrabold">All-in-One</span> Shared Inbox Solution
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed">
                Connect Instagram, Twitter, Facebook, WhatsApp, and more in a single platform for better communication. Simplify your messaging workflow & stay connected with your audience effortlessly.
              </p>

              {/* छोटे चेकपॉइंट्स जो HR को पढ़ने में आसान लगेंगे */}
              <div className="pt-2 space-y-2 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Centralized Customer Engagement
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Real-time Messaging Response
                </div>
              </div>
            </div>

            {/* Button Container */}
            <div className="pt-2">
              <button className="bg-[#0B4884] text-white px-7 py-3 rounded-xl text-xs font-bold shadow-md shadow-blue-900/10 hover:bg-blue-800 transition-all uppercase tracking-wider transform active:scale-95">
                View in Detail
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SharedInboxFeature;
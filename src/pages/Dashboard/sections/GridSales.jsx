import React from 'react';
import { 
  ChevronUp, ChevronDown, Flame, ThumbsUp, 
  Dribbble, Instagram, Chrome, MoreHorizontal,
  ArrowUpRight, TrendingUp
} from 'lucide-react';

const GridSales = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-2.5">
        
        {/* --- Header Labels --- */}
        <div className="flex items-center text-[11px] font-semibold text-gray-400 px-4">
           <div className="flex-1">Sales</div>
           <div className="w-24 text-left">Revenue</div>
           <div className="w-20 text-center">Leads</div>
           <div className="w-16 text-center">KPI</div>
           <div className="w-20 text-center">W/L</div>
           <div className="w-8"></div>
        </div>

        {/* --- Row 1: Armin A. (Inactive) --- */}
        <div className="bg-white px-3 py-2 rounded-2xl shadow-sm flex items-center min-h-0">
           <div className="flex items-center gap-2 flex-1 min-h-0">
              <Avatar src="https://i.pravatar.cc/150?u=Armin" name="Armin A." />
              <span className="text-xs font-semibold text-gray-900 leading-none">Armin A.</span>
           </div>
           <div className="w-24 text-xs font-semibold text-gray-900 leading-none">$209,633</div>
           <div className="w-20 flex justify-center gap-1">
              <Badge value="41" dark />
              <Badge value="118" />
           </div>
           <div className="w-16 text-center text-xs font-semibold text-gray-900 leading-none">0.84</div>
           <div className="w-20 flex justify-center items-center gap-1">
              <span className="text-xs font-semibold text-gray-900 leading-none">31%</span>
              <Badge value="12" dark />
              <Badge value="29" />
           </div>
           <div className="w-8"></div>
        </div>

        {/* --- Row 2: Mikasa A. (Active Expanded Card) --- */}
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 px-4 py-3 rounded-2xl shadow-sm relative">
           
           {/* User Header */}
           <div className="flex items-center mb-2.5 min-h-0">
              <div className="flex items-center gap-2 flex-1 min-h-0">
                  <Avatar src="https://i.pravatar.cc/150?u=Mikasa" name="Mikasa A." />
                  <span className="text-xs font-semibold text-gray-900 leading-none">Mikasa A.</span>
              </div>
              <div className="w-24 text-xs font-semibold text-gray-900 leading-none">$156,841</div>
              <div className="w-20 flex justify-center gap-1">
                  <Badge value="54" dark />
                  <Badge value="103" />
              </div>
              <div className="w-16 text-center text-xs font-semibold text-gray-900 leading-none">0.89</div>
              <div className="w-20 flex justify-center items-center gap-1">
                  <span className="text-xs font-semibold text-gray-900 leading-none">39%</span>
                  <Badge value="21" dark />
                  <Badge value="33" />
              </div>
              {/* Collapse Icon */}
              <div className="w-8 flex justify-center">
                <div className="bg-pink-500 text-white p-1 rounded-full shadow-md cursor-pointer">
                   <ChevronUp size={14} />
                </div>
              </div>
           </div>

           {/* Badges Row */}
           <div className="flex flex-wrap gap-1.5 mb-3">
              <Pill>Top sales 💪</Pill>
              <Pill>Sales streak 🔥</Pill>
              <Pill>Top review 👍</Pill>
           </div>

           {/* Work with Platforms */}
           <div className="mb-3.5">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[11px] font-semibold text-gray-500">Work with platforms</span>
                 <div className="flex gap-1.5">
                     <div className="bg-pink-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                       <ChevronUp size={8} /> 3
                     </div>
                     <div className="bg-pink-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                       $156,841
                     </div>
                 </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                 {/* Left: Dribbble (Big) */}
                 <div className="col-span-1 bg-white py-2 px-3 rounded-xl shadow-sm flex flex-col justify-between h-28 relative overflow-hidden min-h-0">
                     <div className="flex items-center gap-1.5 text-pink-500 font-semibold text-[10px] mb-auto">
                       <Dribbble size={13} /> Dribbble
                     </div>
                     <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
                     <div className="relative z-10">
                         <div className="text-xl font-bold text-gray-900 mb-0.5 leading-5">45.3%</div>
                         <div className="text-base font-semibold text-gray-300">$71,048</div>
                     </div>
                 </div>

                 {/* Right: Grid of 4 cards */}
                 <div className="col-span-2 grid grid-cols-2 gap-2">
                     {/* Instagram */}
                     <div className="bg-white p-2 rounded-xl shadow-sm flex items-center gap-1.5 min-h-0">
                         <div className="p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-md text-white flex-shrink-0">
                           <Instagram size={11} />
                         </div>
                         <div className="flex-1 min-w-0">
                           <div className="text-[10px] font-semibold text-gray-900">Instagram</div>
                         </div>
                     </div>

                     {/* Google */}
                     <div className="bg-white p-2 rounded-xl shadow-sm relative overflow-hidden min-h-0">
                         <div className="absolute inset-0 opacity-5">
                           <div className="w-full h-full" style={{
                             backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
                             backgroundSize: '10px 10px'
                           }}></div>
                         </div>
                         <div className="relative z-10">
                           <div className="flex items-center gap-1.5 mb-1">
                               <Chrome size={11} className="text-blue-500" />
                               <span className="text-[10px] font-semibold text-gray-900">Google</span>
                           </div>
                           <div className="flex items-center justify-between">
                               <span className="text-xs font-semibold text-gray-900">14.1%</span>
                               <span className="text-[9px] text-gray-300 font-semibold line-through">$22,114</span>
                           </div>
                         </div>
                     </div>

                     {/* TikTok */}
                     <div className="bg-white p-2 rounded-xl shadow-sm min-h-0">
                         <div className="flex items-center gap-1.5 mb-1">
                             <div className="size-3.5 bg-black rounded flex-shrink-0"></div>
                             <span className="text-[10px] font-semibold text-gray-900">TikTok</span>
                         </div>
                         <div className="flex items-center justify-between">
                             <span className="text-xs font-semibold text-gray-900">28.1%</span>
                             <span className="text-[9px] text-gray-300 font-semibold">$44,072</span>
                         </div>
                     </div>

                     {/* Other */}
                     <div className="bg-white p-2 rounded-xl shadow-sm min-h-0">
                         <div className="flex items-center gap-1.5 mb-1">
                             <div className="size-3.5 bg-gray-900 rounded flex-shrink-0 flex items-center justify-center">
                               <MoreHorizontal size={9} className="text-white" />
                             </div>
                             <span className="text-[10px] font-semibold text-gray-900">Other</span>
                         </div>
                         <div className="flex items-center justify-between">
                             <span className="text-xs font-semibold text-gray-900">7.1%</span>
                             <span className="text-[9px] text-gray-300 font-semibold">$11,137</span>
                         </div>
                     </div>
                 </div>
              </div>
           </div>

           {/* Sales Dynamic Chart */}
           <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-semibold text-gray-500">Sales dynamic</span>
                <TrendingUp size={14} className="text-gray-400" />
              </div>
              
              <div className="relative h-20 bg-white/30 rounded-xl p-2">
                 {/* Week Labels */}
                 <div className="absolute bottom-1 left-2 right-2 flex justify-between text-[8px] font-semibold text-gray-300">
                   <span>W 1</span>
                   <span>W 3</span>
                   <span>W 5</span>
                   <span>W 7</span>
                   <span>W 9</span>
                   <span>W 11</span>
                 </div>

                 {/* Chart Area */}
                 <div className="relative h-14 mt-0.5">
                   {/* Grid Lines */}
                   <div className="absolute inset-0 flex justify-between">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="border-l border-dashed border-gray-200 h-full"></div>
                      ))}
                   </div>

                   {/* Two Wave Lines */}
                   <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      {/* Pink line */}
                      <path 
                        d="M0,34 Q25,27 50,31 T100,23 T150,27 T200,19 T250,23 T300,14"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                      {/* Pink fill */}
                      <path 
                        d="M0,34 Q25,27 50,31 T100,23 T150,27 T200,19 T250,23 T300,14 L300,60 L0,60 Z"
                        fill="url(#gradientPink)"
                        opacity="0.15"
                      />
                      
                      {/* Gray line (background) */}
                      <path 
                        d="M0,37 Q25,33 50,36 T100,30 T150,33 T200,27 T250,30 T300,25"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="1.5"
                        vectorEffect="non-scaling-stroke"
                      />
                      
                      <defs>
                        <linearGradient id="gradientPink" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                   </svg>

                   {/* Timeline gradient bar */}
                   <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 rounded-full"></div>
                   
                   {/* User Markers */}
                   <UserMarker left="30%" icon={ArrowUpRight} color="bg-blue-400" small />
                   <UserMarker left="55%" icon={Instagram} color="bg-pink-500" small />
                   <UserMarker left="82%" icon={Chrome} color="bg-gray-900" small />
                 </div>
              </div>
           </div>
        </div>

        {/* --- Row 3: Eren Y. (Footer) --- */}
        <div className="bg-white px-3 py-2 rounded-2xl shadow-sm flex items-center min-h-0">
           <div className="flex items-center gap-2 flex-1 min-h-0">
              <Avatar src="https://i.pravatar.cc/150?u=Eren" name="Eren Y." />
              <span className="text-xs font-semibold text-gray-900 leading-none">Eren Y.</span>
           </div>
           <div className="w-24 text-xs font-semibold text-gray-900 leading-none">$117,115</div>
           <div className="w-20 flex justify-center gap-1">
              <Badge value="22" dark />
              <Badge value="84" />
           </div>
           <div className="w-16 text-center text-xs font-semibold text-gray-900 leading-none">0.79</div>
           <div className="w-20 flex justify-center items-center gap-1">
              <span className="text-xs font-semibold text-gray-900 leading-none">32%</span>
              <Badge value="7" dark />
              <Badge value="15" />
           </div>
           <div className="w-8"></div>
        </div>

      </div>
    </div>
  );
};

// --- Sub-components ---

const Avatar = ({ src, name }) => (
  <div className="relative size-7 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-400 flex-shrink-0 min-h-0">
    <img src={src} alt={name} className="w-full h-full object-cover" />
  </div>
);

const Badge = ({ value, dark }) => (
  <div className={`h-5 min-w-[18px] px-1.5 rounded-full flex items-center justify-center text-[10px] font-semibold ${
    dark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
  }`}>
    {value}
  </div>
);

const Pill = ({ children }) => (
  <div className="bg-white px-2 py-1 rounded-md shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100">
    {children}
  </div>
);

const UserMarker = ({ left, icon: Icon, color, small }) => (
  <div className="absolute -bottom-3 -translate-x-1/2 z-20" style={{ left }}>
     <div className={`${small ? "size-4" : "size-6"} ${color} rounded-full text-white flex items-center justify-center shadow-lg border-2 border-white`}>
        <Icon size={small ? 9 : 12} strokeWidth={2} />
     </div>
  </div>
);

export default GridSales;
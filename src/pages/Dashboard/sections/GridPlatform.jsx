import React from 'react';
import { ChevronDown, Dribbble } from 'lucide-react';
import { Avatar } from '../../../components/ui/Avatar';

const GridPlatform = () => {
  return (
    <div className="bg-bg-main/50 p-6 rounded-3xl border border-border/60 shadow-sm flex flex-col gap-6">
      
      {/* --- 1. Header Section --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Left: Icon & Title */}
        <div className="flex items-start gap-3">
           <div className="size-10 rounded-full border border-border bg-white flex items-center justify-center text-brand shadow-sm">
              <Dribbble size={20} strokeWidth={2.5} />
           </div>
           <div>
              <div className="text-[11px] font-bold text-text-secondary uppercase tracking-wide">Platform value</div>
              <div className="flex items-center gap-1 font-bold text-lg text-text-primary cursor-pointer hover:opacity-70 transition">
                 Dribbble <ChevronDown size={18} className="text-text-secondary" />
              </div>
           </div>
        </div>

        {/* Right: Toggle Switch (Black Pill) */}
        <div className="bg-white p-1 rounded-xl flex items-center shadow-sm border border-border/50 self-start sm:self-auto">
           <button className="bg-black text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-md transition-transform active:scale-95">Revenue</button>
           <button className="text-text-secondary px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">Leads</button>
           <button className="text-text-secondary px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">W/L</button>
        </div>
      </div>

      {/* --- 2. Content Area (Red Card + Chart) --- */}
      <div className="flex flex-col lg:flex-row gap-2 h-full">
         
         {/* LEFT: Red Stats Sidebar */}
         <div className="bg-brand text-white rounded-3xl p-4 w-full lg:w-42 shrink-0 relative overflow-hidden flex lg:flex-col items-center lg:items-start lg:justify-center gap-6 shadow-xl shadow-brand/20">
            {/* Vertical Text Label */}
            <div className="hidden lg:block absolute -left-5 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold tracking-wider opacity-70 whitespace-nowrap origin-center">
               Average monthly
            </div>

            <div className="lg:pl-8 w-full flex lg:flex-col justify-center lg:space-y-8">
               <StatBlock label="Revenue" value="$18,552" />
               <StatBlock 
                  label="Leads" 
                  value={<>373 <span className="opacity-70 text-[11px] font-medium ml-1.5">97/276</span></>} 
               />
               <StatBlock 
                  label="Win/lose" 
                  value={<>16% <span className="opacity-70 text-[11px] font-medium ml-1.5">51/318</span></>} 
               />
            </div>
         </div>

         {/* RIGHT: Bar Chart Area */}
         <div className="flex-1 relative pt-6 pb-2 pr-2 min-h-[200px]">
            {/* Y-Axis Labels (Right Side) */}
            <div className="absolute right-0 top-0 bottom-8 flex flex-col justify-between text-[10px] font-bold text-gray-300 text-right h-full py-2 pointer-events-none">
               <span>$14,500</span>
               <span>$11,000</span>
               <span>$7,500</span>
               <span>$4,000</span>
            </div>

            {/* Grid Lines */}
            <div className="absolute inset-0 top-2 bottom-8 right-10 flex flex-col justify-between pointer-events-none">
               {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="border-b border-dashed border-gray-200 w-full h-px"></div>
               ))}
            </div>

            {/* Bars Container */}
            <div className="flex items-end justify-between h-48 pr-10 pl-2 relative z-10">
               {/* Month: Sep */}
               <MonthGroup 
                  label="Sep" 
                  value="$6,901"
                  bars={[
                    { h: 'h-24', striped: true, user: 'https://i.pravatar.cc/150?u=1' },
                    { h: 'h-16', color: 'bg-gray-200', user: 'https://i.pravatar.cc/150?u=2' },
                    { h: 'h-8', color: 'bg-gray-200', user: 'https://i.pravatar.cc/150?u=3' },
                  ]}
               />

               {/* Month: Oct */}
               <MonthGroup 
                  label="Oct" 
                  value="$11,035"
                  bars={[
                    { h: 'h-40', striped: true, user: 'https://i.pravatar.cc/150?u=4' },
                    { h: 'h-28', color: 'bg-gray-200', user: 'https://i.pravatar.cc/150?u=5' },
                    { h: 'h-16', color: 'bg-gray-200', user: 'https://i.pravatar.cc/150?u=6' },
                  ]}
               />

               {/* Month: Nov */}
               <MonthGroup 
                  label="Nov" 
                  value="$9,288"
                  bars={[
                    { h: 'h-32', striped: true, user: 'https://i.pravatar.cc/150?u=7' },
                    { h: 'h-20', color: 'bg-gray-200', user: 'https://i.pravatar.cc/150?u=8' },
                    { h: 'h-24', color: 'bg-gray-200', user: 'https://i.pravatar.cc/150?u=9' },
                  ]}
               />
            </div>
         </div>
      </div>
    </div>
  );
};

// --- Sub-components ---

const StatBlock = ({ label, value }) => (
  <div>
    <div className="text-[10px] font-medium text-white/80 mb-1 uppercase tracking-wide">{label}</div>
    <div className="text-xl font-bold text-white leading-tight">{value}</div>
  </div>
);

const MonthGroup = ({ label, value, bars }) => (
  <div className="flex flex-col items-center gap-3 group w-full px-1">
     {/* The Bars Row */}
     <div className="flex items-end gap-1 sm:gap-2 relative">
        {/* Floating Value Tag */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex justify-center z-20">
            <span className="bg-brand text-white text-[11px] font-bold px-2 py-1 rounded-md shadow-lg shadow-brand/20 transform group-hover:-translate-y-1 transition-transform whitespace-nowrap">
               {value}
            </span>
        </div>

        {bars.map((bar, i) => (
           <div key={i} className="flex flex-col items-center gap-2 group/bar">
              <div 
                 className={`w-3 sm:w-5 lg:w-4 xl:w-5 rounded-t-sm ${bar.h} ${bar.striped ? '' : bar.color} transition-all hover:opacity-80 relative overflow-hidden`}
                 style={bar.striped ? {
                    backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb 0, #e5e7eb 3px, transparent 0, transparent 6px)' 
                 } : {}}
              ></div>
              <div className="bg-white p-[2px] rounded-full shadow-sm -mt-3 z-10 relative">
                 <Avatar src={bar.user} size="sm" className="size-4!" />
              </div>
           </div>
        ))}
     </div>
     
     {/* Month Label */}
     <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{label}</span>
  </div>
);

export default GridPlatform;
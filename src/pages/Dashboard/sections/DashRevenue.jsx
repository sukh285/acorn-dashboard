import React from 'react';
import { 
  ArrowUp, ArrowDown, ChevronDown, 
  Star, ChevronRight, ArrowUpRight 
} from 'lucide-react';
import { Avatar } from '../../../components/ui/Avatar';

const DashRevenue = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 w-full">
      
      {/* LEFT: Main Revenue Text Area */}
      <div className="flex-none xl:w-auto min-w-[280px] flex flex-col justify-between">
        <div>
           <h2 className="text-sm font-bold text-text-primary mb-1.5">Revenue</h2>
           
           {/* Big Number Row */}
           <div className="flex items-baseline gap-3 mb-1.5">
              <span className="text-4xl font-extrabold tracking-tight text-text-primary">
                $528,976<span className="text-gray-300">.82</span>
              </span>
              
              {/* Badges */}
              <div className="flex items-center gap-1.5">
                 <div className="flex items-center gap-0.5 bg-brand text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    <ArrowDown size={9} strokeWidth={3} /> 7.9%
                 </div>
                 <div className="flex items-center gap-0.5 bg-brand text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    $27,335.09
                 </div>
              </div>
           </div>

           {/* Subtitle */}
           <p className="text-[10px] text-text-secondary font-medium flex items-center gap-1">
              vs prev. $501,641.73 Jun 1 - Aug 31, 2023 
           </p>
        </div>
      </div>

      {/* RIGHT: Cards Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-3">
         
         {/* 1. Top Sales (White Card) - Span 4 */}
         <div className="md:col-span-4 bg-white p-3 rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-[95px]">
            <div className="flex justify-between items-start">
               <span className="text-[10px] font-semibold text-text-secondary">Top sales</span>
            </div>
            <div className="flex items-end justify-between">
                <div>
                   <div className="text-xl font-bold mb-1.5">72</div>
                   <div className="flex items-center gap-1.5 bg-gray-50 pr-2.5 pl-1 py-0.5 rounded-full border border-gray-100 w-max">
                      <Avatar src="https://i.pravatar.cc/150?u=Mikasa" size="sm" className="size-4!" />
                      <span className="text-[9px] font-bold text-text-primary">Mikasa</span>
                   </div>
                </div>
                <button className="bg-gray-50 p-1 rounded-full text-text-secondary hover:bg-gray-100">
                   <ChevronRight size={12} />
                </button>
            </div>
         </div>

         {/* 2. Best Deal (Black Card) - Span 4 */}
         <div className="md:col-span-4 bg-black text-white p-3 rounded-xl shadow-lg flex flex-col justify-between h-[95px] relative overflow-hidden group">
            {/* Gradient Glow Effect */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex justify-between items-start z-10">
               <span className="text-[10px] font-medium text-gray-400">Best deal</span>
               <Star size={11} className="text-gray-500 fill-gray-500" />
            </div>
            <div className="z-10">
               <div className="text-xl font-bold mb-2">$42,300</div>
               <div className="flex items-center justify-between">
                  <span className="text-[9px] text-gray-400 font-medium">Rolf Inc.</span>
                  <button className="size-5 bg-white/10 hover:bg-white text-black rounded-full flex items-center justify-center transition-colors">
                     <ChevronRight size={10} className="text-white group-hover:text-black transition-colors" />
                  </button>
               </div>
            </div>
         </div>

         {/* 3. Small Metrics - Span 4 (Container for 3 small columns) */}
         <div className="md:col-span-4 grid grid-cols-3 gap-2.5">
             
             {/* Deals */}
             <div className="bg-white rounded-xl border border-border/60 shadow-sm flex flex-col items-center justify-center py-2 gap-0.5 h-[95px]">
                <span className="text-[9px] font-bold text-text-secondary">Deals</span>
                <span className="bg-gray-100 text-text-secondary text-[9px] font-bold px-1.5 py-0.5 rounded-full">256</span>
                <div className="flex items-center gap-0.5 text-[9px] font-bold text-text-primary mt-0.5">
                   <ArrowUp size={9} /> 5
                </div>
             </div>

             {/* Value (Pink Highlight) */}
             <div className="bg-white rounded-xl border-2 border-brand/20 shadow-sm flex flex-col items-center justify-center py-2 gap-0.5 h-[95px]">
                <span className="text-[9px] font-bold text-brand">Value</span>
                <span className="bg-brand text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">528k</span>
                <div className="flex items-center gap-0.5 text-[9px] font-bold text-text-primary mt-0.5">
                   <ArrowUp size={9} /> 7.9%
                </div>
             </div>

             {/* Win rate */}
             <div className="bg-white rounded-xl border border-border/60 shadow-sm flex flex-col items-center justify-center py-2 gap-0.5 h-[95px]">
                <span className="text-[9px] font-bold text-text-secondary">Win rate</span>
                <span className="bg-gray-100 text-text-secondary text-[9px] font-bold px-1.5 py-0.5 rounded-full">44%</span>
                <div className="flex items-center gap-0.5 text-[9px] font-bold text-text-primary mt-0.5">
                   <ArrowUp size={9} /> 1.2%
                </div>
             </div>
         </div>

      </div>
    </div>
  );
};

export default DashRevenue;
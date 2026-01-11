import React from 'react';
import { 
  Dribbble, Instagram, Chrome, Filter, 
  ShoppingBag, MoreHorizontal, ArrowDown
} from 'lucide-react';

const GridFilters = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      {/* --- CARD 1: Platform List --- */}
      <div className="bg-gray-100 p-4 rounded-xl border border-border/60 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-white hover:bg-gray-50 border border-border transition">
            <MoreHorizontal size={14} className="text-text-secondary" />
            <ArrowDown size={14} className="text-text-secondary" />
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border text-[10px] font-bold text-text-secondary hover:bg-gray-50 transition">
            Filters <Filter size={11} />
          </button>
        </div>

        {/* List */}
        <div className="flex flex-col gap-2">
          <PlatformRow 
            icon={Dribbble} color="text-pink-500" 
            name="Dribbble" value="$156,841" percent="28.1%"
          />
          <PlatformRow 
            icon={Instagram} color="text-purple-500" 
            name="Instagram" value="$44,072" percent="28.1%"
          />
          <PlatformRow 
            icon={ShoppingBag} color="text-blue-500" 
            name="Behance" value="$22,114" percent="14.1%"
          />
          <PlatformRow 
            icon={Chrome} color="text-yellow-500" 
            name="Google" value="$11,135" percent="7.1%"
          />
        </div>
      </div>

      {/* --- CARD 2: Vertical Bar Chart --- */}
      <div className="bg-gray-100 p-4 rounded-xl border border-border/60 shadow-sm flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <button className="flex items-center gap-1 px-2 py-1 rounded-full bg-white hover:bg-gray-50 border border-border transition">
            <MoreHorizontal size={14} className="text-text-secondary" />
            <ArrowDown size={14} className="text-text-secondary" />
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border text-[10px] font-bold text-text-secondary hover:bg-gray-50 transition">
            Filters <Filter size={11} />
          </button>
        </div>

        {/* Chart Area */}
        <div className="flex-1 flex items-end justify-between px-0 gap-1 pb-2 min-h-[170px]">
          <BarColumn icon={ShoppingBag} color="text-blue-500" height="h-28"/>
          <BarColumn icon={Dribbble} color="text-pink-500" height="h-36"/>
          <BarColumn icon={Chrome} color="text-yellow-500" height="h-20"/>
          <BarColumn icon={Instagram} color="text-purple-500" height="h-28"/>
          <BarColumn icon={ShoppingBag} color="text-gray-800" height="h-16"/>
        </div>

        {/* Footer Text */}
        <div className="mt-3">
          <div className="text-[10px] font-bold text-text-secondary">Deals amount</div>
          <div className="text-[9px] font-medium text-text-secondary/60 flex items-center gap-1 cursor-pointer hover:text-text-secondary">
            by referrer category <MoreHorizontal size={9} />
          </div>
        </div>
      </div>

    </div>
  );
};

// --- Helper Components ---

const PlatformRow = ({ icon: Icon, color, name, value, percent }) => (
  <div className="flex items-center justify-between w-full px-2 py-3 rounded-lg bg-white group cursor-pointer transition">
    <div className="flex items-center gap-2">
      <Icon size={18} strokeWidth={2.2} className={`${color}`} />
      <span className="text-xs font-bold text-text-primary">{name}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-xs font-bold text-text-primary">{value}</span>
      <span className="text-[10px] font-bold text-text-secondary bg-gray-100 px-1.5 py-0.5 rounded">{percent}</span>
    </div>
  </div>
);

const BarColumn = ({ icon: Icon, color, height }) => (
  <div className="flex flex-col items-center w-full">
    <div className={`w-10 ${height} bg-white rounded-lg flex flex-col items-center shadow-sm border border-border relative`}>
      {/* Icon at top inside the thick bar */}
      <div className="pt-1 pb-1">
        <Icon size={20} strokeWidth={2.3} className={color} />
      </div>
      {/* Fill space (acts as the rest of the bar) */}
      <div className="flex-1"></div>
    </div>
  </div>
);

export default GridFilters;
import React from 'react';
import { 
  Plus, Settings2, Download, Upload, 
  ChevronDown
} from 'lucide-react';
import { Avatar } from '../../../components/ui/Avatar';

const DashHeader = () => {
  return (
    <div className="space-y-4 w-full">
      {/* --- Row 1: User Icons & Actions --- */}
      <div className="flex items-center justify-between gap-4 w-full">
        {/* Left: User Avatars */}
        <div className="flex items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
          {/* Add Button */}
          <button className="flex-none size-9 rounded-full border border-dashed border-gray-300 flex items-center justify-center text-text-secondary hover:border-brand hover:text-brand transition-colors bg-transparent">
            <Plus size={18} />
          </button>

          {/* User Pills */}
          <div className="flex items-center gap-2">
             <UserPill name="Armin A." src="https://i.pravatar.cc/150?u=Armin" />
             <UserPill name="Eren Y." src="https://i.pravatar.cc/150?u=Eren" />
             <UserPill name="Mikasa A." src="https://i.pravatar.cc/150?u=Mikasa" />
             
             {/* Company Icon */}
             <div className="flex-none size-7 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm">
                C
             </div>
          </div>
        </div>

        {/* Right: Action Icons (from Row 2 now) */}
        <div className="flex items-center gap-1 shrink-0">
          <ActionIcon icon={Settings2} />
          <ActionIcon icon={Download} />
          <ActionIcon icon={Upload} />
        </div>
      </div>

      {/* --- Row 2: Title, Timeframe & Controls --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
        {/* Left: Title */}
        <div>
          <h1 className="text-4xl font-bold text-gray-300 tracking-tight select-none">
            New report
          </h1>
        </div>

        {/* Right: Timeframe Switch & Date Picker (Actions & Divider removed) */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Timeframe Switch */}
          <div className="flex items-center gap-2 cursor-pointer group">
            {/* Custom Toggle Switch */}
            <div className="w-9 h-5 bg-text-primary rounded-full relative transition-colors">
              <div className="absolute left-1 top-1 size-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform"></div>
            </div>
            <span className="text-sm font-semibold text-text-primary whitespace-nowrap">Timeframe</span>
          </div>

          {/* Date Picker Button */}
          <button className="flex items-center gap-2 bg-transparent hover:bg-white border border-transparent hover:border-border px-3 py-1.5 rounded-lg text-sm font-bold text-text-primary transition-all whitespace-nowrap">
            Sep 1 – Nov 30, 2023 
            <ChevronDown size={14} className="text-text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};


const UserPill = ({ name, src }) => (
  <div className="flex-none flex items-center gap-2 bg-white pl-1 pr-3 py-1 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
    <Avatar src={src} size="sm" />
    <span className="text-xs font-bold text-text-primary whitespace-nowrap">{name}</span>
  </div>
);

const ActionIcon = ({ icon: Icon }) => (
  <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-white rounded-full transition-all">
    <Icon size={18} strokeWidth={2} />
  </button>
);

export default DashHeader;
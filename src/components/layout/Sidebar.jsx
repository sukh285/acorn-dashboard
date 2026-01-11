import React from 'react';
import { 
  Home, Layers, Settings, Bell, 
  ChevronDown, Star, Clock, PieChart, 
  Folder, MessageSquare, Edit3, Command,
  LayoutDashboard 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex h-full flex-none z-20">
      {/* 1. ICON RAIL (Leftmost Strip) */}
      <div className="w-16 flex flex-col items-center py-6 gap-6">
        {/* Logo */}
        <div className="size-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-black/20">
          C
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col gap-4 w-full px-3">
          <RailIcon icon={Home} />
          <RailIcon icon={Layers} active />
          <RailIcon icon={MessageSquare} />
          <RailIcon icon={Command} />
          <RailIcon icon={Edit3} />
        </div>

        <div className="mt-auto pb-4">
           <RailIcon icon={Settings} />
        </div>
      </div>

      {/* 2. NAVIGATION PANEL (Tree Menu) */}
      <div className="w-64 flex flex-col py-6 px-2 hidden md:flex">
        {/* Org Switcher */}
        <div className="flex items-center justify-between mb-8 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition mx-2">
          <span className="font-bold text-sm text-text-primary">Codename.com</span>
          <ChevronDown size={16} className="text-text-secondary" />
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto space-y-6 px-2">
          <MenuSection title="">
            <MenuItem icon={Star} label="Starred" />
            <MenuItem icon={Clock} label="Recent" />
            <MenuItem icon={Layers} label="Sales list" />
            <MenuItem icon={PieChart} label="Goals" />
            <MenuItem icon={LayoutDashboard} label="Dashboard" active />
          </MenuSection>

          <MenuSection title="Codename">
            <MenuItem icon={Folder} label="Shared with me" />
            <div className="pl-8 space-y-1 mt-1 border-l border-border/40 ml-4">
              <SubItem label="Cargo2go" />
              <SubItem label="Cloudz3r" badge="2" />
              <SubItem label="Idioma" />
              <SubItem label="Syllables" />
              <SubItem label="x-0b" />
            </div>
          </MenuSection>

          <MenuSection title="Reports">
            <MenuItem icon={Folder} label="Share with me" />
            <MenuItem icon={Folder} label="My reports" isOpen>
                 <div className="pl-8 space-y-1 mt-1 border-l border-border/40 ml-4">
                    <SubItem label="Emails received" />
                    <SubItem label="Deal duration" />
                    <SubItem label="New report" activeText />
                    <SubItem label="Analytics" badge="7" />
                 </div>
            </MenuItem>
          </MenuSection>
        </div>

        <div className="mt-4 pt-4 px-4">
            <div className="text-xs font-medium text-text-secondary flex items-center gap-2 cursor-pointer hover:text-text-primary opacity-70 hover:opacity-100 transition">
                <Folder size={14} /> Manage folders
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---

const RailIcon = ({ icon: Icon, active }) => (
  <button className={`p-2.5 rounded-xl transition-all duration-200 group flex justify-center ${active ? 'bg-brand text-white shadow-lg shadow-brand/30' : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'}`}>
    <Icon size={20} strokeWidth={2} />
  </button>
);

const MenuSection = ({ title, children }) => (
  <div>
    {title && <h3 className="text-[11px] font-bold text-text-secondary/60 mb-2 px-2 uppercase tracking-wider">{title}</h3>}
    <div className="space-y-0.5">{children}</div>
  </div>
);

const MenuItem = ({ icon: Icon, label, active, isOpen, children }) => (
  <div>
    <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${active ? 'bg-gray-100/80 text-text-primary' : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'}`}>
      <div className="flex items-center gap-3">
        {Icon && <Icon size={18} strokeWidth={2} />}
        <span>{label}</span>
      </div>
      {/* If active, show a small dot instead of full bar to keep it minimal */}
      {isOpen && <ChevronDown size={14} />}
    </div>
    {children}
  </div>
);

const SubItem = ({ label, badge, activeText }) => (
  <div className={`flex items-center justify-between py-1.5 px-3 text-[13px] cursor-pointer rounded-md transition-colors ${activeText ? 'text-brand font-semibold bg-brand/5' : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'}`}>
    <span>{label}</span>
    {badge && <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${activeText ? 'bg-brand text-white' : 'bg-brand text-white'}`}>{badge}</span>}
  </div>
);

export default Sidebar;
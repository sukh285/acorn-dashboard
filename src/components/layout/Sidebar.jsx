import React from 'react';
import { 
  Home, Layers, Settings, Search, Bell, 
  ChevronDown, Star, Clock, PieChart, 
  Folder, MessageSquare, Edit3, Command 
} from 'lucide-react';


import { LayoutDashboard as LayoutDashboardIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex h-screen sticky top-0">
      {/* 1. ICON RAIL (Leftmost Strip) */}
      <div className="w-16 bg-surface border-r border-border flex flex-col items-center py-6 gap-6 z-20">
        {/* Logo */}
        <div className="size-10 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl">
          C
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col gap-4 w-full px-3">
          <RailIcon icon={Home} />
          <RailIcon icon={Layers} active /> {/* Pink active state */}
          <RailIcon icon={MessageSquare} />
          <RailIcon icon={Command} />
          <RailIcon icon={Edit3} />
        </div>

        <div className="mt-auto pb-4">
           <RailIcon icon={Settings} />
        </div>
      </div>

      {/* 2. NAVIGATION PANEL (Tree Menu) */}
      <div className="w-64 bg-surface border-r border-border flex flex-col py-6 px-4 hidden md:flex">
        {/* Org Switcher */}
        <div className="flex items-center justify-between mb-8 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
          <span className="font-semibold text-sm">Codename.com</span>
          <ChevronDown size={16} className="text-text-secondary" />
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto space-y-6">
          <MenuSection title="">
            <MenuItem icon={Star} label="Starred" />
            <MenuItem icon={Clock} label="Recent" />
            <MenuItem icon={Layers} label="Sales list" />
            <MenuItem icon={PieChart} label="Goals" />
            <MenuItem icon={LayoutDashboardIcon} label="Dashboard" active />
          </MenuSection>

          <MenuSection title="Codename">
            <MenuItem icon={Folder} label="Shared with me" />
            <div className="pl-8 space-y-2 mt-2">
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
                 <div className="pl-9 space-y-2 mt-2 border-l border-border ml-2">
                    <SubItem label="Emails received" />
                    <SubItem label="Deal duration" />
                    <SubItem label="New report" activeText />
                    <SubItem label="Analytics" badge="7" />
                 </div>
            </MenuItem>
          </MenuSection>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
            <div className="text-xs font-medium text-text-secondary flex items-center gap-2 cursor-pointer hover:text-text-primary">
                <Folder size={14} /> Manage folders
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components for Clean Code ---

// The Icon on the far left rail
const RailIcon = ({ icon: Icon, active }) => (
  <button className={`p-2.5 rounded-xl transition-all duration-200 group flex justify-center ${active ? 'bg-brand text-white shadow-lg shadow-brand/30' : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'}`}>
    <Icon size={20} strokeWidth={2} />
  </button>
);

// Menu Section Wrapper
const MenuSection = ({ title, children }) => (
  <div>
    {title && <h3 className="text-xs font-semibold text-text-secondary mb-3 uppercase tracking-wider">{title}</h3>}
    <div className="space-y-1">{children}</div>
  </div>
);

// Main Menu Item
const MenuItem = ({ icon: Icon, label, active, isOpen, children }) => (
  <div>
    <div className={`flex items-center justify-between p-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${active ? 'bg-gray-100 text-text-primary' : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'}`}>
      <div className="flex items-center gap-3">
        {Icon && <Icon size={18} />}
        <span>{label}</span>
      </div>
      {active && <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>}
      {isOpen && <ChevronDown size={14} />}
    </div>
    {children}
  </div>
);

// Sub Menu Item
const SubItem = ({ label, badge, activeText }) => (
  <div className={`flex items-center justify-between py-1 px-2 text-sm cursor-pointer transition-colors ${activeText ? 'text-brand font-medium' : 'text-text-secondary hover:text-text-primary'}`}>
    <span>{label}</span>
    {badge && <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${activeText ? 'bg-brand text-white' : 'bg-brand text-white'}`}>{badge}</span>}
  </div>
);


export default Sidebar;
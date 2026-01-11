import React from 'react';
import { 
  Home, Layers, Settings, Bell, 
  ChevronDown, Star, Clock, PieChart, 
  Folder, MessageSquare, Edit3, Command,
  LayoutDashboard, Plus, ChevronUp
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex h-full flex-none z-20 bg-surface">
      {/* 1. ICON RAIL (Leftmost Strip) */}
      <div className="w-14 flex flex-col items-center py-4 gap-3">
        {/* Logo */}
        <div className="size-9 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg shadow-black/20 mb-2">
          C
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col gap-2 w-full px-2">
          <RailIcon icon={Home} />
          <RailIcon icon={Layers} active />
          <RailIcon icon={MessageSquare} />
          <RailIcon icon={Command} />
          <RailIcon icon={Edit3} />
        </div>

        <div className="mt-auto flex flex-col gap-2 pb-2">
           <RailIcon icon={Bell} badge />
           <RailIcon icon={Settings} />
        </div>
      </div>

      {/* 2. NAVIGATION PANEL (Tree Menu) */}
      <div className="w-56 flex flex-col py-4 px-3 hidden md:flex">
        {/* Org Switcher */}
        <div className="flex items-center justify-between mb-4 cursor-pointer hover:bg-white p-2 rounded-lg transition">
          <span className="font-semibold text-sm text-gray-900">Codename.com</span>
          <ChevronDown size={14} className="text-gray-500" />
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto space-y-4">
          <MenuSection title="">
            <MenuItem icon={Star} label="Starred" />
            <MenuItem icon={Clock} label="Recent" />
            <MenuItem icon={Layers} label="Sales list" />
            <MenuItem icon={PieChart} label="Goals" />
            <MenuItem icon={LayoutDashboard} label="Dashboard" action />
          </MenuSection>

          <MenuSection title="Codename">
            <MenuItem icon={Folder} label="Shared with me" isOpen>
                 <div className="pl-6 space-y-0.5 mt-0.5 border-l border-gray-200 ml-3">
                    <SubItem label="Cargo2go" />
                    <SubItem label="Cloudz3r" badge="2" />
                    <SubItem label="Idioma" />
                    <SubItem label="Syllables" />
                    <SubItem label="x-0b" />
                 </div>
            </MenuItem>
          </MenuSection>

          <MenuSection title="Reports">
            <MenuItem icon={Folder} label="Share with me" isOpen>
                 <div className="pl-6 space-y-0.5 mt-0.5 border-l border-gray-200 ml-3">
                    <SubItem label="Deals by user" />
                    <SubItem label="Deal duration" />
                 </div>
            </MenuItem>
            <MenuItem icon={Folder} label="My reports" isOpen>
                 <div className="pl-6 space-y-0.5 mt-0.5 border-l border-gray-200 ml-3">
                    <SubItem label="Emails received" />
                    <SubItem label="Deal duration" />
                    <SubItem label="New report" activeText />
                    <SubItem label="Analytics" badge="7" />
                 </div>
            </MenuItem>
          </MenuSection>
        </div>

        <div className="mt-3 pt-3 px-2 border-t border-gray-200">
            <div className="text-xs font-medium text-gray-400 flex items-center gap-2 cursor-pointer hover:text-gray-600 transition">
                <Folder size={13} /> Manage folders
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---

const RailIcon = ({ icon: Icon, active, badge }) => (
  <button className={`relative p-2 rounded-lg transition-all duration-200 group flex justify-center ${active ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30' : 'text-gray-500 hover:bg-white hover:text-gray-900'}`}>
    <Icon size={18} strokeWidth={2} />
    {badge && (
      <span className="absolute -top-0.5 -right-0.5 size-2 bg-pink-500 rounded-full border border-gray-50"></span>
    )}
  </button>
);

const MenuSection = ({ title, children }) => (
  <div>
    {title && <h3 className="text-[10px] font-semibold text-gray-400 mb-1.5 px-2 uppercase tracking-wide">{title}</h3>}
    <div className="space-y-0.5">{children}</div>
  </div>
);

const MenuItem = ({ icon: Icon, label, action, isOpen, children }) => (
  <div>
    <div className={`flex items-center justify-between px-2 py-1.5 rounded-lg cursor-pointer text-xs font-medium transition-colors ${action ? 'bg-white text-gray-900' : 'text-gray-600 hover:bg-white hover:text-gray-900'}`}>
      <div className="flex items-center gap-2.5">
        {Icon && <Icon size={15} strokeWidth={2} />}
        <span>{label}</span>
      </div>
      <div className="flex items-center gap-1">
        {action && <Plus size={12} className="text-gray-400" />}
        {isOpen && <ChevronUp size={12} className="text-gray-400" />}
      </div>
    </div>
    {children}
  </div>
);

const SubItem = ({ label, badge, activeText }) => (
  <div className={`flex items-center justify-between py-1 px-2 text-xs cursor-pointer rounded-md transition-colors ${activeText ? 'text-pink-500 font-semibold' : 'text-gray-600 hover:text-gray-900 hover:bg-white'}`}>
    <span>{label}</span>
    {badge && <span className="text-[9px] px-1.5 py-0.5 rounded-md font-bold bg-pink-500 text-white">{badge}</span>}
  </div>
);

export default Sidebar;
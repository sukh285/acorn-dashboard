import React from 'react';
import { Search, Plus, SlidersHorizontal, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-8 bg-surface flex-none z-10">
        {/* Left: Search Bar */}
        <div className="flex items-center w-full max-w-lg">
            <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-brand transition-colors" size={18} />
                <input 
                    type="text" 
                    placeholder='Try searching "insights"' 
                    className="w-full bg-gray-100/50 border-none focus:bg-white focus:ring-2 focus:ring-brand/10 pl-11 pr-4 py-2.5 rounded-full text-sm outline-none transition-all placeholder:text-text-secondary/70"
                />
            </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center justify-center size-10 bg-white rounded-full border border-border hover:border-brand/30 text-text-primary transition-all">
                <SlidersHorizontal size={18} strokeWidth={2} />
            </button>
            
            <div className="flex items-center -space-x-3 mx-2">
                <img src="https://i.pravatar.cc/150?u=1" alt="User" className="size-9 rounded-full border-2 border-white shadow-sm z-10" />
                <img src="https://i.pravatar.cc/150?u=2" alt="User" className="size-9 rounded-full border-2 border-white shadow-sm" />
            </div>

            <button className="size-10 bg-brand text-white rounded-full flex items-center justify-center shadow-lg shadow-brand/30 hover:bg-brand-hover hover:scale-105 active:scale-95 transition-all">
                <Plus size={22} />
            </button>
        </div>
    </header>
  );
};

export default Header;
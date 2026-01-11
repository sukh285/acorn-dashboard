import React from 'react';
import { Search, Plus, SlidersHorizontal, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-8 bg-bg-main sticky top-0 z-10">
        {/* Left: Search Bar */}
        <div className="flex items-center w-full max-w-md">
            <div className="relative w-full group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-brand transition-colors" size={18} />
                <input 
                    type="text" 
                    placeholder='Try searching "insights"' 
                    className="w-full bg-surface border border-transparent focus:border-brand/20 focus:ring-4 focus:ring-brand/5 focus:bg-white pl-10 pr-4 py-2.5 rounded-full text-sm outline-none transition-all shadow-sm"
                />
            </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
             {/* Mobile Menu Toggle (Visible only on small screens) */}
            <button className="md:hidden p-2 bg-surface rounded-full shadow-sm text-text-primary">
                <Menu size={20} />
            </button>

            <button className="hidden md:flex items-center justify-center size-10 bg-surface rounded-full shadow-sm text-text-primary hover:bg-gray-50 border border-transparent hover:border-border transition-all">
                <SlidersHorizontal size={18} />
            </button>
            
            <div className="flex items-center -space-x-2">
                <img src="https://i.pravatar.cc/150?u=1" alt="User" className="size-9 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/150?u=2" alt="User" className="size-9 rounded-full border-2 border-white" />
            </div>

            <button className="size-10 bg-brand text-white rounded-full flex items-center justify-center shadow-lg shadow-brand/30 hover:bg-brand-hover transition-colors">
                <Plus size={22} />
            </button>
        </div>
    </header>
  );
};

export default Header;
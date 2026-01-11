import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-surface overflow-hidden">
      {/* 1. Fixed Sidebar (White) */}
      <Sidebar />
      
      {/* 2. Main Area (Header + Content) */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Fixed Header (White) */}
        <Header />
        
        {/* 3. Floating Content Wrapper */}
        <div className="flex-1 bg-surface relative m-2">
            <main className="absolute inset-0 bg-bg-main rounded-3xl overflow-y-auto p-8 no-scrollbar border-white/50 shadow-inner">
                {children || <Outlet />}
            </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
import React from 'react';
import DashHeader from './sections/DashHeader';

const Dashboard = () => {
  return (
    <div className="space-y-8 pb-10 max-w-[1400px] mx-auto">
      {/* 1. Header Section */}
      <DashHeader />

      {/* 2. Main Content Placeholder */}
      <div className="border-2 border-dashed border-gray-200 rounded-2xl h-96 flex items-center justify-center text-text-secondary">
        Next: Revenue & KPI Cards
      </div>
    </div>
  );
};

export default Dashboard;
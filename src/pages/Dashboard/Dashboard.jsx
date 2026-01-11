import React from 'react';
import DashHeader from './sections/DashHeader';
import DashRevenue from './sections/DashRevenue';

const Dashboard = () => {
  return (
    <div className="space-y-6 pb-10 max-w-[1400px] mx-auto">
      {/* 1. Header Section */}
      <DashHeader />

      {/* 2. Revenue & Cards Row */}
      <DashRevenue />

      {/* 3. Placeholder for Next Steps */}
      <div className="h-4 w-full"></div> 
    </div>
  );
};

export default Dashboard;
import React from 'react';
import DashHeader from './sections/DashHeader';
import DashRevenue from './sections/DashRevenue';
import Grid from './Grid';

const Dashboard = () => {
  return (
    <div className="space-y-6 pb-10 max-w-[1400px] mx-auto">
      {/* 1. Header Section */}
      <DashHeader />

      {/* 2. Revenue & Cards Row */}
      <DashRevenue />

      {/* 3. Grid Section (New) */}
      <Grid />
    </div>
  );
};

export default Dashboard;
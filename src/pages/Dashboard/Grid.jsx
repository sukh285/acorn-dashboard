import React from 'react';
import GridFilters from './sections/GridFilters';

const Grid = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
      
      {/* --- LEFT COLUMN --- */}
      <div className="flex flex-col gap-6">
        
        {/* 1. Top Row: Filters & Vertical Chart */}
        <GridFilters />
        
        {/* 2. Bottom Row: Platform Value Chart */}
        <div className="bg-white rounded-3xl h-64 border border-border/60 shadow-sm flex items-center justify-center text-text-secondary">
           Next: Platform Value Chart
        </div>

      </div>

      {/* --- RIGHT COLUMN --- */}
      {/* This will hold the tall Sales Dynamic section */}
      <div className="bg-white rounded-3xl border border-border/60 shadow-sm h-full min-h-[500px] flex items-center justify-center text-text-secondary">
          Next: Sales Dynamic Column
      </div>

    </div>
  );
};

export default Grid;
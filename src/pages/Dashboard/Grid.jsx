import React from 'react';
import GridFilters from './sections/GridFilters';
import GridPlatform from './sections/GridPlatform';
import GridSales from './sections/GridSales'; // Import here

const Grid = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
      
      {/* --- LEFT COLUMN --- */}
      <div className="flex flex-col gap-6">
        <GridFilters />
        <GridPlatform />
      </div>

      {/* --- RIGHT COLUMN --- */}
      <div className="h-full">
         <GridSales />
      </div>

    </div>
  );
};

export default Grid;
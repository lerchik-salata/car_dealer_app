'use client';

import React from 'react';

interface ModelYearSelectProps {
  currentYear: number;
  selectedYear: string;
  onSelectYear: (year: string) => void;
}

const ModelYearSelect: React.FC<ModelYearSelectProps> = ({
  currentYear,
  selectedYear,
  onSelectYear,
}) => {
  return (
    <div className="mb-4 w-full max-w-lg">
      <label className="block text-lg mb-2 text-white">Model Year:</label>
      <select
        className="w-full p-3 border border-red-700 rounded bg-black text-white focus:outline-none select-glow"
        value={selectedYear}
        onChange={(e) => onSelectYear(e.target.value)}
      >
        <option value="" className="text-white">
          -- Select a Year --
        </option>
        {Array.from(
          { length: currentYear - 2015 + 1 },
          (_, i) => currentYear - i,
        ).map((year) => (
          <option key={year} value={year.toString()} className="text-white">
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModelYearSelect;

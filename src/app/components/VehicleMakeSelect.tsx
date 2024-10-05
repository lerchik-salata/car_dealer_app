'use client';

import React from 'react';
import { VehicleMake } from '../types/types';

interface VehicleMakeSelectProps {
  makes: VehicleMake[];
  selectedMake: string;
  onSelectMake: (make: string) => void;
  loading: boolean;
}

const VehicleMakeSelect: React.FC<VehicleMakeSelectProps> = ({
  makes,
  selectedMake,
  onSelectMake,
  loading,
}) => {
  return (
    <div className="mb-4 w-full max-w-lg">
      <label className="block text-lg mb-2 text-white">Vehicle Make:</label>
      <select
        className={`w-full p-3 border border-red-700 rounded bg-black text-white focus:outline-none select-glow ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        value={selectedMake}
        onChange={(e) => onSelectMake(e.target.value)}
        disabled={loading}
      >
        <option value="" className="text-white">
          {loading ? 'Loading...' : '-- Select a Make --'}
        </option>
        {!loading &&
          makes.map((make) => (
            <option
              key={make.MakeId}
              value={make.MakeId.toString()}
              className="text-white"
            >
              {make.MakeName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default VehicleMakeSelect;

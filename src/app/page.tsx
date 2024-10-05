'use client';

import React, { useState, useEffect, Suspense } from 'react';
import VehicleMakeSelect from './components/VehicleMakeSelect';
import ModelYearSelect from './components/ModelYearSelect';
import NextButton from './components/NextButton';
import { VehicleMake } from './types/types';
import { apiUrl } from '@/config';

const FilterPage: React.FC = () => {
  const [makes, setMakes] = useState<VehicleMake[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [currentYear] = useState<number>(new Date().getFullYear());
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVehicleMakes = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/vehicles/GetMakesForVehicleType/car?format=json`,
        );
        const data = await response.json();
        console.log('Fetched makes:', data.Results);
        setMakes(data.Results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching vehicle makes:', error);
        setLoading(false);
      }
    };

    fetchVehicleMakes();
  }, []);

  const isFormComplete: boolean = selectedMake !== '' && selectedYear !== '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl mb-8 text-white border-b-4 border-red-700 pb-2 uppercase tracking-wider">
        Select Vehicle Make and Model Year
      </h1>

      <Suspense fallback={<p>Loading...</p>}>
        <VehicleMakeSelect
          makes={makes}
          selectedMake={selectedMake}
          onSelectMake={setSelectedMake}
          loading={loading}
        />
      </Suspense>

      <ModelYearSelect
        currentYear={currentYear}
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
      />

      <NextButton
        isFormComplete={isFormComplete}
        href={`/result/${selectedMake}/${selectedYear}`}
      />
    </div>
  );
};

export default FilterPage;

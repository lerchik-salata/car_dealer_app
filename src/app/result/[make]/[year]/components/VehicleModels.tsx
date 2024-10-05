'use client';
import React, { Suspense } from 'react';
import { apiUrl } from '@/config';
import { VehicleModel } from '@/app/types/types';
import Loader from './Loader';
import ModelList from './ModelsList';

const fetchVehicleModels = async (
  make: string,
  year: number,
): Promise<VehicleModel[]> => {
  const response = await fetch(
    `${apiUrl}vehicles/GetModelsForMakeIdYear/makeId/${make}/modelyear/${year}?format=json`,
  );

  if (!response.ok) {
    throw new Error('Error fetching vehicle models.');
  }

  const data = await response.json();

  if (!data.Results) {
    throw new Error('No models found for this make and year.');
  }

  return data.Results;
};

const VehicleModels = ({ make, year }: { make: string; year: number }) => {
  const modelsPromise = fetchVehicleModels(make, year);

  return (
    <Suspense fallback={<Loader />}>
      <ModelList modelsPromise={modelsPromise} />
    </Suspense>
  );
};

export default VehicleModels;

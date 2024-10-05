import { VehicleMake } from '@/app/types/types';
import VehicleModels from './components/VehicleModels';
import { apiUrl } from '@/config';

export async function generateStaticParams() {
  const res = await fetch(
    `${apiUrl}vehicles/GetMakesForVehicleType/car?format=json`,
  );
  const data = await res.json();

  const makes: VehicleMake[] = data.Results;

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2015 + 1 }, (_, i) =>
    (currentYear - i).toString(),
  );

  const staticParams = makes.flatMap((make) =>
    years.map((year) => ({
      make: make.MakeName,
      year,
    })),
  );

  return staticParams.map((param) => ({
    params: {
      make: param.make,
      year: param.year,
    },
  }));
}

const ResultPage = ({ params }: { params: { make: string; year: number } }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl mb-8 text-white border-b-4 border-red-700 pb-2 uppercase tracking-wider">
        Vehicle Models for Make {params.make} and Year {params.year}
      </h1>
      <VehicleModels make={params.make} year={params.year} />
    </div>
  );
};

export default ResultPage;

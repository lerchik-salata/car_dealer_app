import { useEffect, useState } from 'react';
import Loader from './Loader';
import { VehicleModel } from '@/app/types/types';

const ModelList = ({
  modelsPromise,
}: {
  modelsPromise: Promise<VehicleModel[]>;
}) => {
  const [models, setModels] = useState<VehicleModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    modelsPromise
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [modelsPromise]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <ul className="w-full bg-gradient-to-br from-black to-red-700 max-w-md p-4 rounded shadow-md">
      {models.length > 0 ? (
        models.map((model) => (
          <li key={model.Model_Id} className="mb-2 border-b pb-2 text-white">
            {model.Model_Name}
          </li>
        ))
      ) : (
        <div>No models found for this make and year.</div>
      )}
    </ul>
  );
};

export default ModelList;

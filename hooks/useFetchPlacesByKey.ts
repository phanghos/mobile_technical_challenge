import { setPlacesForCity } from '@/domain/place/actions/setPlacesForCity';
import { useEffect } from 'react';
import { useFetchPlaces } from './useFetchPlaces';

export const useFetchPlacesByKey = (cityKey: string) => {
  const { loading, data, error, refetch } = useFetchPlaces();

  useEffect(() => {
    if (data) {
      setPlacesForCity(data, cityKey);
    }
  }, [data]);

  return {
    loading,
    error,
    refetch: async () => {
      await refetch();
    },
  };
};

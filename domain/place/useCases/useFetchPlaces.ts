import { GET_PLACES } from '@/data/graphql/queries';
import type { AllPlaces } from '@/domain/place/entities/AllPlaces';
import { setPlaces } from '@/domain/place/store/actions/setPlaces';
import { useFetch } from '@/hooks/useFetch';
import { useEffect } from 'react';

export const useFetchPlaces = () => {
  const { loading, data, error, refetch } = useFetch<AllPlaces>(GET_PLACES);

  useEffect(() => {
    if (data) {
      setPlaces(data.allPlaces);
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

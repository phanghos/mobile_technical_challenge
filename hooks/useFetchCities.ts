import { GET_CITIES } from '@/data/graphql/queries';
import { setCities } from '@/domain/city/actions/setCities';
import type { AllCities } from '@/domain/entities/AllCities';
import { useEffect } from 'react';
import { useFetch } from './useFetch';

export const useFetchCities = () => {
  const { loading, data, error, refetch } = useFetch<AllCities>(GET_CITIES);

  useEffect(() => {
    if (data) {
      setCities(data.allCities);
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

import type { AllCities } from '@/app/core/entities/AllCities';
import { GET_CITIES } from '@/app/graphql/queries';
import { setCities } from '@/domain/city/actions/setCities';
import { useEffect } from 'react';
import { useFetch } from './useFetch';

export const useFetchCities = () => {
  const result = useFetch<AllCities>(GET_CITIES);

  useEffect(() => {
    if (result.data) {
      setCities(result.data.allCities);
    }
  }, [result.data]);

  return {
    loading: result.loading,
    error: result.error,
    refetch: async () => {
      await result.refetch();
    },
  };
};

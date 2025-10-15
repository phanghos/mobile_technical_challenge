import { GET_CITIES } from '@/data/graphql/queries';
import type { AllCities } from '@/domain/city/entities/AllCities';
import { setCities } from '@/domain/city/store/actions/setCities';
import { useFetch } from '@/hooks/useFetch';
import { useEffect } from 'react';

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
    refetch,
  };
};

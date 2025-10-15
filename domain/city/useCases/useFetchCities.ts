import { GET_CITIES } from '@/data/graphql/queries';
import type { AllCities } from '@/domain/city/entities/AllCities';
import { setCities } from '@/domain/city/store/actions/setCities';
import { useFetch } from '@/hooks/useFetch';

export const useFetchCities = () => {
  const { loading, error, refetch } = useFetch<AllCities>(GET_CITIES, data => {
    setCities(data.allCities);
  });

  return {
    loading,
    error,
    refetch,
  };
};

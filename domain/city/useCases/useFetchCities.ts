import type { CityRaw } from '@/data/dtos/CityRaw';
import { GET_CITIES } from '@/data/graphql/queries';
import { setCities } from '@/domain/city/store/actions/setCities';
import { useFetch } from '@/hooks/useFetch';

export const useFetchCities = () => {
  const { loading, error, refetch } = useFetch<{ allCities: CityRaw[] }>(
    GET_CITIES,
    data => {
      setCities(data.allCities);
    },
  );

  return {
    loading,
    error,
    refetch,
  };
};

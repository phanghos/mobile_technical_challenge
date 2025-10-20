import { useFetch } from '@/core/hooks/useFetch';
import type { CityRaw } from '@/data/dtos/CityRaw';
import { GET_CITIES } from '@/data/graphql/queries';
import { setCities } from '@/domain/city/stores/actions/setCities';
import { citiesAdapter, CitiesAdapter } from '../adapters/citiesAdapter';

export const useFetchCities = (adaptCities: CitiesAdapter = citiesAdapter) => {
  const { loading, error, refetch } = useFetch<{ allCities: CityRaw[] }>(
    GET_CITIES,
    data => {
      setCities(adaptCities(data.allCities));
    },
  );

  return {
    loading,
    error,
    refetch,
  };
};

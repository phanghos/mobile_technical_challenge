import { GET_PLACES } from '@/data/graphql/queries';
import type { AllPlaces } from '@/domain/place/entities/AllPlaces';
import { setPlaces } from '@/domain/place/store/actions/setPlaces';
import { useFetch } from '@/hooks/useFetch';

export const useFetchPlaces = () => {
  const { loading, error, refetch } = useFetch<AllPlaces>(GET_PLACES, data => {
    setPlaces(data.allPlaces);
  });

  return {
    loading,
    error,
    refetch,
  };
};

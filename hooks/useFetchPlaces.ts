import { GET_PLACES } from '@/data/graphql/queries';
import type { AllPlaces } from '@/domain/entities/AllPlaces';
import { useFetch } from './useFetch';

export const useFetchPlaces = () => {
  const result = useFetch<AllPlaces>(GET_PLACES);

  return {
    ...result,
    data: result.data?.allPlaces,
  };
};

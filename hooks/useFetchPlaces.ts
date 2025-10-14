import type { AllPlaces } from '@/app/core/entities/AllPlaces';
import { GET_PLACES } from '@/app/graphql/queries';
import { useFetch } from './useFetch';

export const useFetchPlaces = () => {
  const result = useFetch<AllPlaces>(GET_PLACES);

  return {
    ...result,
    data: result.data?.allPlaces,
  };
};

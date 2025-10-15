import type { PlaceRaw } from '@/data/dtos/PlaceRaw';
import { GET_PLACES } from '@/data/graphql/queries';
import { setPlaces } from '@/domain/place/store/actions/setPlaces';
import { useFetch } from '@/hooks/useFetch';

export const useFetchPlaces = () => {
  const { loading, error, refetch } = useFetch<{ allPlaces: PlaceRaw[] }>(
    GET_PLACES,
    data => {
      setPlaces(data.allPlaces);
    },
  );

  return {
    loading,
    error,
    refetch,
  };
};

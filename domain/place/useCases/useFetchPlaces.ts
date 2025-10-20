import { useFetch } from '@/core/hooks/useFetch';
import type { PlaceRaw } from '@/data/dtos/PlaceRaw';
import { GET_PLACES } from '@/data/graphql/queries';
import { setPlaces } from '@/domain/place/store/actions/setPlaces';
import { placesAdapter, PlacesAdapter } from '../adapters/placesAdapter';

export const useFetchPlaces = (adaptPlaces: PlacesAdapter = placesAdapter) => {
  const { loading, error, refetch } = useFetch<{ allPlaces: PlaceRaw[] }>(
    GET_PLACES,
    data => {
      setPlaces(adaptPlaces(data.allPlaces));
    },
  );

  return {
    loading,
    error,
    refetch,
  };
};

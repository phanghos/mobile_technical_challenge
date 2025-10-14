import { PlacesMap } from '@/app/core/entities/PlacesMap';
import { PlacesUtils } from '@/app/core/utils/places';
import { UseFetchReturn } from './useFetch';
import { useFetchPlaces } from './useFetchPlaces';

export const useFetchPlacesByKey = (
  cityKey: string,
): UseFetchReturn<PlacesMap> => {
  const result = useFetchPlaces();

  return {
    ...result,
    data: PlacesUtils.getPlacesForCityByType(cityKey, result.data || []),
  };
};

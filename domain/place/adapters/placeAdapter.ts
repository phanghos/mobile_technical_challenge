import type { Place } from '@/domain/entities/Place';
import type { PlacesMap } from '@/domain/entities/PlacesMap';
import { PlacesUtils } from '@/shared/utils/places';

export const placeAdapter = (places: Place[], cityKey: string): PlacesMap => {
  return PlacesUtils.getPlacesForCityByType(cityKey, places);
};

export type PlaceAdapter = typeof placeAdapter;

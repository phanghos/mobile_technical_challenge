import type { Place } from '@/app/core/entities/Place';
import type { PlacesMap } from '@/app/core/entities/PlacesMap';
import { PlacesUtils } from '@/app/core/utils/places';

export const placeAdapter = (places: Place[], cityKey: string): PlacesMap => {
  return PlacesUtils.getPlacesForCityByType(cityKey, places || []);
};

export type PlaceAdapter = typeof placeAdapter;

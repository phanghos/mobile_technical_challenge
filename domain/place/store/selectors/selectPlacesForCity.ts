import type { PlaceStoreState } from '@/domain/place/store/usePlaceStore';
import { PlacesUtils } from '@/shared/utils/places';

export const selectPlacesForCity =
  (cityKey: string) => (state: PlaceStoreState) =>
    PlacesUtils.getPlacesForCityByType(cityKey, state.places);

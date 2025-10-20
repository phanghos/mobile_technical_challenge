import { usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { PlacesUtils } from '@/domain/place/utils/places';
import { useMemo } from 'react';

export const useSelectPlacesForCity = (cityKey: string) => {
  const places = usePlaceStore(s => s.places);

  return useMemo(
    () => PlacesUtils.getPlacesForCityByType(cityKey, places),
    [cityKey, places],
  );
};

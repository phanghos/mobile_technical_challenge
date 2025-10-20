import { getVisibleCities } from '@/domain/city/utils/getVisibleCities';
import { useMemo } from 'react';
import { useFavoriteCitiesFilterStore } from '../stores/useFavoriteCitiesFilterStore';
import { useFavoriteCitiesStore } from '../stores/useFavoriteCitiesStore';

export const useVisibleFavoriteCities = (searchQuery: string) => {
  const cities = useFavoriteCitiesStore(s => s.cities);
  const filters = useFavoriteCitiesFilterStore(s => s.selectedFilters);

  return useMemo(
    () => getVisibleCities(searchQuery, filters, Object.values(cities)),
    [searchQuery, filters, cities],
  );
};

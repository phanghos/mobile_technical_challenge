import { useCityFilterStore } from '@/domain/city/stores/useCityFilterStore';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import { getVisibleCities } from '@/domain/city/utils/getVisibleCities';
import { useMemo } from 'react';

export const useVisibleCities = (searchQuery: string) => {
  const cities = useCityStore(s => s.cities);
  const filters = useCityFilterStore(s => s.selectedFilters);

  return useMemo(
    () => getVisibleCities(searchQuery, filters, cities),
    [searchQuery, filters, cities],
  );
};

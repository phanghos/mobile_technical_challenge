import { createSearchFunction } from '@/core/utils/createSearchFunction';
import type { City } from '../entities/City';

export const searchCities = createSearchFunction<City>((searchQuery, items) => {
  if (!searchQuery) {
    return items;
  }

  return items.filter(it =>
    it.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
});

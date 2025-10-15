import type { City } from '@/domain/city/entities/City';
import type { Filter } from '@/domain/filter/entities/Filter';

type FilterFn<T> = (filters: T[]) => (city: City) => boolean;

export const filterByLanguage: FilterFn<string> = languages => city => {
  if (!languages.length) return true; // no filter applied
  return languages.some(lang => city.fullLanguage === lang);
};

export const filterByCurrency: FilterFn<string> = currencies => city => {
  if (!currencies.length) return true; // no filter applied
  return currencies.includes(city.currency);
};

export const applyFiltersToCities = (
  filters: Filter,
  cities: City[],
): City[] => {
  const atomicFilters = [
    filterByLanguage(filters.language),
    filterByCurrency(filters.currency),
  ];

  /**
   * filter combinations
   *
   * using every: must satisfy all filters ✅
   * using some:  must satisfy ANY of the filters
   */
  return cities.filter(city => atomicFilters.every(f => f(city)));
};

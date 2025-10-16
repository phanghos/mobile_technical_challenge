import type { City } from '@/domain/city/entities/City';
import type { Filter } from '@/domain/filter/entities/Filter';
import { filterByCurrency } from './filterByCurrency';
import { filterByLanguage } from './filterByLanguage';

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

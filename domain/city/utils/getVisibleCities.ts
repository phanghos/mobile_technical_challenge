import type { CityFilters } from '@/domain/city/entities/CityFilters';
import { applyFiltersToCities } from '@/domain/city/utils/applyFiltersToCities';
import type { City } from '../entities/City';
import { searchCities } from './searchCities';

export const getVisibleCities = (
  searchQuery: string,
  filters: CityFilters,
  cities: City[],
  /**
   * the way we compose the functions is important here:
   *
   * first filter the cities based on the selected filters (e.g. language, region, population).
   * then search within the filtered subset.
   */
): City[] => searchCities(searchQuery, applyFiltersToCities(filters, cities));

export type ComputeVisibleCities = typeof getVisibleCities;

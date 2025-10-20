import { createSetSelectedFiltersFunction } from '@/core/filters/createSetSelectedFiltersFunction';
import type { CityFilters } from '../../entities/CityFilters';
import { useCityFilterStore } from '../useCityFilterStore';

export const setSelectedCitiesFilters =
  createSetSelectedFiltersFunction<CityFilters>(useCityFilterStore);

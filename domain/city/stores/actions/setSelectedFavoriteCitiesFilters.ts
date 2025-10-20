import { createSetSelectedFiltersFunction } from '@/core/filters/createSetSelectedFiltersFunction';
import type { CityFilters } from '../../entities/CityFilters';
import { useFavoriteCitiesFilterStore } from '../useFavoriteCitiesFilterStore';

export const setSelectedFavoriteCitiesFilters =
  createSetSelectedFiltersFunction<CityFilters>(useFavoriteCitiesFilterStore);

import { createFilterStore } from '@/core/store/createFilterStore';
import { CityFilters } from '../entities/CityFilters';

export const useFavoriteCitiesFilterStore = createFilterStore<CityFilters>({
  language: [],
  currency: [],
});

export type UseFavoriteCitiesFilterStore = typeof useFavoriteCitiesFilterStore;

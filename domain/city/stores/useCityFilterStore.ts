import { createFilterStore } from '@/core/store/createFilterStore';
import { CityFilters } from '../entities/CityFilters';

export const useCityFilterStore = createFilterStore<CityFilters>({
  language: [],
  currency: [],
});

export type CityFilterStore = typeof useCityFilterStore;

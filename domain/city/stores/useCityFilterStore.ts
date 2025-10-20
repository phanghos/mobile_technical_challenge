import { createFilterStore } from '@/core/store/createFilterStore';
import { CityFilters } from '../entities/CityFilters';

export const useCityFilterStore = createFilterStore<CityFilters>();

export type CityFilterStore = typeof useCityFilterStore;

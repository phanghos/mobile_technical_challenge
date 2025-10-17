import type { CityFilters } from '@/domain/city/entities/CityFilters';
import { create } from 'zustand';

type CityFilterStoreState = {
  selectedFilters: CityFilters;
};

export const useCityFilterStore = create<CityFilterStoreState>(() => ({
  selectedFilters: {
    language: [],
    currency: [],
  },
}));

export type CityFilterStore = typeof useCityFilterStore;

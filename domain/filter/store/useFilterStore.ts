import { create } from 'zustand';
import type { Filter } from '../entities/Filter';

type FilterStoreState = {
  selectedFilters: Filter;
};

export const useFilterStore = create<FilterStoreState>(() => ({
  selectedFilters: {
    language: [],
    currency: [],
  },
}));

export type FilterStore = typeof useFilterStore;

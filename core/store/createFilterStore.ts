import { create } from 'zustand';

export type FilterStoreState<T extends Record<string, unknown>> = {
  selectedFilters: T;
};

export const createFilterStore = <T extends Record<string, unknown>>() =>
  create<FilterStoreState<T>>(() => ({
    selectedFilters: {} as T,
  }));

export type FilterStore = ReturnType<typeof createFilterStore>;

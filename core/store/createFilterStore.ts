import { create } from 'zustand';
import { Filters } from '../filters/Filters';

export type FilterStoreState<T extends Filters> = {
  selectedFilters: T;
};

export const createFilterStore = <T extends Filters>(initialState: T) =>
  create<FilterStoreState<T>>(() => ({
    selectedFilters: initialState,
  }));

export type FilterStore = ReturnType<typeof createFilterStore>;

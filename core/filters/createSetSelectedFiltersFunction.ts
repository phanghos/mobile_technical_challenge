import type { FilterStoreState } from '../store/createFilterStore';

type Setter<T> = (value: T) => void;

type Store<T extends Record<string, unknown>> = {
  setState: Setter<FilterStoreState<T>>;
};

export const createSetSelectedFiltersFunction =
  <T extends Record<string, unknown>>(store: Store<T>) =>
  (filters: T): void => {
    store.setState({ selectedFilters: filters });
  };

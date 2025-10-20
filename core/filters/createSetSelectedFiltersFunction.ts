import type { FilterStoreState } from '../store/createFilterStore';
import { Filters } from './Filters';

type Setter<T> = (value: T) => void;

type Store<T extends Filters> = {
  setState: Setter<FilterStoreState<T>>;
};

export const createSetSelectedFiltersFunction =
  <T extends Filters>(store: Store<T>) =>
  (filters: T): void => {
    store.setState({ selectedFilters: filters });
  };

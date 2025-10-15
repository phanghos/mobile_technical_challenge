import type { Filter } from '../../entities/Filter';
import { FilterStore, useFilterStore } from '../useFilterStore';

export const setSelectedFilters = (
  filter: Filter,
  store: FilterStore = useFilterStore,
) => {
  store.setState({ selectedFilters: filter });
};

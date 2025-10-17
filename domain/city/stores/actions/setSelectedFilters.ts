import type { CityFilters } from '../../entities/CityFilters';
import { CityFilterStore, useCityFilterStore } from '../useCityFilterStore';

export const setSelectedFilters = (
  filters: CityFilters,
  store: CityFilterStore = useCityFilterStore,
): void => {
  store.setState({ selectedFilters: filters });
};

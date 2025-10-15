import type { City } from '@/domain/entities/City';
import { CityStore, useCityStore } from '@/stores/useCityStore';
import { cityAdapter, CityAdapter } from '../adapters/cityAdapter';

export const setCities = (
  cities: City[],
  adaptCities: CityAdapter = cityAdapter,
  store: CityStore = useCityStore,
) => {
  store.setState({ cities: adaptCities(cities) });
};

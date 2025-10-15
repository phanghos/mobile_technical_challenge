import type { City } from '@/domain/city/entities/City';
import { CityStore, useCityStore } from '@/domain/city/store/useCityStore';
import { cityAdapter, CityAdapter } from '../../adapters/cityAdapter';

export const setCities = (
  cities: City[],
  adaptCities: CityAdapter = cityAdapter,
  store: CityStore = useCityStore,
) => {
  store.setState({ cities: adaptCities(cities) });
};

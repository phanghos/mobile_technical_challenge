import type { CityRaw } from '@/data/dtos/CityRaw';
import { CityStore, useCityStore } from '@/domain/city/store/useCityStore';
import { cityAdapter, CityAdapter } from '../../adapters/cityAdapter';

export const setCities = (
  cities: CityRaw[],
  adaptCities: CityAdapter = cityAdapter,
  store: CityStore = useCityStore,
) => {
  store.setState({ cities: adaptCities(cities) });
};

import type { City } from '@/domain/city/entities/City';
import { CityStore, useCityStore } from '@/domain/city/stores/useCityStore';

export const setCities = (
  cities: City[],
  store: CityStore = useCityStore,
): void => {
  store.setState({ cities });
};

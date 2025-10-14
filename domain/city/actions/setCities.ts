import type { City } from '@/app/core/entities/City';
import { CityStore, useCityStore } from '@/stores/useCityStore';

export const setCities = (
  cities: City[],
  store: CityStore = useCityStore,
): void => {
  store.setState({ cities });
};

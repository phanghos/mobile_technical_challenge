import type { City } from '../../entities/City';
import {
  FavoriteCitiesStore,
  useFavoriteCitiesStore,
} from '../useFavoriteCitiesStore';

export const addFavoriteCity = (
  city: City,
  store: FavoriteCitiesStore = useFavoriteCitiesStore,
): void => {
  const { cities } = store.getState();
  store.setState({ cities: { ...cities, [Number(city.id)]: city } });
};

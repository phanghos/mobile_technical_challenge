import {
  FavoriteCitiesStore,
  useFavoriteCitiesStore,
} from '../useFavoriteCitiesStore';

export const isFavoriteCity = (
  cityId: number,
  store: FavoriteCitiesStore = useFavoriteCitiesStore,
): boolean => {
  const { cities } = store.getState();
  return !!cities[cityId];
};

import {
  FavoriteCitiesStore,
  useFavoriteCitiesStore,
} from '../useFavoriteCitiesStore';

export const removeFavouriteCity = (
  cityId: number,
  store: FavoriteCitiesStore = useFavoriteCitiesStore,
): void => {
  const { cities } = store.getState();
  // using the spread operator to remove cityId from the map
  const { [cityId]: _, ...rest } = cities;
  store.setState({ cities: rest });
};

export type RemoveFavoriteCity = typeof removeFavouriteCity;

import {
  FavoriteCitiesStore,
  useFavoriteCitiesStore,
} from '../useFavoriteCitiesStore';

export const removeFavouriteCity = (
  cityId: number,
  store: FavoriteCitiesStore = useFavoriteCitiesStore,
): void => {
  const { cities } = store.getState();
  const { [cityId]: _, ...rest } = cities;
  store.setState({ cities: rest });
};

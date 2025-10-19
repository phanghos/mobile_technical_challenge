import type { City } from '../../entities/City';
import { AddFavoriteCity, addFavoriteCity } from './addFavoriteCity';
import { isFavoriteCity } from './isFavoriteCity';
import { RemoveFavoriteCity, removeFavouriteCity } from './removeFavouriteCity';

export const toggleFavouriteCity = (
  city: City,
  addCity: AddFavoriteCity = addFavoriteCity,
  removeCity: RemoveFavoriteCity = removeFavouriteCity,
): void => {
  const isFavourite = isFavoriteCity(city.id);

  if (isFavourite) {
    removeCity(city.id);
  } else {
    addCity(city);
  }
};

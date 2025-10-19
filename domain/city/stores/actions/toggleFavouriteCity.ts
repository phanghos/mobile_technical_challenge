import type { City } from '../../entities/City';
import { addFavoriteCity } from './addFavoriteCity';
import { isFavoriteCity } from './isFavoriteCity';
import { removeFavouriteCity } from './removeFavouriteCity';

export const toggleFavouriteCity = (city: City): void => {
  const isFavourite = isFavoriteCity(city.id);

  if (isFavourite) {
    console.log('Removing...', city.id);
    removeFavouriteCity(city.id);
  } else {
    console.log('Adding...', city.id);
    addFavoriteCity(city);
  }
};

import type { City } from '@/domain/city/entities/City';
import type { Place } from '@/domain/place/entities/Place';

export type RootStackParamList = {
  'city-details': {
    city: City;
  };
  'cities-filters': undefined;
  'favorite-cities-filters': undefined;
  'places-map': { places: Place[] };
};

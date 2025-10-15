import { Place } from '@/domain/place/entities/Place';
import { PlacesMap } from '@/domain/place/entities/PlacesMap';
import { PlacesUtils } from '@/shared/utils/places';

describe('Places Utils', () => {
  describe('getPlacesForCityByType', () => {
    it('returns a map of places indexed by type', () => {
      // Given
      const places: Place[] = [aRestaurant, aMonument];

      // When
      const result = PlacesUtils.getPlacesForCityByType(aCityKey, places);

      // Then
      expect(result).toStrictEqual({
        restaurant: [aRestaurant.place],
        monument: [aMonument.place],
      });
    });
  });

  describe('getAllPlaces', () => {
    it('returns an array of all places', () => {
      // Given
      const placesMap: PlacesMap = {
        restaurant: [aRestaurant.place],
        monument: [aMonument.place],
      };

      // When
      const result = PlacesUtils.getAllPlaces(placesMap);

      // Then
      expect(result).toHaveLength(2);
      expect(result).toStrictEqual([aRestaurant.place, aMonument.place]);
    });
  });

  describe('getTypeOfFirstPlace', () => {
    it('returns the type of the first place in the list', () => {
      // Given
      const placesMap: PlacesMap = {
        restaurant: [aRestaurant.place],
        monument: [aMonument.place],
      };

      // When
      const result = PlacesUtils.getTypeOfFirstPlace(placesMap);

      // Then
      expect(result).toBe('restaurant');
    });
  });

  describe('getTypesOfPlacesCount', () => {
    it('returns the number of different types of places', () => {
      // Given
      const placesMap: PlacesMap = {
        restaurant: [aRestaurant.place],
        monument: [aMonument.place],
      };

      // When
      const result = PlacesUtils.getTypesOfPlacesCount(placesMap);

      // Then
      expect(result).toBe(2);
    });
  });
});

const aCityKey = 'barcelona';
const aRestaurant: Place = {
  key: aCityKey,
  place: {
    type: 'restaurant',
    name: 'A restaurant',
    coordinates: [0, 0],
  },
};
const aMonument: Place = {
  key: aCityKey,
  place: {
    type: 'monument',
    name: 'A monument',
    coordinates: [0, 0],
  },
};

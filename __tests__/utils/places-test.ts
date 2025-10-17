import { Place } from '@/domain/place/entities/Place';
import { PlacesMap } from '@/domain/place/entities/PlacesMap';
import { PlacesUtils } from '@/shared/utils/places';
import { Builder } from 'builder-pattern';

describe('Places Utils', () => {
  describe('getPlacesForCityByType', () => {
    describe('given an existing city key', () => {
      it('returns a map of places indexed by type', () => {
        // Given
        const places: Place[] = [restaurant, monument];

        // When
        const result = PlacesUtils.getPlacesForCityByType(cityKey, places);

        // Then
        expect(result).toStrictEqual({
          restaurant: [restaurant],
          monument: [monument],
        });
      });
    });

    describe('given an non-existing city key', () => {
      it('returns an empty map', () => {
        // Given
        const places: Place[] = [restaurant, monument];
        const expected: PlacesMap = {
          restaurant: [],
          monument: [],
        };

        // When
        const result = PlacesUtils.getPlacesForCityByType(
          invalidCityKey,
          places,
        );

        // Then
        expect(result).toStrictEqual(expected);
      });
    });
  });

  describe('getAllPlaces', () => {
    it('returns an array of all places', () => {
      // Given
      const placesMap: PlacesMap = {
        restaurant: [restaurant],
        monument: [monument],
      };

      // When
      const result = PlacesUtils.getAllPlaces(placesMap);

      // Then
      expect(result).toHaveLength(2);
      expect(result).toStrictEqual([restaurant, monument]);
    });
  });

  describe('getTypeOfFirstPlace', () => {
    it('returns the type of the first place in the list', () => {
      // Given
      const placesMap: PlacesMap = {
        restaurant: [restaurant],
        monument: [monument],
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
        restaurant: [restaurant],
        monument: [monument],
      };

      // When
      const result = PlacesUtils.getTypesOfPlacesCount(placesMap);

      // Then
      expect(result).toBe(2);
    });
  });
});

const cityKey = 'barcelona';
const invalidCityKey = 'invalid_key';
const restaurant = Builder<Place>().key(cityKey).type('restaurant').build();
const monument = Builder<Place>().key(cityKey).type('monument').build();

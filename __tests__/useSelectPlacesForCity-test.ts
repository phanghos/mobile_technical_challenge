import { Place } from '@/domain/place/entities/Place';
import { PlacesMap } from '@/domain/place/entities/PlacesMap';
import { useSelectPlacesForCity } from '@/domain/place/store/selectors/useSelectPlacesForCity';
import { usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

describe('useSelectPlacesForCity', () => {
  describe('given an existing city key', () => {
    it('returns the places for an existing city key as a dictionary', () => {
      // Given
      usePlaceStore.setState({
        places: [restaurant, monument],
      });
      const expected: PlacesMap = {
        restaurant: [restaurant],
        monument: [monument],
      };

      // When
      const { result } = renderHook(() => useSelectPlacesForCity(cityKey));

      // Then
      expect(result.current).toStrictEqual(expected);
    });
  });

  describe('given a non-existing city key', () => {
    it('returns an empty dictionary', () => {
      // Given
      usePlaceStore.setState({
        places: [restaurant, monument],
      });
      const expected: PlacesMap = {
        restaurant: [],
        monument: [],
      };

      // When
      const { result } = renderHook(() =>
        useSelectPlacesForCity(nonExistingCityKey),
      );

      // Then
      expect(result.current).toStrictEqual(expected);
    });
  });
});

const cityKey = 'barcelona';
const nonExistingCityKey = 'invalid_key';
const restaurant = Builder<Place>().key(cityKey).type('restaurant').build();
const monument = Builder<Place>().key(cityKey).type('monument').build();

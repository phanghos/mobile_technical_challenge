import { Place } from '@/domain/place/entities/Place';
import { useSelectPlacesForCity } from '@/domain/place/store/selectors/useSelectPlacesForCity';
import { usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { PlacesUtils } from '@/shared/utils/places';
import { renderHook } from '@testing-library/react-native';

jest.mock('@/shared/utils/places', () => ({
  PlacesUtils: {
    getPlacesForCityByType: jest.fn().mockReturnValue({}),
  },
}));

const mockedGetPlacesForCityByType = jest.mocked(
  PlacesUtils.getPlacesForCityByType,
);

describe('useSelectPlacesForCity', () => {
  beforeEach(() => {
    usePlaceStore.setState({
      places: [aRestaurant, aMonument],
    });
  });

  it('it calls getPlacesForCityByType internally', () => {
    // When
    const { result } = renderHook(() => useSelectPlacesForCity(aCityKey));

    // Then
    expect(result.current).toStrictEqual({});
    expect(mockedGetPlacesForCityByType).toHaveBeenCalledWith(aCityKey, [
      aRestaurant,
      aMonument,
    ]);
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

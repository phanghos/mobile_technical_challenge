import { Place } from '@/domain/place/entities/Place';
import { useSelectPlacesForCity } from '@/domain/place/store/selectors/useSelectPlacesForCity';
import { usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { renderHook } from '@testing-library/react-native';

describe('useSelectPlacesForCity', () => {
  beforeEach(() => {
    usePlaceStore.setState({
      places: [aRestaurant, aMonument],
    });
  });

  it('given a existent city key, it returns the map of places indexed by type', () => {
    const { result } = renderHook(() => useSelectPlacesForCity('barcelona'));

    expect(result.current).toStrictEqual({
      restaurant: [aRestaurant.place],
      monument: [aMonument.place],
    });
  });

  it('given a non-existent city key, it returns an empty map', () => {
    const { result } = renderHook(() => useSelectPlacesForCity('amsterdam'));

    expect(result.current).toStrictEqual({});
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

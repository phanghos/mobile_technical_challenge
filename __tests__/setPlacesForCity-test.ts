import { Place } from '@/domain/entities/Place';
import { setPlacesForCity } from '@/domain/place/actions/setPlacesForCity';
import { usePlaceStore } from '@/stores/usePlaceStore';

describe('setPlacesForCity', () => {
  let mockPlaceAdapter: jest.Mock;

  beforeEach(() => {
    mockPlaceAdapter = jest.fn().mockReturnValue({
      restaurant: [aRestaurant.place],
      monument: [aMonument.place],
    });
  });

  afterEach(() => {
    mockPlaceAdapter.mockReset();
  });

  it('initial state', () => {
    expect(usePlaceStore.getState().places).toStrictEqual({});
  });

  it('sets places for city', () => {
    // When
    setPlacesForCity([aRestaurant, aMonument], aCityKey, mockPlaceAdapter);

    // Then
    expect(usePlaceStore.getState().places).toStrictEqual({
      barcelona: {
        restaurant: [aRestaurant.place],
        monument: [aMonument.place],
      },
    });
  });
});

const aCityKey = 'barcelona';
const aRestaurant: Place = {
  key: 'barcelona',
  place: {
    type: 'restaurant',
    name: 'A restaurant',
    coordinates: [0, 0],
  },
};
const aMonument: Place = {
  key: 'barcelona',
  place: {
    type: 'monument',
    name: 'A monument',
    coordinates: [0, 0],
  },
};

import { Place } from '@/domain/place/entities/Place';
import { setPlaces } from '@/domain/place/store/actions/setPlaces';
import { usePlaceStore } from '@/domain/place/store/usePlaceStore';

describe('setPlaces', () => {
  it('initial state', () => {
    expect(usePlaceStore.getState().places).toStrictEqual([]);
  });

  it('sets places', () => {
    // When
    setPlaces([aRestaurant, aMonument]);

    // Then
    expect(usePlaceStore.getState().places).toStrictEqual([
      aRestaurant,
      aMonument,
    ]);
  });
});

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

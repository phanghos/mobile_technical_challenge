import { Place } from '@/domain/place/entities/Place';
import { setPlaces } from '@/domain/place/store/actions/setPlaces';
import { usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { Builder } from 'builder-pattern';

describe('setPlaces', () => {
  it('initial state', () => {
    expect(usePlaceStore.getState().places).toStrictEqual([]);
  });

  it('sets places on the store', () => {
    // When
    setPlaces([restaurant, monument]);

    // Then
    const state = usePlaceStore.getState();
    expect(state.places).toHaveLength(2);
    expect(state.places).toStrictEqual([restaurant, monument]);
  });
});

const restaurant = Builder<Place>().build();
const monument = Builder<Place>().build();

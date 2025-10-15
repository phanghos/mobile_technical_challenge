import { PlaceRaw } from '@/data/dtos/PlaceRaw';
import { Place } from '@/domain/place/entities/Place';
import { setPlaces } from '@/domain/place/store/actions/setPlaces';
import { usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { Builder } from 'builder-pattern';

describe('setPlaces', () => {
  const mockAdapter = jest.fn();

  beforeEach(() => {
    mockAdapter.mockReset();
    mockAdapter.mockReturnValue([restaurant, monument]);
  });

  it('initial state', () => {
    expect(usePlaceStore.getState().places).toStrictEqual([]);
  });

  it('calls adapter and sets places on the store', () => {
    // When
    setPlaces([restaurantRaw, monumentRaw], mockAdapter);

    // Then
    const state = usePlaceStore.getState();
    expect(state.places).toHaveLength(2);
    expect(state.places).toStrictEqual([restaurant, monument]);
    expect(mockAdapter).toHaveBeenCalledWith([restaurantRaw, monumentRaw]);
  });
});

const restaurantRaw = Builder<PlaceRaw>().build();
const monumentRaw = Builder<PlaceRaw>().build();
const restaurant = Builder<Place>().build();
const monument = Builder<Place>().build();

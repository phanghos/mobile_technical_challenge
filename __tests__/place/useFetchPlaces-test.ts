import { PlaceRaw } from '@/data/dtos/PlaceRaw';
import * as placesAdapterModule from '@/domain/place/adapters/placesAdapter';
import { Place } from '@/domain/place/entities/Place';
import { usePlaceStore } from '@/domain/place/store/usePlaceStore';
import { useFetchPlaces } from '@/domain/place/useCases/useFetchPlaces';
import { useQuery } from '@apollo/client/react';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

const mockedUseQuery = jest.mocked(useQuery);

describe('useFetchPlaces', () => {
  it('adapts and sets cities', async () => {
    // Given
    mockedUseQuery.mockReturnValueOnce({
      loading: false,
      error: undefined,
      // @ts-ignore
      refetch: async () => {},
      data: { allPlaces: [restaurantRaw, monumentRaw] },
    });
    const adapterSpy = jest.spyOn(placesAdapterModule, 'placesAdapter');

    renderHook(() => useFetchPlaces());

    await act(async () => {
      const state = usePlaceStore.getState();
      expect(state.places).toHaveLength(2);
      expect(state.places).toStrictEqual([restaurant, monument]);
      expect(adapterSpy).toHaveBeenCalledWith([restaurantRaw, monumentRaw]);
    });
  });
});

const restaurantRaw = Builder<PlaceRaw>()
  .key('barcelona')
  .place(Builder<PlaceRaw['place']>().type('restaurant').build())
  .build();
const monumentRaw = Builder<PlaceRaw>()
  .key('barcelona')
  .place(Builder<PlaceRaw['place']>().type('monument').build())
  .build();
const restaurant: Place = {
  key: 'barcelona',
  ...restaurantRaw.place,
  type: 'restaurant',
};
const monument: Place = {
  key: 'barcelona',
  ...monumentRaw.place,
  type: 'monument',
};

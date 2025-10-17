import { CityRaw } from '@/data/dtos/CityRaw';
import * as citiesAdapterModule from '@/domain/city/adapters/citiesAdapter';
import { City } from '@/domain/city/entities/City';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import { useFetchCities } from '@/domain/city/useCases/useFetchCities';
import { useQuery } from '@apollo/client/react';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

jest.mock('countries-list', () => ({
  countries: {
    ES: {
      languages: ['es'],
    },
  },
  languages: {
    es: {
      name: 'Spanish',
    },
  },
}));

const mockedUseQuery = jest.mocked(useQuery);

describe('useFetchCities', () => {
  it('adapts and sets cities', async () => {
    // Given
    mockedUseQuery.mockReturnValueOnce({
      // @ts-ignore
      refetch: async () => {},
      data: { allCities: [cityRaw] },
    });
    const adapterSpy = jest.spyOn(citiesAdapterModule, 'citiesAdapter');

    // When
    renderHook(() => useFetchCities());

    // Then
    await act(async () => {
      const { cities } = useCityStore.getState();
      expect(cities).toHaveLength(1);
      expect(cities).toStrictEqual([adaptedCity]);
      expect(adapterSpy).toHaveBeenCalledWith([cityRaw]);
    });
  });
});

const cityRaw = Builder<CityRaw>()
  .key('barcelona')
  .name('Barcelona')
  .language('es')
  .currency('eur')
  .build();

const adaptedCity: City = {
  key: 'barcelona',
  name: 'Barcelona',
  language: 'es',
  currency: 'Eur',
  fullLanguage: 'Spanish',
};

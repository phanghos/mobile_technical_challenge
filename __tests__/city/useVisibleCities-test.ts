import { City } from '@/domain/city/entities/City';
import { CityFilters } from '@/domain/city/entities/CityFilters';
import { useCityFilterStore } from '@/domain/city/stores/useCityFilterStore';
import { useCityStore } from '@/domain/city/stores/useCityStore';
import { useVisibleCities } from '@/domain/city/useCases/useVisibleCities';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

describe('useVisibleCities', () => {
  it('computers and returns the visible cities', () => {
    // Given
    useCityStore.setState({ cities: [city] });
    useCityFilterStore.setState({ selectedFilters: filters });
    const searchQuery = 'lo';

    // When
    const { result } = renderHook(() => useVisibleCities(searchQuery));

    // Then
    expect(result.current).toStrictEqual([city]);
  });
});

const city = Builder<City>()
  .name('Barcelona')
  .fullLanguage('Spanish')
  .currency('Eur')
  .build();
const filters: CityFilters = {
  language: [],
  currency: [],
};

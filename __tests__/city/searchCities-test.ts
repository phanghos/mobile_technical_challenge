import { City } from '@/domain/city/entities/City';
import { searchCities } from '@/domain/city/utils/searchCities';
import { Builder } from 'builder-pattern';

describe('searchCities', () => {
  it('returns a non-empty array when the search matches some items', () => {
    // Given
    const query = 'ky';

    // When
    const result = searchCities(query, cities);

    // Then
    expect(result).toHaveLength(1);
    expect(result).toStrictEqual([tokyoCity]);
  });

  it('returns an empty array when the search does not matches any item', () => {
    // Given
    const query = 'z';

    // When
    const result = searchCities(query, cities);

    // Then
    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });
});

const barcelonaCity = Builder<City>().name('Barcelona').build();
const tokyoCity = Builder<City>().name('Tokyo').build();
const cities = [barcelonaCity, tokyoCity];

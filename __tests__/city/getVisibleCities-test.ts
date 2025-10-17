import { City } from '@/domain/city/entities/City';
import { CityFilters } from '@/domain/city/entities/CityFilters';
import { getVisibleCities } from '@/domain/city/utils/getVisibleCities';
import { Builder } from 'builder-pattern';

const barcelonaCity = Builder<City>()
  .name('Barcelona')
  .fullLanguage('Spanish')
  .currency('Eur')
  .build();
const tokyoCity = Builder<City>()
  .name('Tokyo')
  .fullLanguage('Japanese')
  .currency('Yen')
  .build();
const berlinCity = Builder<City>()
  .name('Berlin')
  .fullLanguage('German')
  .currency('Eur')
  .build();
const cities = [barcelonaCity, tokyoCity, berlinCity];
const emptyFilters: CityFilters = {
  language: [],
  currency: [],
};
const matchingLanguageFilter: CityFilters = {
  language: ['German', 'Japanese'],
  currency: [],
};
const matchingCurrencyFilter: CityFilters = {
  language: [],
  currency: ['Eur'],
};
const unmatchingFilters: CityFilters = {
  language: ['Italian'],
  currency: ['Yen'],
};

type SearchQuery = string;
type InputCities = City[];
type ResultCities = City[];

type TestCases = [SearchQuery, CityFilters, InputCities, ResultCities][];

const testCases: TestCases = [
  ['', emptyFilters, cities, cities],
  ['e', emptyFilters, cities, [barcelonaCity, berlinCity]],
  ['z', emptyFilters, cities, []],

  ['', matchingLanguageFilter, cities, [tokyoCity, berlinCity]],
  ['y', matchingLanguageFilter, cities, [tokyoCity]],
  ['z', matchingLanguageFilter, cities, []],

  ['', matchingCurrencyFilter, cities, [barcelonaCity, berlinCity]],
  ['in', matchingCurrencyFilter, cities, [berlinCity]],
  ['z', matchingCurrencyFilter, cities, []],

  ['', unmatchingFilters, cities, []],
];

describe('getVisibleCities', () => {
  it.each(testCases)(
    `Given the search query %s and filters %s to apply to the cities %s`,
    (searchQuery, filters, inputCities, resultCities) => {
      // When
      const result = getVisibleCities(searchQuery, filters, inputCities);

      // Then
      expect(result).toStrictEqual(resultCities);
    },
  );
});

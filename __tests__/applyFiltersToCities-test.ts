import type { City } from '@/domain/city/entities/City';
import type { Filter } from '@/domain/filter/entities/Filter';
import { applyFiltersToCities } from '@/domain/filter/utils/applyFiltersToCities';
import { filterByCurrency } from '@/domain/filter/utils/filterByCurrency';
import { filterByLanguage } from '@/domain/filter/utils/filterByLanguage';
import { Builder } from 'builder-pattern';

jest.mock('@/domain/filter/utils/filterByLanguage', () => ({
  filterByLanguage: jest.fn(),
}));

jest.mock('@/domain/filter/utils/filterByCurrency', () => ({
  filterByCurrency: jest.fn(),
}));

describe('applyFiltersToCities', () => {
  beforeEach(() => {
    mockedFilterByLanguage.mockReset();
    mockedFilterByCurrency.mockReset();
  });

  describe('when there are no filters applied', () => {
    it('calls the filtering functions and returns the full list of cities', () => {
      // Given
      const mockedFilterByLanguageInner = jest.fn().mockReturnValue(true);
      const mockedFilterByCurrencyInner = jest.fn().mockReturnValue(true);
      mockedFilterByLanguage.mockReturnValue(mockedFilterByLanguageInner);
      mockedFilterByCurrency.mockReturnValue(mockedFilterByCurrencyInner);

      // When
      const result = applyFiltersToCities(noFiltersApplied, cities);

      // Then
      expect(result).toStrictEqual(cities);
      expect(mockedFilterByLanguage).toHaveBeenCalledTimes(1);
      expect(mockedFilterByCurrency).toHaveBeenCalledTimes(1);
      expect(mockedFilterByLanguageInner).toHaveBeenCalledTimes(3);
      expect(mockedFilterByCurrencyInner).toHaveBeenCalledTimes(3);
    });
  });

  describe('when there are filters applied', () => {
    it('calls the filtering functions and returns the filtered list of cities', () => {
      // Given
      const mockedFilterByLanguageInner = jest.fn().mockImplementation(city => {
        if (city.fullLanguage === 'German') {
          return true;
        }
        return false;
      });
      const mockedFilterByCurrencyInner = jest.fn().mockReturnValue(true);
      mockedFilterByLanguage.mockReturnValue(mockedFilterByLanguageInner);
      mockedFilterByCurrency.mockReturnValue(mockedFilterByCurrencyInner);

      // When
      const result = applyFiltersToCities(someFiltersApplied, cities);

      // Then
      expect(result).toStrictEqual(filteredCities);
      expect(mockedFilterByLanguage).toHaveBeenCalledTimes(1);
      expect(mockedFilterByCurrency).toHaveBeenCalledTimes(1);
    });
  });
});

const mockedFilterByLanguage = jest.mocked(filterByLanguage);
const mockedFilterByCurrency = jest.mocked(filterByCurrency);

const noFiltersApplied: Filter = {
  language: [],
  currency: [],
};
const someFiltersApplied: Filter = {
  language: ['German', 'Portuguese', 'Japanese'],
  currency: ['Eur'],
};
const berlinCity = Builder<City>()
  .fullLanguage('German')
  .currency('Eur')
  .build();
const lisbonCity = Builder<City>()
  .fullLanguage('Lisbon')
  .currency('Eur')
  .build();
const tokyoCity = Builder<City>()
  .fullLanguage('Japanese')
  .currency('Yen')
  .build();
const cities = [berlinCity, lisbonCity, tokyoCity];
const filteredCities = [berlinCity];

import type { City } from '@/domain/city/entities/City';
import type { CityFilters } from '@/domain/city/entities/CityFilters';
import { applyFiltersToCities } from '@/domain/city/utils/applyFiltersToCities';
import { filterByCurrency } from '@/domain/city/utils/filterByCurrency';
import { filterByLanguage } from '@/domain/city/utils/filterByLanguage';
import { Builder } from 'builder-pattern';

jest.mock('@/domain/city/utils/filterByLanguage', () => ({
  filterByLanguage: jest.fn(),
}));

jest.mock('@/domain/city/utils/filterByCurrency', () => ({
  filterByCurrency: jest.fn(),
}));

describe('applyFiltersToCities', () => {
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

const noFiltersApplied: CityFilters = {
  language: [],
  currency: [],
};
const someFiltersApplied: CityFilters = {
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

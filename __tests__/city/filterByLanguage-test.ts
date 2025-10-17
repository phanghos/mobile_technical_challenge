import { City } from '@/domain/city/entities/City';
import { CityFilters } from '@/domain/city/entities/CityFilters';
import { filterByLanguage } from '@/domain/city/utils/filterByLanguage';
import { Builder } from 'builder-pattern';

describe('filterByLanguage', () => {
  describe('when there are no filters applied', () => {
    it('returns true', () => {
      // When
      const result = filterByLanguage(noFiltersApplied.language)(berlinCity);

      // Then
      expect(result).toBe(true);
    });
  });

  describe('when there are filters applied', () => {
    describe('and the city matches the filter', () => {
      it('it returns true', () => {
        // When
        const result = filterByLanguage(germanLanguageFilterApplied.language)(
          berlinCity,
        );

        // Then
        expect(result).toBe(true);
      });
    });

    describe('and the city does not match the filter', () => {
      it('it returns false', () => {
        // When
        const result = filterByLanguage(germanLanguageFilterApplied.language)(
          tokyoCity,
        );

        // Then
        expect(result).toBe(false);
      });
    });
  });
});

const noFiltersApplied: CityFilters = {
  language: [],
  currency: [],
};
const germanLanguageFilterApplied: CityFilters = {
  language: ['German'],
  currency: [],
};
const berlinCity = Builder<City>()
  .fullLanguage('German')
  .currency('Eur')
  .build();
const tokyoCity = Builder<City>()
  .fullLanguage('Japanese')
  .currency('Yen')
  .build();

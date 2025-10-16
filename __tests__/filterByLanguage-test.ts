import { City } from '@/domain/city/entities/City';
import { Filter } from '@/domain/filter/entities/Filter';
import { filterByLanguage } from '@/domain/filter/utils/filterByLanguage';
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

const noFiltersApplied: Filter = {
  language: [],
  currency: [],
};
const germanLanguageFilterApplied: Filter = {
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

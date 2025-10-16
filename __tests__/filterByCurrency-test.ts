import { City } from '@/domain/city/entities/City';
import { Filter } from '@/domain/filter/entities/Filter';
import { filterByCurrency } from '@/domain/filter/utils/filterByCurrency';
import { Builder } from 'builder-pattern';

describe('filterByCurrency', () => {
  describe('when there are no filters applied', () => {
    it('returns true', () => {
      // When
      const result = filterByCurrency(noFiltersApplied.currency)(berlinCity);

      // Then
      expect(result).toBe(true);
    });
  });

  describe('when there are filters applied', () => {
    describe('and the city matches the filter', () => {
      it('it returns true', () => {
        // When
        const result = filterByCurrency(euroCurrencyFilterApplied.currency)(
          berlinCity,
        );

        // Then
        expect(result).toBe(true);
      });
    });

    describe('and the city does not match the filter', () => {
      it('it returns false', () => {
        // When
        const result = filterByCurrency(euroCurrencyFilterApplied.currency)(
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
const euroCurrencyFilterApplied: Filter = {
  language: [],
  currency: ['Eur'],
};
const berlinCity = Builder<City>()
  .fullLanguage('German')
  .currency('Eur')
  .build();
const tokyoCity = Builder<City>()
  .fullLanguage('Japanese')
  .currency('Yen')
  .build();

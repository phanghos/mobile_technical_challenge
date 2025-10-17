import { CityFilters } from '@/domain/city/entities/CityFilters';
import { getFiltersCount } from '@/domain/filter/utils/getFiltersCount';

describe('getFiltersCount', () => {
  describe('when there are no filters applied', () => {
    it('returns 0', () => {
      // When
      const result = getFiltersCount(noFiltersApplied);

      // Then
      expect(result).toBe(0);
    });
  });

  describe('when there are filters applied', () => {
    it('returns a number greater than 0', () => {
      // When
      const result = getFiltersCount(someFiltersApplied);

      // Then
      expect(result).toBe(4);
    });
  });
});

const noFiltersApplied: CityFilters = {
  language: [],
  currency: [],
};
const someFiltersApplied: CityFilters = {
  language: ['German', 'Portuguese', 'Japanese'],
  currency: ['Eur'],
};

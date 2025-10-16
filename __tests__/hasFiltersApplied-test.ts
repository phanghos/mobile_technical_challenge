import { Filter } from '@/domain/filter/entities/Filter';
import { getFiltersCount } from '@/domain/filter/utils/getFiltersCount';
import { hasFiltersApplied } from '@/domain/filter/utils/hasFiltersApplied';
import { Builder } from 'builder-pattern';

jest.mock('@/domain/filter/utils/getFiltersCount', () => ({
  getFiltersCount: jest.fn(),
}));

const mockedGetFiltersCount = jest.mocked(getFiltersCount);

describe('hasFiltersApplied', () => {
  beforeEach(() => {
    mockedGetFiltersCount.mockReset();
  });

  describe('when there are no filters applied', () => {
    it('calls getFiltersCount and returns false', () => {
      // Given
      mockedGetFiltersCount.mockReturnValueOnce(0);

      // When
      const result = hasFiltersApplied(filter);

      // Then
      expect(result).toBe(false);
    });
  });

  describe('when there are filters applied', () => {
    it('calls getFiltersCount and returns true', () => {
      // Given
      mockedGetFiltersCount.mockReturnValueOnce(3);

      // When
      const result = hasFiltersApplied(filter);

      // Then
      expect(result).toBe(true);
    });
  });
});

const filter = Builder<Filter>().build();

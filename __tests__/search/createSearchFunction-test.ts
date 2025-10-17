import { createSearchFunction } from '@/domain/search/utils/createSearchFunction';

describe('createSearchFunction', () => {
  it('returns a function that calls the passed callback when run', () => {
    // Given
    const expected = ['a'];
    const mockSearchFn = jest.fn().mockReturnValue(expected);
    const items = ['a', 'b', 'c'];
    const search = createSearchFunction<string>((searchQuery, items) => {
      return mockSearchFn(searchQuery, items);
    });

    // When
    const result = search('query', items);

    // Then
    expect(mockSearchFn).toHaveBeenCalledWith('query', items);
    expect(result).toStrictEqual(expected);
  });
});

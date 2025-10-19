type SearchFn<T> = (searchQuery: string, items: T[]) => T[];

export const createSearchFunction =
  <T>(searchFn: SearchFn<T>): SearchFn<T> =>
  (searchQuery, items) =>
    searchFn(searchQuery, items);

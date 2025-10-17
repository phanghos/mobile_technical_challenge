type Filters = Record<string, unknown[]>;

export const getFiltersCount = (filters: Filters): number =>
  Object.keys(filters).reduce((acc, cur) => acc + filters[cur].length, 0);

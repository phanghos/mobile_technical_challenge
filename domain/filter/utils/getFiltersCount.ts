import type { Filter } from '../entities/Filter';
import type { FilterType } from '../entities/FilterType';

export const getFiltersCount = (filter: Filter): number =>
  Object.keys(filter).reduce(
    (acc, cur) => acc + filter[cur as FilterType].length,
    0,
  );

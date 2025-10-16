import type { Filter } from '../entities/Filter';
import { getFiltersCount } from './getFiltersCount';

export const hasFiltersApplied = (filter: Filter): boolean =>
  getFiltersCount(filter) > 0;

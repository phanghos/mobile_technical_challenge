import { getFiltersCount } from '@/domain/filter/utils/getFiltersCount';
import type { Filter } from '../entities/Filter';

export const hasFiltersApplied = (filter: Filter): boolean =>
  getFiltersCount(filter) > 0;

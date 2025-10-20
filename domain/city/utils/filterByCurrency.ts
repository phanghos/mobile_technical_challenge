import type { FilterFn } from '@/core/types/FilterFn';
import type { City } from '../entities/City';

export const filterByCurrency: FilterFn<string, City> = currencies => city => {
  if (!currencies.length) return true; // no filter applied
  return currencies.includes(city.currency);
};

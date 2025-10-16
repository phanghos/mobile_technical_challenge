import type { FilterFn } from '../entities/FilterFn';

export const filterByCurrency: FilterFn<string> = currencies => city => {
  if (!currencies.length) return true; // no filter applied
  return currencies.includes(city.currency);
};

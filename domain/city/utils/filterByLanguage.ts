import type { FilterFn } from '@/core/types/FilterFn';
import type { City } from '../entities/City';

export const filterByLanguage: FilterFn<string, City> = languages => city => {
  if (!languages.length) return true; // no filter applied
  return languages.some(lang => city.fullLanguage === lang);
};

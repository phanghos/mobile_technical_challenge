import type { FilterFn } from '../entities/FilterFn';

export const filterByLanguage: FilterFn<string> = languages => city => {
  if (!languages.length) return true; // no filter applied
  return languages.some(lang => city.fullLanguage === lang);
};

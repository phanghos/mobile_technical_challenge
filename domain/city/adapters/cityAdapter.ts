import type { City } from '@/app/core/entities/City';
import { CurrencyUtils } from '@/app/core/utils/currency';
import { LanguageUtils } from '@/app/core/utils/language';

export const cityAdapter = (cities: City[]): City[] =>
  cities.map<City>(it => ({
    ...it,
    currency: CurrencyUtils.formatCurrency(it.currency),
    fullLanguage: LanguageUtils.getFullLanguage(it.language),
  }));

export type CityAdapter = typeof cityAdapter;

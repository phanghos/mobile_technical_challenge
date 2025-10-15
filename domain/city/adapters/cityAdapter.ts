import type { CityRaw } from '@/data/dtos/CityRaw';
import type { City } from '@/domain/city/entities/City';
import { CurrencyUtils } from '@/shared/utils/currency';
import { LanguageUtils } from '@/shared/utils/language';

export const cityAdapter = (cities: CityRaw[]): City[] =>
  cities.map<City>(it => ({
    ...it,
    currency: CurrencyUtils.formatCurrency(it.currency),
    fullLanguage: LanguageUtils.getFullLanguage(it.language),
  }));

export type CityAdapter = typeof cityAdapter;

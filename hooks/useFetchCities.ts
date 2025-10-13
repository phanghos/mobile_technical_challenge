import type { AllCities } from '@/app/core/entities/AllCities';
import type { City } from '@/app/core/entities/City';
import { CurrencyUtils } from '@/app/core/utils/currency';
import { LanguageUtils } from '@/app/core/utils/language';
import { GET_CITIES } from '@/app/graphql/queries';
import { useFetch, UseFetchReturn } from './useFetch';

export const useFetchCities = (): UseFetchReturn<City[]> => {
  const result = useFetch<AllCities>(GET_CITIES);

  return {
    ...result,
    data: result.data?.allCities.map(it => {
      return {
        ...it,
        language: LanguageUtils.getLanguage(it.language),
        currency: CurrencyUtils.getCurrency(it.currency),
      };
    }),
  };
};

import type { AllCities } from '@/app/core/entities/AllCities';
import type { City } from '@/app/core/entities/City';
import { CurrencyUtils } from '@/app/core/utils/currency';
import { LanguageUtils } from '@/app/core/utils/language';
import { GET_CITIES } from '@/app/graphql/queries';
import { setCities } from '@/domain/city/actions/setCities';
import { useEffect } from 'react';
import { useFetch } from './useFetch';

export const useFetchCities = () => {
  const result = useFetch<AllCities>(GET_CITIES);

  useEffect(() => {
    if (result.data) {
      const adaptedData = result.data?.allCities.map<City>(it => ({
        ...it,
        currency: CurrencyUtils.formatCurrency(it.currency),
        fullLanguage: LanguageUtils.getFullLanguage(it.language),
      }));

      setCities(adaptedData);
    }
  }, [result.data]);

  return {
    ...result,
  };
};

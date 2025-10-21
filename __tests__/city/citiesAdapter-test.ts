import { CityRaw } from '@/data/dtos/CityRaw';
import { citiesAdapter } from '@/domain/city/adapters/citiesAdapter';
import { City } from '@/domain/city/entities/City';
import { CurrencyUtils } from '@/shared/utils/currency';
import { LanguageUtils } from '@/shared/utils/language';
import { Builder } from 'builder-pattern';

jest.mock('countries-list', () => ({
  countries: {
    ES: {
      languages: ['es'],
    },
  },
  languages: {
    es: {
      name: 'Spanish',
    },
  },
}));

describe('citiesAdapter', () => {
  it('calls utilities and adapts the cities', () => {
    // Given
    const currencyUtilsSpy = jest.spyOn(CurrencyUtils, 'formatCurrency');
    const languageUtilsSpy = jest.spyOn(LanguageUtils, 'getFullLanguage');

    // When
    const result = citiesAdapter([cityRaw]);

    // Then
    expect(result).toStrictEqual([adaptedCity]);
    expect(currencyUtilsSpy).toHaveBeenCalledWith(cityRaw.currency);
    expect(languageUtilsSpy).toHaveBeenCalledWith(cityRaw.language);
  });
});

const cityRaw = Builder<CityRaw>()
  .id(1)
  .key('barcelona')
  .name('Barcelona')
  .language('es')
  .currency('eur')
  .build();

const adaptedCity: City = {
  id: 1,
  key: 'barcelona',
  name: 'Barcelona',
  language: 'es',
  currency: 'Eur',
  fullLanguage: 'Spanish',
};

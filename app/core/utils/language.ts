import { countries, languages, TCountryCode } from 'countries-list';

const getLanguage = (countryCode: string) => {
  const country = countries[countryCode.toUpperCase() as TCountryCode];
  if (!country) return '';
  return country.languages.map(code => languages[code].name)[0];
};

export const LanguageUtils = {
  getLanguage,
};

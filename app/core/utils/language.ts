import { countries, languages, TCountryCode } from 'countries-list';

const getFullLanguage = (languageCode: string) => {
  const country = countries[languageCode.toUpperCase() as TCountryCode];
  if (!country) return languageCode;
  return country.languages.map(code => languages[code].name)[0] || languageCode;
};

export const LanguageUtils = {
  getFullLanguage,
};

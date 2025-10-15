import { StringUtils } from './strings';

const formatCurrency = (code: string) => {
  return StringUtils.capitalize(code);
};

export const CurrencyUtils = {
  formatCurrency,
};

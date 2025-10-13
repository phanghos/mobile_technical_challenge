const getCurrency = (code: string) => {
  return code.charAt(0).toUpperCase() + code.slice(1).toLowerCase();
};

export const CurrencyUtils = {
  getCurrency,
};

import dataCurrency from "../constants/CommonCurrency.json";

export const currencies = Object.values(dataCurrency);

export const filterCurrencies = (preferredCurrencies) => {
  return currencies.filter((currency) =>
    preferredCurrencies.includes(currency.code)
  );
};

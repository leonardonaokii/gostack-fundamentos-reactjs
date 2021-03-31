const formatBalance = (currency: string): string => {
  const stringCurrency = Number(currency);
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(stringCurrency);
};

export default formatBalance;

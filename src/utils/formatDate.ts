const formatDate = (date: Date): string => {
  const stringDate = String(date);
  const formattedDate = new Date(stringDate);
  return new Intl.DateTimeFormat(['ban']).format(formattedDate);
};

export default formatDate;

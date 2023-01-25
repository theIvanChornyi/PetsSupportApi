const isDataCorect = date => {
  const [day, month, year] = date.split('.');
  const ISoMonth = +month - 1;

  const norm = new Date(year, ISoMonth, day).getMonth();

  return norm === ISoMonth;
};

module.exports = isDataCorect;

const dateFormating = (date = new Date()) => {
  const localeDate = date.toLocaleString('de-DE', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const norm = localeDate
    .split('.')
    .map(item => item.padStart(2, '0'))
    .join('.');

  return norm;
};

module.exports = dateFormating;

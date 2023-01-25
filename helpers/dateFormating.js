const createError = require('./createError');
const isDataCorect = require('./isDataCorect');

const dateFormating = (date = new Date()) => {
  if (!isDataCorect(date)) {
    throw createError(400, 'Invalid day or month');
  }
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

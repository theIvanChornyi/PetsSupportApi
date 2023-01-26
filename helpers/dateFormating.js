const createError = require('./createError');
const isDataCorect = require('./isDataCorect');

const dateFormating = date => {
  if (date && !isDataCorect(date)) {
    throw createError(400, 'Invalid day or month');
  }
  const birthday = date || new Date();
  const localeDate = birthday.toLocaleString('de-DE', {
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

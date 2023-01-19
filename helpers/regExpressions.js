const emailRegExp = /^(\w{1,}[\.-\w]+\w)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^\w*$/;
const userNameRegExp = /^([a-zA-Z]{1,}[`-]?[a-zA-Z]?)+$/;
const phoneRegExp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const commentRegExp = /\w/im;
const dataRegExp =
  /(^(0+?[1-9]|[12][0-9]|3[01])[-/.](0+?[1-9]|[1][1-12])[-/.]((19|20)\d\d))/;
const priceRegExp = /^[1-9]/;
module.exports = {
  emailRegExp,
  passwordRegExp,
  userNameRegExp,
  phoneRegExp,
  commentRegExp,
  priceRegExp,
  dataRegExp,
};

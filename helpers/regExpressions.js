const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /^\S*$/;
const userNameRegExp = /^[a-zA-Z]+$/;
const phoneRegExp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
module.exports = { emailRegExp, passwordRegExp, userNameRegExp, phoneRegExp };

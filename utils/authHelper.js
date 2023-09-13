const ErrorHandler = require("./errorHandler");
const { validateEmail, validateMobileNo, validatePassword } = require("./validation");

const validateRequest = function ({ username, firstname, lastname, email, mobileno, password }) {
  checkEmptyValues({
    username,
    firstname,
    lastname,
    email,
    password,
  });

  if (!validateEmail(email)) throw new ErrorHandler("Plz, Enter a valid Email.", 400);
  if (mobileno && !validateMobileNo(mobileno)) throw new ErrorHandler("plz, Enter a valid Mobile no.");
  if (!validatePassword(password)) throw new ErrorHandler("plz, Enter a valid Password.", 400);
};

const checkEmptyValues = function ({ username, firstname, lastname, email, password }) {
  if (!username) throw new ErrorHandler("Plz, Enter Username.", 400);
  if (!firstname) throw new ErrorHandler("Plz, Enter Firstname.", 400);
  if (!lastname) throw new ErrorHandler("Plz, Enter Lastname.", 400);
  if (!email) throw new ErrorHandler("Plz, Enter Email.", 400);
  if (!password) throw new ErrorHandler("Plz, Enter Password.", 400);
};

module.exports = {
  validateRequest,
};

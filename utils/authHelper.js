const User = require("../models/userModel");
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

const checkIsUserRegistered = async function (username, email) {
  if (await isEmailRegistered(email)) throw new ErrorHandler("Entered email is already registered", 409);
  if (await isUsernameRegistered(username)) throw new ErrorHandler("Entered username is already registered", 409);
};

const isEmailRegistered = async function (email) {
  email.trim();
  const existingUser = await User.findOne({ email: email });
  if (existingUser) return 1;
  return 0;
};

const isUsernameRegistered = async function (username) {
  username.trim();
  const existingUser = await User.findOne({ username: username });
  if (existingUser) return 1;
  return 0;
};

module.exports = {
  validateRequest,
  checkIsUserRegistered,
};

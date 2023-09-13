const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const { validateRequest } = require("../utils/authHelper");

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.JWT_SECRET);
}

const register = async (req, res, next) => {
  const { username, firstname, lastname, email, mobileno, password } = req.body;
  try {
    validateRequest({
      username,
      firstname,
      lastname,
      email,
      mobileno,
      password,
    });

    const newUser = await UserModel.create({
      username,
      firstname,
      lastname,
      email,
      mobileno,
      password,
    });

    const token = generateToken(newUser._id);
    res.json({
      token: token,
      username,
      email,
    });
  } catch (error) {
    console.log(error);
    next(new ErrorHandler(error, 500));
  }
};

module.exports = register;
//{ username, firstname, lastname, email, mobileno, password }

const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");

function generateToken(id) {
  return jwt.sign({ id: id }, process.env.JWT_SECRET);
}

const register = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { username, firstname, lastname, email, mobileno, password } =
      req.body;
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

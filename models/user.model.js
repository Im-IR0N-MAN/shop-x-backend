const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = function (email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};
const validateMobileNo = function (mobileno) {
  var regex = /^\d{10}$/;
  return regex.test(mobileno);
};

const UserSchema = Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Please enter a valid username."],
    unique: [
      true,
      "Username already in use. Please choose a different username.",
    ],
  },
  firstname: {
    type: String,
    required: [true, "Please enter your first name."],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, "Please enter your last name."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter a valid email."],
    lowercase: true,
    trim: true,
    validate: [validateEmail, "Please enter a valid email."],
    unique: [
      true,
      "Email already registered. Please use a different email or try logging in.",
    ],
  },
  mobileno: {
    type: String,
    trim: true,
    validate: [validateMobileNo, "Please enter a valid moblie number."],
    unique: [
      true,
      "Moblie number already registered. Please use a different Mobile number.",
    ],
  },
  role: {
    type: String,
    enum: ["customer", "seller", "admin"],
    default: "customer",
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "The password should be at least 8 characters long."],
    maxlength: [
      128,
      "The password should be less than 128 characters in length.",
    ],
    select: false,
  },
});

UserSchema.pre("save", hashPasswordAndProceed);

const User = mongoose.model("User", userSchema);

module.exports = User;

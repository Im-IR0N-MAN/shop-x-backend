const validateEmail = function (email) {
  email.trim();
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};
const validateMobileNo = function (mobileno) {
  mobileno.trim();
  var regex = /^\d{10}$/;
  return regex.test(mobileno);
};

const validatePassword = function (password) {
  password.trim();
  if (password.length < 8 || password.length > 128) return 0;
  else return 1;
}

module.exports = {
  validateEmail,
  validateMobileNo,
  validatePassword
};

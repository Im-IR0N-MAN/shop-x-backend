
const validateEmail = function (email) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};
const validateMobileNo = function (mobileno) {
  var regex = /^\d{10}$/;
  return regex.test(mobileno);
};

module.exports = {
    validateEmail,
    validateMobileNo
};
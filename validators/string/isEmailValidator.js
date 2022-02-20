const isEmailValidator = (Validator, key, value) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    value
  );
  if (!isValidEmail) {
    throw { message: `Invalid email address!` };
  }
  return Validator(key, value);
};

module.exports = isEmailValidator;

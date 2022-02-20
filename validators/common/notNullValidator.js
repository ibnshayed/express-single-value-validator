const notNullValidator = (Validator, key, value) => {
  if (value === null) {
    throw { message: `${key} should not be null!` };
  }
  return Validator(key, value);
};

module.exports = notNullValidator;

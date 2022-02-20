const requiredValidator = (Validator, key, value) => {
  if (value === "" || value === null || value === undefined) {
    throw { message: `${key} is required!` };
  }
  return Validator(key, value);
};

module.exports = requiredValidator;

const isArrayValidator = (Validator, key, value) => {
  if (!Array.isArray(value)) {
    throw { message: `${key} is not an array!` };
  }
  return Validator(key, value);
};

module.exports = isArrayValidator;

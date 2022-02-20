const minNumberValidator = (Validator, key, value, minNumber) => {
  if (typeof value === "number" && value < minNumber) {
    throw { message: `${key} is less than ${minNumber}!` };
  }
  return Validator(key, value);
};

module.exports = minNumberValidator;

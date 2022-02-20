const maxNumberValidator = (Validator, key, value, maxNumber) => {
  if (typeof value === "number" && value > maxNumber) {
    throw { message: `${key} is less than ${maxNumber}!` };
  }
  return Validator(key, value);
};

module.exports = maxNumberValidator;

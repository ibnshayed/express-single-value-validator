const maxLengthValidator = (Validator, key, value, maxLength) => {
  if (typeof maxLength === "number") {
    if (typeof value === "string" && value.length > maxLength) {
      throw { message: `${key} is greater than ${maxLength} characters!` };
    }
  }
  return Validator(key, value);
};

module.exports = maxLengthValidator;

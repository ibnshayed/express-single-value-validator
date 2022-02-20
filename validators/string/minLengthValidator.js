const minLengthValidator = (Validator, key, value, minLength) => {
  if (typeof minLength === "number") {
    if (typeof value === "string" && value.length < minLength) {
      throw { message: `${key} is smaller than ${minLength} characters!` };
    }
  }
  return Validator(key, value);
};

module.exports = minLengthValidator;

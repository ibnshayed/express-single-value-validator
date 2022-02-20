const isObjectValidator = (Validator, key, value) => {
  if (typeof value !== "object") {
    throw { message: `${key} is not an object!` };
  } else {
    if (value === null || Array.isArray(value)) {
      throw { message: `${key} is not an object!` };
    }
  }
  return Validator(key, value);
};

module.exports = isObjectValidator;

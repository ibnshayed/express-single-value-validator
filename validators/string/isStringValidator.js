const isStringValidator = (Validator, key, value) => {
  if (typeof value !== "string") {
    throw { message: `${key} is not string!` };
  }
  return Validator(key, value);
};

module.exports = isStringValidator;

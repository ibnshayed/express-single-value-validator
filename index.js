const isNumberValidator = require("./validators/number/isNumberValidator");
const maxNumberValidator = require("./validators/number/maxNumberValidator");
const minNumberValidator = require("./validators/number/minNumberValidator");
const isStringValidator = require("./validators/string/isStringValidator");
const isArrayValidator = require('./validators/array/isArrayValidator');
const isObjectValidator = require('./validators/object/isObjectValidator');
const requiredValidator = require('./validators/common/requiredValidator');
const minLengthValidator = require('./validators/string/minLengthValidator');
const maxLengthValidator = require('./validators/string/maxLengthValidator');
const isEmailValidator = require('./validators/string/isEmailValidator');
const notNullValidator = require('./validators/common/notNullValidator');
const isPasswordValidator = require('./validators/string/isPasswordValidator');

const Validator = (key, value) => {
  const isString = () => isStringValidator(Validator, key, value);
  const isNumber = () => isNumberValidator(Validator, key, value);
  const minNumber = (minNumber) => minNumberValidator(Validator, key, value, minNumber)
  const maxNumber = (maxNumber) => maxNumberValidator(Validator, key, value, maxNumber)
  const isArray = () => isArrayValidator(Validator, key, value)
  const isObject = () => isObjectValidator(Validator, key, value)
  const required = () => requiredValidator(Validator, key, value)
  const minLength = (minLength) => minLengthValidator(Validator, key, value, minLength)
  const maxLength = (maxLength) => maxLengthValidator(Validator, key, value, maxLength)
  const isEmail = () => isEmailValidator(Validator, key, value)
  const notNull = () => notNullValidator(Validator, key, value)
  const isPassword = () => isPasswordValidator(Validator, key, value)

  return {
    isString,
    isNumber,
    isArray,
    isObject,
    required,
    minLength,
    maxLength,
    isEmail,
    notNull,
    isPassword,
    minNumber,
    maxNumber,
  };
};

module.exports = Validator

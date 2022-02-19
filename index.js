const Validator = (key, value) => {
  const isString = () => {
    if (typeof value !== "string") {
      throw { message: `${key} is not string!` };
    }
    return Validator(key, value);
  };

  const isNumber = () => {
    if (typeof value !== "number") {
      throw { message: `${key} is not a number!` };
    }
    return Validator(key, value);
  };

  const minNumber = (minNumber) => {
    if (typeof value === "number" && value < minNumber) {
      throw { message: `${key} is less than ${minNumber}!` };
    }
    return Validator(key, value);
  };

  const maxNumber = (maxNumber) => {
    if (typeof value === "number" && value > maxNumber) {
      throw { message: `${key} is less than ${maxNumber}!` };
    }
    return Validator(key, value);
  };

  const isArray = () => {
    if (!Array.isArray(value)) {
      throw { message: `${key} is not an array!` };
    }
    return Validator(key, value);
  };

  const isObject = () => {
    if (typeof value !== "object") {
      throw { message: `${key} is not an object!` };
    } else {
      if (value === null || Array.isArray(value)) {
        throw { message: `${key} is not an object!` };
      }
    }
    return Validator(key, value);
  };

  const required = () => {
    if (value === "" || value === null || value === undefined) {
      throw { message: `${key} is required!` };
    }
    return Validator(key, value);
  };

  const minLength = (minLength) => {
    if (typeof minLength === "number") {
      if (typeof value === "string" && value.length < minLength) {
        throw { message: `${key} is smaller than it's minLength!` };
      }
    }
    return Validator(key, value);
  };

  const maxLength = (maxLength) => {
    if (typeof maxLength === "number") {
      if (typeof value === "string" && value.length > maxLength) {
        throw { message: `${key} is greater than it's maxLength!` };
      }
    }
    return Validator(key, value);
  };

  const isEmail = () => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      value
    );
    if (!isValidEmail) {
      throw { message: `${key} is not valid email address!` };
    }
    return Validator(key, value);
  };

  const notNull = () => {
    if (value === null) {
      throw { message: `${key} should not be null!` };
    }
    return Validator(key, value);
  };

  const isPassword = () => {
    // Minimum eight characters, at least one letter and one number:
    // "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

    // Minimum eight characters, at least one letter, one number and one special character:
    // "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

    // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
      value
    );

    if (!isValidPassword) {
      throw {
        message: `${key} is not valid. it must have minimum eight characters, at least one letter and one number!`,
      };
    }
    return Validator(key, value);
  };

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

module.exports = Validator;

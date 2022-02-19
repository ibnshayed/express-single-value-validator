const Validator = (obj) => {
  const isString = () => {
    if (typeof obj.value !== "string") {
      throw { message: `${obj.key} is not string!` };
    }
    return Validator(obj);
  };

  const isNumber = () => {
    if (typeof obj.value !== "number") {
      throw { message: `${obj.key} is not a number!` };
    }
    return Validator(obj);
  };

  const minNumber = (minNumber) => {
    if (typeof obj.value === "number" && obj.value < minNumber) {
      throw { message: `${obj.key} is less than ${minNumber}!` };
    }
    return Validator(obj);
  };

  const maxNumber = (maxNumber) => {
    if (typeof obj.value === "number" && obj.value > maxNumber) {
      throw { message: `${obj.key} is less than ${maxNumber}!` };
    }
    return Validator(obj);
  };

  const isArray = () => {
    if (!Array.isArray(obj.value)) {
      throw { message: `${obj.key} is not an array!` };
    }
    return Validator(obj);
  };

  const isObject = () => {
    if (typeof obj.value !== "object") {
      throw { message: `${obj.key} is not an object!` };
    } else {
      if (obj.value === null || Array.isArray(obj.value)) {
        throw { message: `${obj.key} is not an object!` };
      }
    }
    return Validator(obj);
  };

  const required = () => {
    if (obj.value === "" || obj.value === null || obj.value === undefined) {
      throw { message: `${obj.key} is required!` };
    }
    return Validator(obj);
  };

  const minLength = (minLength) => {
    if (typeof minLength === "number") {
      if (typeof obj.value === "string" && obj.value.length < minLength) {
        throw { message: `${obj.key} is smaller than it's minLength!` };
      }
    }
    return Validator(obj);
  };

  const maxLength = (maxLength) => {
    if (typeof maxLength === "number") {
      if (typeof obj.value === "string" && obj.value.length > maxLength) {
        throw { message: `${obj.key} is greater than it's maxLength!` };
      }
    }
    return Validator(obj);
  };

  const isEmail = () => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      obj.value
    );
    if (!isValidEmail) {
      throw { message: `${obj.key} is not valid email address!` };
    }
    return Validator(obj);
  };

  const notNull = () => {
    if (obj.value === null) {
      throw { message: `${obj.key} should not be null!` };
    }
    return Validator(obj);
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
      obj.value
    );

    if (!isValidPassword) {
      throw {
        message: `${obj.key} is not valid. it must have minimum eight characters, at least one letter and one number!`,
      };
    }
    return Validator(obj);
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

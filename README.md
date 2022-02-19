# What is this?
Validate any value with (key,value) pair like resquest body, params, query, headers etc in express.

# How to install?
`npm i express-single-value-validator`

# How to use?
```javascript
import Validator from 'express-single-value-validator';

Validator({name: "Emran Ibn Shayed"})
	.isString() // check type string
	.required() // must not be empty string, null or undefined
	.minLength(3) // minimum length of string 3 characters
	.maxLength(30) // maximum length of string 30 characters

Validator({username: "ibnshayed"})
	.isString()
	.required()
	.minLength(3)
	.maxLength(16)

Validator({email: "ibnshayed@gmail.com"})
	.isString()
	.isEmail() // check a valid email address

Validator({email: "ibnshayed@gmail.com"})
	.isString()
	.required()
	.isPassword() // Validate a password with minimum eight characters, at least one letter and one number

```

# All Methods
```javascript
Validator({key: value})
.isString() // check the typeof value is a string or not.
.isNumber() // check the typeof value is a number or not.
.isArray() // check the typeof value is a array or not.
.isObject() // check the typeof value is a object ({}) or not.
.required() // the value should not be empty string, null or undefined.
.minLength(number) // minimum length of string
.maxLength(number) // maximum length of string
.isEmail() // check a valid email address
.notNull() // value should not be null
.isPassword() // Validate a password with minimum eight characters, at least one letter and one number
.minNumber(number) // takes a number as a argument and value should be greater than or equal to this number
.maxNumber(number) // takes a number as a argument and value should be smaller than or equal to this number

```
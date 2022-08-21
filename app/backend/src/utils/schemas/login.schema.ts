// const Joi = require('joi').extend(require('@joi/date'));
import Joi = require('joi');

// const REQUIRED_OR_MISSING = 'Some required fields are missing/400';
const STRING_EMPTY = 'All fields must be filled/400';
const INCORRECT_EMAIL = 'Incorrect email or password/401';

const loginSchema = Joi.object({
  email:
    Joi.string()
      .email()
      .required()
      .messages({
        'any.required': STRING_EMPTY,
        'string.empty': STRING_EMPTY,
        'string.email': INCORRECT_EMAIL,
      }),
  password:
    Joi.string()
      .min(6)
      .required()
      .messages({
        'any.required': STRING_EMPTY,
        'string.empty': STRING_EMPTY,
      }),
}).required();

export default loginSchema;

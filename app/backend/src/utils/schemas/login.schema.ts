// const Joi = require('joi').extend(require('@joi/date'));
import Joi = require('joi');

const REQUIRED_OR_MISSING = 'Some required fields are missing/400';

const loginSchema = Joi.object({
  email:
    Joi.string()
      .required()
      .messages({
        'any.required': REQUIRED_OR_MISSING,
        'string.empty': REQUIRED_OR_MISSING,
      }),
  password:
    Joi.string()
      .min(6)
      .required()
      .messages({
        'any.required': REQUIRED_OR_MISSING,
        'string.empty': REQUIRED_OR_MISSING,
      }),
}).required();

export default loginSchema;

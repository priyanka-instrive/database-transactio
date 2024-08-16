const Joi = require("joi");

const userValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .min(8)
      .pattern(new RegExp("(?=.*[a-z])"))
      .pattern(new RegExp("(?=.*[A-Z])"))
      .pattern(new RegExp("(?=.*[0-9])"))
      .pattern(new RegExp("(?=.*[!@#$%^&*])"))
      .required(),
    phone_number: Joi.string().optional().allow(null, ""),
  }),
};

const companyValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().required().trim().max(100),
    address: Joi.string().required().trim().max(200),
    industry: Joi.string().required().trim().max(50),
    registration_number: Joi.string().optional().trim().max(50),
    phone_number: Joi.string()
      .optional()
      .pattern(/^[0-9]{10,15}$/),
    email: Joi.string().optional().email().trim(),
    website: Joi.string().optional().uri().trim(),
  }),
};

const combinedValidationSchema = {
  body: Joi.object().keys({
    user: userValidationSchema.body,
    company: companyValidationSchema.body,
  }),
};

const options = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
};

module.exports = { combinedValidationSchema, options };

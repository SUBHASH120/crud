import Joi from "joi";
export const registrationValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  address: Joi.string().required(),
  mobile: Joi.string().required(),
});

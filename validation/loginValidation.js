import Joi from "joi";
export const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "This field is required",
    "string.email": "Please fill valid email",
  }),
  password: Joi.string().required(),
});

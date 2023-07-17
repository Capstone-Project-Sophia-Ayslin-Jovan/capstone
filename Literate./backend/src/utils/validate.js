const { UnprocessableEntityError, BadRequestError } = require("./errors");

const isNil = (value) =>
  value === null || typeof value === "undefined" || String(value).trim() === "";

const validateFields = ({ required, obj, location }) => {
  if (!obj)
    throw new UnprocessableEntityError(`Missing object for validation.`);

  required.forEach((item) => {
    if (isNil(obj[item])) {
      throw new UnprocessableEntityError(
        `Required field - ${item} missing${location ? ` at ${location}` : ""}`
      );
    }
  });
};

const validateEmail = (email) => {
  const emailRegex = /[^@]+@[^@]+\.[^@]+/;
  if (!email.toLowerCase().match(emailRegex))
    throw new BadRequestError(`Invalid Email`);
};

const validatePassword = (password) => {
  // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!password.match(passwordRegex))
    throw new BadRequestError("Invalid Password");
};

module.exports = { validateFields, isNil, validateEmail, validatePassword };

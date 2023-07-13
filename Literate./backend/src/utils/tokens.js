const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const { InvalidTokenError } = require("./errors");

const genToken = async (data) => {
  return jwt.sign(data, SECRET_KEY, {
    expiresIn: "1h",
  });
};

const createUserToken = async (user) => {
  return genToken(user);
};

const validateUserToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    if (decodedToken) return decodedToken;
    else throw new InvalidTokenError();
  } catch (err) {
    if (err instanceof InvalidTokenError) {
      console.log("Invalid Token");
      return undefined;
    }
    console.log(
      "Error caught while trying to verify token: ",
      token,
      "Error: ",
      err
    );
    throw err;
  }
};

module.exports = {
  genToken,
  createUserToken,
  validateUserToken,
};

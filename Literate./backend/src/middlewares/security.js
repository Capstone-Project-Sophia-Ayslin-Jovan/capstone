const jwt = require("jsonwebtoken");
const { validateToken } = require("../utils/tokens");
const {
  UnauthorizedError,
  InvalidTokenError,
  UnexpectedError, // Add this in getUserFromToken later
} = require("../utils/errors");

const getJWT = async ({ headers }) => {
  const authToken = headers["Bearer"];
  console.log("Token: ", authToken);
  if (!authToken || authToken === "undefined" || authToken === "null") {
    console.log("Invalid header: ", headers);
    throw new UnauthorizedError("Invalid header found");
  }
  console.log("Bearer", authToken);
  return authToken;
};

const getUserFromToken = async (req, res, next) => {
  console.log("Getting User from Token...");
  try {
    const token = getJWT(req);
    console.log("User Token: ", token);
    if (token) {
      res.locals.user = jwt.verify(token, SECRET_KEY);
    } else {
      throw new InvalidTokenError();
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

const requireAuthenticatedUser = async (req, res, next) => {
  console.log("Authenticating User...");
  try {
    const { user } = res.locals;
    if (!user) {
      console.log("No User Retrieved!");
      return next(new UnauthorizedError());
    }

    console.log("Retrieved Authenticated User: ", user);
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getJWT,
  getUserFromToken,
  requireAuthenticatedUser,
};

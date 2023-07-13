const jwt = require("jsonwebtoken");
const { validateUserToken } = require("../utils/tokens");
const {
  UnauthorizedError,
  InvalidTokenError,
  UnexpectedError, // Add this in getUserFromToken later
} = require("../utils/errors");
const { SECRET_KEY } = require("../config/config");

const getJWT = async ({ headers }) => {
  const authToken = headers.bearer;
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
    const token = await getJWT(req);
    console.log("User Token: ", token);
    if (token) {
      const user = jwt.verify(token, SECRET_KEY);
      return user;
    } else {
      throw new InvalidTokenError();
    }
  } catch (err) {
    throw err; // Specify errors later
  }
};

const requireAuthenticatedUser = async (req, res, next) => {
  console.log("Authenticating User...");
  try {
    const user = await getUserFromToken(req);
    if (!user) {
      console.log("No User Retrieved!");
      throw new UnauthorizedError();
    }

    console.log("Retrieved Authenticated User: ", user);
    res.locals.user = user;
    return next();
  } catch (err) {
    return next(err); // Specify what errors later
  }
};

module.exports = {
  getJWT,
  getUserFromToken,
  requireAuthenticatedUser,
};

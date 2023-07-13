require("dotenv").config();
require("colors");

const PORT = process.env.PORT || 3001;
const SECRET_KEY = process.env.SECRET_KEY;
const BCRYPT_WORK_FACTOR = 13;
console.log("LifeTracker Config:".red);
console.log("PORT:".blue, PORT);
console.log("BCRYPT_WORK_FACTOR".blue, BCRYPT_WORK_FACTOR);
// console.log("Database:".blue, getDatabaseUri());
console.log("---");

module.exports = {
  PORT,
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
};

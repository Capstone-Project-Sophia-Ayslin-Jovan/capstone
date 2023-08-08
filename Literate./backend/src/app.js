const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const prisma = new PrismaClient();
const config = require("./config/config");
const app = express();

// const { NotFoundError } = require("./utils/errors");

const userRoutes = require("./api/users/users.controller");
const budgetRoutes = require("./api/budgets/budgets.controller");

// enable cross-origin resource sharing for all origins for all requests hosting our frontend.
app.use(cors("https://literate-frontend.vercel.app/"));
// parse incoming requests with JSON payloads
app.use(express.json());
// log requests info
app.use(morgan("tiny"));

// routes

// health check
app.get("/", async function (req, res) {
  return res.status(200).json({
    ping: "pong",
  });
});

app.use("/users", userRoutes);
app.use("/budgets", budgetRoutes);

// /** Handle 404 errors -- this matches everything */
// app.use(function (req, res, next) {
//   return next(new NotFoundError());
// });

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  console.error(err.stack);
  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;

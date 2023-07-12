const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const prisma = new PrismaClient();
const config = require("./config");
const app = express();

// const { NotFoundError } = require("./utils/errors");

// const authRoutes = require("./routes/auth");

// enable cross-origin resource sharing for all origins for all requests hosting our frontend.
app.use(cors());
// parse incoming requests with JSON payloads
app.use(express.json());
// log requests info
app.use(morgan("tiny"));

// routes
// app.use("/auth", authRoutes);

// health check
app.get("/", async function (req, res) {
  return res.status(200).json({
    ping: "pong",
  });
});

// /** Handle 404 errors -- this matches everything */
// app.use(function (req, res, next) {
//   return next(new NotFoundError());
// });

/** Generic error handler; anything unhandled goes here. */
// app.use(function (err, req, res, next) {
//   if (!config.IS_TESTING) console.error(err.stack);
//   const status = err.status || 500;
//   const message = err.message;

//   return res.status(status).json({
//     error: { message, status },
//   });
// });

module.exports = app;

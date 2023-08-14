const express = require("express");
const app = express();
const middleWare = require("./middleWare/error");

// HANDLE PROMISE REJECTION
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception `);
  process.exit(1); // exit with failure code if there are handle promises left in queue
});

app.use(express.json());
// ROUTER IMPORT
const product = require("./router/productRouter");
const user = require("./router/userRouter");
const order = require("./router/orderRoute")

app.use("/api/v1", product); 
app.use("/api/v1", user);
app.use("/api/v1", order);

// MIDDLEWARE FOR ERRORS
app.use(middleWare);

module.exports = app;

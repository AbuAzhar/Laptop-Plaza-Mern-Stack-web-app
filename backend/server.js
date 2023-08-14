const app = require("./app");
const dotenv = require("dotenv");


const { DBConnectivity } = require("./config/database");

dotenv.config({ path: "backend/config/config.env" });

// DATABASE CONNECTION
DBConnectivity();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on port http://localhost:${process.env.PORT}`);
});

// UNHANDLE PROMISE REJECTION

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection `);
  server.close(() => {
    process.exit(1); // exit with failure code if there are unhandled promises left in queue
  });
});

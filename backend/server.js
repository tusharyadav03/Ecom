const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")


//Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting Down the server due to Uncaught Exception`);
  process.exit(1);
})

//Config

dotenv.config({ path: "backend/config/config.env" });


//Connectiong Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})



//Unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting Down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
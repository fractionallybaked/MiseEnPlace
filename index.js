require("dotenv").config();

// This is the Web Server
const express = require("express");
const server = express();
const cors = require("cors");

// create logs for everything
const morgan = require("morgan");
server.use(morgan("dev"));

// middleware
server.use(cors());

// handle application/json requests
server.use(express.json());

// here's our static files
const path = require("path");
server.use(express.static(path.join(__dirname, "build")));

// here's our API
server.use("/api", require("./routes"));

// by default serve up the react app if we don't recognize the route
server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//404 handler
server.get("*", (req, res) => {
  res.status(404).send({
    error: "404 - Not Found",
    message: "No route found for the requested URL",
  });
});

// error handling middleware
server.use((error, req, res, next) => {
  console.error("SERVER ERROR: ", error);
  if (res.statusCode < 400) res.status(500);
  res.send({
    error: error.message,
    name: error.name,
    message: error.message,
    table: error.table,
  });
});

// bring in the DB connection
const { client } = require("./db/client");

// connect to the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);

  try {
    await client.connect();
    console.log("Database is open for business!");
  } catch (error) {
    console.error("Database is closed for repairs!\n", error);
  }
});

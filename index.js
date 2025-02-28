const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.listen(8000, () => console.log("Server is running on port 3000..."));

app.use(cors());
app.use(express.json());

app.use("/", routes);

module.exports = app;

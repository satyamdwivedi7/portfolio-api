const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const cors = require("cors");
// Connect to MongoDB
mongoose
  .connect("mongodb+srv://satyam:satyam@cluster0.hlk9csa.mongodb.net/portfolio")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.listen(3000, () => console.log("Server is running on port 3000..."));

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use("/images", express.static(process.cwd() + "/public/projects"));
app.use("/", routes);

module.exports = app;

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

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'https://satyamdwivedi.com.np',
}));
app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

module.exports = app;

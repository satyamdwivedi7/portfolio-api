const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: "String",
  description: "String",
  techStack: ["String"],
  github: "String",
  live: "String",
  image: "String",
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;

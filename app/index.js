const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Day 2 working again fully 🚀");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
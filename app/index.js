const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Day 2 Retry for docker-compose 🚀");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
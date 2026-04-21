const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from DevOps App from 2 Step Workflow 🚀");
});

// 👇 export for testing
module.exports = app;

// 👇 run server only if not in test
if (require.main === module) {
  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });
}
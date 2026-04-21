const express = require('express');
const app = express();

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Main API
app.get('/hello', (req, res) => {
  res.status(200).json({ message: "Hello from Backend 🚀" });
});

// Export for testing
module.exports = app;

// Run server only when not testing
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Backend running on port 3000");
  });
}
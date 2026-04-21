const express = require('express');
const axios = require('axios');

const app = express();

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', service: 'gateway' });
});

// Gateway route
app.get('/api/hello', async (req, res) => {
  try {
    const response = await axios.get('http://backend:3000/hello');

    res.status(200).json({
      gateway: "API Gateway",
      data: response.data
    });

  } catch (error) {
    res.status(500).json({
      error: "Backend service unavailable"
    });
  }
});

// Export for testing
module.exports = app;

// Run server
if (require.main === module) {
  app.listen(8080, () => {
    console.log("API Gateway running on port 8080");
  });
}
const request = require('supertest');
const app = require('./index');
const axios = require('axios');

jest.mock('axios');

describe('API Gateway', () => {
  it('GET /api/hello should return backend response', async () => {
    axios.get.mockResolvedValue({
      data: { message: "Hello from Backend 🚀" }
    });

    const res = await request(app).get('/api/hello');

    expect(res.statusCode).toBe(200);
    expect(res.body.gateway).toBe("API Gateway");
    expect(res.body.data.message).toBe("Hello from Backend 🚀");
  });

  it('GET /health should return UP', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe("UP");
  });
});
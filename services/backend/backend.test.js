const request = require('supertest');
const app = require('./index');

describe('Backend Service', () => {
  it('GET /hello should return 200', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello from Backend 🚀");
  });

  it('GET /health should return UP', async () => {
    const res = await request(app).get('/health');
    expect(res.body.status).toBe("UP");
  });
});
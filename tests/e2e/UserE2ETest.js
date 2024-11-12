import request from 'supertest';
import app from '../../src/app.js';
import mongoose from 'mongoose';
import User from '../../src/models/User.js';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('User  End-to-End Tests', () => {
  afterEach(async () => {
    await User.deleteMany({});
  });

  it('should register and log in a user successfully', async () => {
    const registerResponse = await request(app)
      .post('/api/register')
      .send({ username: 'testuser', password: 'password123' });

    expect(registerResponse.status).toBe(201);
    expect(registerResponse.body.message).toBe('User  registered successfully');

    const loginResponse = await request(app)
      .post('/api/login')
      .send({ username: 'testuser', password: 'password123' });

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.body.token).toBeDefined();
  });
});

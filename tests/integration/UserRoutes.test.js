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

describe('User  Routes', () => {
  afterEach(async () => {
    await User.deleteMany({});
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/register')
      .send({ username: 'testuser', password: 'password123' });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User  registered successfully');
  });

  it('should log in a user', async () => {
    await User.create({ username: 'testuser', password: await bcrypt.hash('password123', 10) });

    const response = await request(app)
      .post('/api/login')
      .send({ username: 'testuser', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  it('should return an error for invalid login', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ username: 'non existentuser', password: 'password123' });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('User  not found');
  });
});

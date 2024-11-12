import { registerUser , loginUser  } from '../../src/controllers/UserController.js';
import User from '../../src/models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

jest.mock('../../src/models/User.js');

describe('User Controller', () => {
  describe('registerUser ', () => {
    it('should register a new user successfully', async () => {
      const req = {
        body: {
          username: 'testuser',
          password: 'password123',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.mockImplementation(() => ({
        save: jest.fn().mockResolvedValue(true),
      }));

      await registerUser (req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ message: 'User  registered successfully' });
    });

    it('should return an error if registration fails', async () => {
      const req = {
        body: {
          username: 'testuser',
          password: 'password123',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.mockImplementation(() => {
        throw new Error('Registration error');
      });

      await registerUser (req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Error registering user', error: expect.any(Error) });
    });
  });

  describe('loginUser ', () => {
    it('should log in a user successfully', async () => {
      const req = {
        body: {
          username: 'testuser',
          password: 'password123',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const mockUser  = {
        _id: '12345',
        username: 'testuser',
        password: await bcrypt.hash('password123', 10),
      };

      User.findOne.mockResolvedValue(mockUser );
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);
      jest.spyOn(jwt, 'sign').mockReturnValue('mockToken');

      await loginUser (req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ token: 'mockToken' });
    });

    it('should return an error if user is not found', async () => {
      const req = {
        body: {
          username: 'nonexistentuser',
          password: 'password123',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValue(null);

      await loginUser (req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'User  not found' });
    });
  });
});

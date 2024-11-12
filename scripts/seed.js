import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../src/models/User.js';

dotenv.config();

const seedDatabase = async () => {
  // Connect to MongoDB
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Seed initial users
  const users = [
    { username: 'alice', password: await bcrypt.hash('password123', 10) },
    { username: 'bob', password: await bcrypt.hash('password456', 10) },
    { username: 'charlie', password: await bcrypt.hash('password789', 10) },
  ];

  await User.insertMany(users);
  console.log('Database seeded with initial users.');

  // Close the connection
  await mongoose.connection.close();
};

seedDatabase().catch((error) => {
  console.error('Error seeding database:', error);
  process.exit(1);
});

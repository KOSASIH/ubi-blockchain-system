# UBI Backend

## Overview

The UBI Backend is a Node.js and Express-based application that serves as the server-side component for the Universal Basic Income (UBI) Blockchain System. It provides RESTful APIs for user management, authentication, and interaction with the blockchain.

## Features

- User registration and authentication
- Secure password storage with hashing
- Token-based authentication using JWT
- MongoDB integration for data persistence
- Error handling middleware
- CORS support for cross-origin requests

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Jest for testing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   ```bash
   1 git clone https://github.com/KOSASIH/ubi-blockchain-system.git
   2 cd ubi-blockchain-system/backend/config
   ```

2. Install dependencies:

   ```bash
   1 npm install
   ```

3. Create a .env file in the backend/config directory and add the following variables:

   ```plaintext
   1 MONGODB_URI=mongodb://localhost:27017/ubi
   2 JWT_SECRET=your_jwt_secret
   3 PORT=5000
   ```

4. Running the Application
To start the server in development mode, run:

   ```bash
   1 npm run dev
   ```

The application will be available at http://localhost:5000.

### Building for Production
#### To start the server in production mode, run:

   ```bash
   1 npm start
   ```

#### Running Tests
To run the tests, use:

   ```bash
   1 npm test
   ```

### Linting and Formatting
To lint the code, run:

   ```bash
   1 npm run lint
   ```

To format the code, run:

   ```bash
   1 npm run format
   ```

## Contributing
We welcome contributions! Please follow the guidelines below to contribute to the project:

1. Fork the Repository: Click on the "Fork" button at the top right of the repository page to create your own copy of the project.

2. Create a new branch: Create a new branch for your feature or bug fix.

   ```bash
   1 git checkout -b feature/your-feature-name
   ```

3. Make your changes: Implement your feature or fix the bug.

4. Commit your changes: Commit your changes with a descriptive message.

   ```bash
   1 git commit -m "Add your descriptive message here"
   ```

5. Push to your branch: Push your changes to your forked repository.

   ```bash
   1 git push origin feature/your-feature-name
   ```

6. Create a Pull Request: Go to the original repository and create a pull request from your branch.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Thanks to the contributors and the open-source community for their support and resources.
- Special thanks to the developers of the libraries and frameworks used in this project.
- For any questions or issues, please open an issue in the repository or contact the maintainers.

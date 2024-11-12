<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/KOSASIH/ubi-blockchain-system">UBI Blockchain System</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/kosasih-81b46b5a">KOSASIH</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Creative Commons Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""></a></p>

# ubi-blockchain-system
A decentralized platform implementing a Universal Basic Income (UBI) system using blockchain technology to ensure transparency, security, and equitable distribution of income. Funded through taxes on automation and AI-driven productivity gains, this project aims to reduce economic inequality and empower individuals to pursue education and entrepreneurship.

# UBI Blockchain System

## Overview

The UBI Blockchain System is a decentralized application designed to facilitate the distribution of Universal Basic Income (UBI) using blockchain technology. This project includes a back-end built with Node.js and Express, smart contracts deployed on the Ethereum blockchain, and a MongoDB database for data persistence.

## Features

- User registration and authentication
- Secure password storage with hashing
- Token-based authentication using JWT
- Smart contract deployment for UBI distribution
- MongoDB integration for data persistence
- RESTful API for client interaction
- Comprehensive testing suite

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Ethers.js
- JWT
- Bcrypt
- Jest for testing
- Solidity for smart contracts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or cloud instance)
- Infura account for Ethereum network access

### Installation

1. Clone the repository:

   ```bash
   1 git clone https://github.com/KOSASIH/ubi-blockchain-system.git
   2 cd ubi-blockchain-system
   ```

2. Install dependencies:

   ```bash
   1 npm install
   ```
   
3. Create a .env file in the root directory and add the following variables:

   ```bash
   1 MONGODB_URI=mongodb://localhost:27017/ubi
   2 JWT_SECRET=your_jwt_secret_here
   3 INFURA_URL=https://mainnet.infura.io/v3/your_infura_project_id
   4 PRIVATE_KEY=your_private_key_here
   5 PORT=5000
   ```

### Running the Application
To start the server in development mode, run:

   ```bash
   1 npm run dev
   ```

The application will be available at http://localhost:5000.

### Running Tests
To run the tests, use:

   ```bash
   1 npm test
   ```

### Deployment
To deploy the smart contracts, run:

   ```bash
   1 node scripts/deploy.js
   ```

### Seeding the Database
To seed the database with initial data, run:

   ```bash
   1 node scripts/seed.js
   ```

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Thanks to the contributors and the open-source community for their support and resources.
- Special thanks to the developers of the libraries and frameworks used in this project.
- Feel free to reach out if you have any questions or suggestions!


 

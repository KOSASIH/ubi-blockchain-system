# API Documentation for the Universal Basic Income Blockchain System

## Introduction
This document provides an overview of the API endpoints available in the UBI Blockchain System. The API follows RESTful principles and allows interaction with the backend services.

## Base URL

[https://api.ubi-blockchain-system.com/v1](https://api.ubi-blockchain-system.com/v1) 


## Authentication
All API requests require authentication via a Bearer token. Include the token in the Authorization header:

```
Authorization: Bearer <your_token>
```


## Endpoints

### 1. User Registration
- **POST** `/users/register`
- **Request Body**:
  ```json
  1   {
  2     "name": "string",
  3     "email": "string",
  4     "password": "string"
  5   }
  ```

- Response:
  - 201 Created: User successfully registered.
  - 400 Bad Request: Validation errors.

### 2. User Login

- **POST** /users/login
- **Request Body**:
  ```json
  1 {
  2   "email": "string",
  3   "password": "string"
  4 }
  ```
- Response:
  - 200 OK: Returns user details and authentication token.
  - 401 Unauthorized: Invalid credentials.

### 3. Get User Profile

- **GET** /users/profile
- Response:
  - 200 OK: Returns user profile information.
  - 401 Unauthorized: Authentication required.

### 4. Get UBI Balance

- **GET** /ubi/balance
- **Response**:
  - 200 OK: Returns current UBI balance.
  - 401 Unauthorized: Authentication required.

### 5. Transaction History

- **GET** /transactions/history
- Response:
  - 200 OK: Returns a list of transactions.
  - 401 Unauthorized: Authentication required.

## Conclusion
This API documentation provides a comprehensive overview of the available endpoints for interacting with the UBI Blockchain System. For further details or updates, please refer to the official documentation or contact support.


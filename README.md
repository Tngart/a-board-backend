Project Documentation

Overview

This project is a NestJS-based backend service that includes authentication, database management, and modularized service handling. The project is structured into multiple modules and utilities for maintainability and scalability.

Project Structure

src/
├── auth/ # Authentication-related files
│ ├── decorators.ts # Custom decorators for authentication
│ ├── guard.ts # Authentication guard
│
├── core/ # Core utilities and configurations
│ ├── config/ # Configuration files
│ ├── dto/ # Data Transfer Objects
│ ├── exceptions/ # Custom exception handlers
│
├── database/ # Database schemas and models
│ ├── post/ # Post-related database schemas
│ │ ├── document.ts # Mongoose document definition
│ │ ├── embedded.ts # Embedded schema for posts
│ │ ├── enum.ts # Post-related enums
│ │ ├── schema.ts # Main post schema
│ ├── user/ # User database schemas
│ ├── model.ts # User model definition
│ ├── module.ts # User module configuration
│
├── modules/ # Application modules
│ ├── posts/ # Post-related functionalities
│ │ ├── services/ # Services handling CRUD operations
│ │ │ ├── create/ # Create post service
│ │ │ ├── delete/ # Delete post service
│ │ │ ├── get/ # Get post service
│ │ │ ├── list/ # List posts service
│ │ │ ├── update/ # Update post service
│ │ ├── update-message/ # Handle update messages for posts
│ │ │ ├── dto.ts # DTO for message updates
│ │ │ ├── service.ts # Service for handling message updates
│ │ │ ├── helper.service.ts # Helper functions for updates
│ │ │ ├── index.ts # Entry point for message updates
│ │ ├── controller.ts # API controller for posts
│
│ ├── users/ # User-related functionalities
│ │ ├── services/ # User services
│ │ ├── controller.ts # User controller
│
├── utils/ # Utility functions
│ ├── helpers/ # Helper functions
│ │ ├── regex.ts # Regular expression utilities
│ ├── models/ # General models
│ │ ├── request.model.ts # Model for handling requests
│ ├── mongoose/ # Mongoose-related utilities
│ │ ├── mongoose.enum.ts # Enums for Mongoose
│
├── app.module.ts # Root application module
├── main.ts # Application entry point
│
├── test/ # Testing configuration
│ ├── app.e2e-spec.ts # End-to-end tests
│ ├── jest-e2e.json # Jest configuration
│
├── .env # Environment variables
├── .gitignore # Git ignore file
├── .prettierrc # Prettier configuration
├── nest-cli.json # NestJS CLI configuration
├── package-lock.json # NPM package lock file
├── package.json # NPM package file

Installation

npm install

Create a `.env` file in the root directory and add the following values:
`MONGO_URL` → The MongoDB connection URL.
`JWT_SECRET` → The secret key for signing JWT tokens (should be a strong and secure value).

Running the Application

npm run start

For development mode:

npm run start:dev

Testing

Run unit tests:

npm run test

Run end-to-end tests:

npm run test:e2e

Environment Variables

Ensure you have a .env file configured with the necessary environment variables.

API Documentation

To be defined (consider using Swagger or Postman for documentation).

License

MIT

Please provide feedback if possible.

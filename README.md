# NestJS-APP-Assesment

## Overview

This project is a NestJS application that handles PostgreSQL user and wallet address tables. The application is designed to provide a robust API for managing user and wallet data with the ability to create, read, update, and delete entries.

## Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm
- PostgreSQL

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Vikrantsingh22/NestJS-APP-Assesment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd NestJS-APP-Assesment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file from the sample environment file provided:

5. Update the `.env` file with your PostgreSQL database connection details:

   ```plaintext
   DATABASE_URL="postgresql://test:test@localhost:5432/test"
   ```

6. Run the database migrations:

   ```bash
   npx prisma migrate dev
   ```

7. Start the application:
   ```bash
   npm run start
   ```

Now the server is running and you can access the API.

## API Documentation

For detailed API reference, you can refer to the Postman documentation:
[API Documentation](https://documenter.getpostman.com/view/26805733/2sA3Qy7V2x)

- https://documenter.getpostman.com/view/26805733/2sA3Qy7V2x

This documentation provides a comprehensive guide on how to use the API endpoints, including examples of requests and responses.

## Environment Variables

- `DATABASE_URL`: Connection string for the PostgreSQL database.

## Running Migrations

To apply database migrations, run:

```bash
npx prisma migrate dev
```

This will ensure your database schema is up-to-date with the latest changes.

## Running the Application

To start the application, use:

```bash
npm run start
```

The application will be available at `http://localhost:3000`.

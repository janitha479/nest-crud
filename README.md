# NestJS Backend Project

A scalable and efficient backend API built with NestJS, designed for managing products, users, and authentication. This project demonstrates best practices in modular architecture, database integration, and testing.

## Project Overview

This is a backend application developed using the NestJS framework, providing RESTful APIs for product management, user authentication, and related functionalities. It serves as a foundation for e-commerce or inventory systems, emphasizing clean code, type safety, and maintainability.

### Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **TypeScript**: Ensures type safety and better developer experience.
- **MySQL**: Relational database for data persistence.
- **Prisma**: ORM for database interactions, migrations, and schema management.
- **Jest**: Testing framework for unit and integration tests.

### Key Features

- Modular architecture with feature-based modules.
- Soft delete functionality for data integrity.
- Comprehensive testing with unit and integration tests.
- Input validation using DTOs.
- Global error handling and logging.
- Environment-based configuration.

## Folder Structure

The project follows a modular folder structure to promote separation of concerns and scalability.

- **`src/`**: Main source directory containing the application code.
  - **`modules/`**: Contains feature-specific modules (e.g., products, users, auth). Each module encapsulates controllers, services, and related logic.
  - **`common/`**: Shared utilities, decorators, guards, and interceptors used across modules (e.g., authentication guards, custom pipes).
  - **`dto/`**: Data Transfer Objects for request/response validation and serialization. Ensures type safety and API consistency.
  - **`prisma/`**: Database-related files, including the Prisma schema and service for database connections.
  - **`config/`**: Configuration files for environment variables, database settings, and app-wide configurations.
- **`utils/`**: Utility functions and helpers that can be reused across the application (e.g., date formatters, string utilities).
- **`test/`**: End-to-end tests and test utilities.

## Modules / Use Cases

The application is organized into the following modules:

- **Products Module**:
  - Purpose: Manages product inventory, including creation, retrieval, updates, and soft deletion.
  - Use Cases:
    - Create a new product (POST /products).
    - Retrieve all active products (GET /products).
    - Get a specific product by ID (GET /products/:id).
    - Update product details (PATCH /products/:id).
    - Soft delete a product (DELETE /products/:id).

- **Users Module**:
  - Purpose: Handles user management and profiles.
  - Use Cases:
    - Register a new user.
    - Retrieve user profile.
    - Update user information.

- **Auth Module**:
  - Purpose: Manages authentication and authorization.
  - Use Cases:
    - User login (POST /auth/login).
    - User registration (POST /auth/register).
    - Token-based authentication for protected routes.

## Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MySQL database

### Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### Install Dependencies

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
JWT_SECRET="your-jwt-secret"
PORT=3000
```

### Database Setup

1. Ensure MySQL is running.
2. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```
3. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

### Run the Server

```bash
# Development mode (with hot reload)
npm run start:dev

# Production mode
npm run start:prod
```

The server will start on `http://localhost:3000`.

## Testing

This project uses Jest for comprehensive testing.

### Run Unit Tests

```bash
npm run test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run Test Coverage

```bash
npm run test:cov
```

### Test Structure

- **`.spec.ts` files**: Located alongside controllers and services (e.g., `products.service.spec.ts`).
  - Test controllers for API endpoints and HTTP responses.
  - Test services for business logic and database interactions.
  - Use mocks for external dependencies (e.g., PrismaService) to isolate units.

## Usage

### API Endpoints

- **Products**:
  - `POST /products`: Create a product.
  - `GET /products`: Get all products.
  - `GET /products/:id`: Get product by ID.
  - `PATCH /products/:id`: Update product.
  - `DELETE /products/:id`: Soft delete product.

### Sample Request/Response

**Create Product**:

```bash
POST /products
Content-Type: application/json

{
  "name": "Sample Product",
  "description": "A sample product description",
  "price": 29.99
}
```

**Response**:

```json
{
  "id": 1,
  "name": "Sample Product",
  "description": "A sample product description",
  "price": 29.99,
  "createdAt": "2025-11-17T00:00:00.000Z",
  "updatedAt": "2025-11-17T00:00:00.000Z",
  "deletedAt": null
}
```

## Notes

- **DTOs**: Data Transfer Objects are used to define the structure of data exchanged between client and server. They ensure validation, type safety, and prevent over-posting. Validation is handled using class-validator decorators.
- **Validation**: Input validation is implemented using DTOs with decorators like `@IsString()`, `@IsNumber()`, etc. Invalid requests return appropriate error messages.
- **Best Practices**:
  - Modular architecture for scalability.
  - Dependency injection for testability.
  - Soft deletes to maintain data integrity.
  - Comprehensive testing to ensure reliability.
  - Environment-based configuration for security.

For more details, refer to the NestJS documentation or contact the development team.

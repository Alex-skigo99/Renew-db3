# Renew-db3

A Node.js application with Express, PostgreSQL, and Knex.js.

## Project Setup

### Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)
- PostgreSQL (v10 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Renew-db3
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env` (or create a new `.env` file)
   - Update the database credentials in the `.env` file

4. Create PostgreSQL databases:
```bash
createdb renew_db
createdb renew_db_test  # For testing
```

5. Run migrations:
```bash
npm run migrate
```

6. Seed the database (optional):
```bash
npm run seed
```

### Running the Application

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

## Database Migrations

Create a new migration:
```bash
npx knex migrate:make migration_name
```

Run migrations:
```bash
npm run migrate
```

Rollback migrations:
```bash
npm run migrate:rollback
```

## Database Seeds

Create a new seed file:
```bash
npx knex seed:make seed_name
```

Run seed files:
```bash
npm run seed
```
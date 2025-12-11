# Demo Card App

A full-stack card collection web application built with Angular and Node.js/Express. This application serves as a **test subject** for evaluating AI coding assistants through the [demo-card-ai-runner](https://github.com/your-org/demo-card-ai-runner) test harness.

> ⚠️ **Important**: This repository contains only the application source code. It is **not independently runnable** without the infrastructure provided by [demo-card-ai-runner](https://github.com/your-org/demo-card-ai-runner), which supplies the database setup scripts, docker-compose.yml, and test data.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Repository Contents](#repository-contents)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Development](#development)
- [Testing with AI Runner](#testing-with-ai-runner)
- [Troubleshooting](#troubleshooting)

---

## Overview

Demo Card App is a card collection management system that allows users to:
- Browse and search card collections
- Manage their personal card inventory
- Add cards to a shopping cart
- Complete purchases with tax calculations
- Set and track collection goals
- View dashboard statistics

This application is designed to be modified by AI coding assistants as part of automated evaluation benchmarks.

---

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Frontend | Angular | 20.x |
| Styling | Tailwind CSS | 3.x |
| Backend | Node.js + Express | 5.x |
| Database | PostgreSQL | 15 |
| Language | TypeScript | 5.x |

---

## Repository Contents

This repository contains:

| Component | Description |
|-----------|-------------|
| `frontend/` | Angular application with Dockerfile |
| `rest/` | Express.js REST API with Dockerfile |
| `db/99 Additional.sql` | Supplementary database migrations |

**What's NOT included** (provided by [demo-card-ai-runner](https://github.com/your-org/demo-card-ai-runner)):
- `docker-compose.yml` - Container orchestration
- Database initialization scripts (table creation, seed data)
- Test suite and testing infrastructure
- Card image assets

---

## Running the Application

### Recommended: Use with demo-card-ai-runner

This application is designed to run via the [demo-card-ai-runner](https://github.com/your-org/demo-card-ai-runner) test harness, which provides all necessary infrastructure:

```bash
# 1. Clone both repositories
git clone <demo-card-app-repo> demo-card-app-orig
git clone <demo-card-ai-runner-repo> demo-card-ai-runner

# 2. Set up and run via AI runner
cd demo-card-ai-runner
python3 ai-runner.py
```

The AI runner will:
- Copy the app source code
- Add docker-compose.yml and database scripts
- Start all services (PostgreSQL, REST API, Frontend)
- Run the AI assistant with test prompts
- Execute automated tests

---

## Project Structure

```
demo-card-app/
├── frontend/                 # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # Reusable UI components
│   │   │   │   ├── cart/     # Shopping cart component
│   │   │   │   ├── header/   # Navigation header
│   │   │   │   └── sidebar/  # Sidebar navigation
│   │   │   ├── pages/        # Route-based page components
│   │   │   │   ├── checkout/ # Checkout flow
│   │   │   │   ├── collections/ # Card collections
│   │   │   │   ├── dashboard/   # Main dashboard
│   │   │   │   ├── goals/       # Goal tracking
│   │   │   │   ├── login/       # Authentication
│   │   │   │   ├── profile/     # User profile
│   │   │   │   └── store/       # Card store
│   │   │   ├── services/     # Angular services
│   │   │   └── guards/       # Route guards
│   │   └── assets/           # Static assets
│   ├── Dockerfile
│   └── package.json
├── rest/                     # Express.js REST API
│   ├── src/
│   │   ├── app.ts           # Main application & routes
│   │   └── database.ts      # PostgreSQL connection
│   ├── Dockerfile
│   └── package.json
└── db/                       # Database scripts
    └── 99 Additional.sql    # Supplementary migrations
```

---

## Features

### Dashboard
- Total cards count
- Collection statistics
- Completed goals tracker

### Card Store
- Browse available cards
- Filter by set, rarity, type
- Add to cart functionality

### Shopping Cart
- View cart items
- Adjust quantities
- Inventory validation

### Checkout
- Order summary
- Tax calculation (state-based)
- Purchase confirmation

### Goals
- Create collection goals
- Track progress with progress bars
- Multiple goal types supported

### User Profile
- View user information
- Purchase history
- VIP status indicator

---

## API Endpoints

### Authentication
- `POST /api/login` - User authentication

### Users
- `GET /api/users` - List all users
- `GET /api/users/:id` - Get user by ID

### Cards
- `GET /api/cards` - List all cards
- `GET /api/cards/count` - Get total card count

### Cart
- `GET /api/cart` - Get cart contents
- `PUT /api/cart/items/:id` - Update cart item quantity

### Goals
- `GET /api/goals` - List user goals
- `POST /api/goals` - Create new goal

### Checkout
- `POST /api/checkout` - Process order

---

## Development

### Frontend Development

```bash
cd frontend

# Start dev server with hot reload
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Generate new component
ng generate component components/my-component
```

### Backend Development

```bash
cd rest

# Start with auto-reload
npm run start:dev
```

### Code Style

- Frontend uses Prettier with Angular parser
- Single quotes preferred
- 100 character line width

---

## Testing with AI Runner

This application is designed to be tested with the [demo-card-ai-runner](https://github.com/your-org/demo-card-ai-runner) test harness.

### Setup

1. Copy this application to serve as the source:
   ```bash
   cp -r demo-card-app /code/demo-card-app-orig
   ```

2. Clone and set up the AI runner:
   ```bash
   git clone <ai-runner-repo-url>
   cd demo-card-ai-runner
   ```

3. Run tests:
   ```bash
   python3 ai-runner.py
   ```

The AI runner provides all necessary infrastructure (docker-compose.yml, database scripts, test data) that is not included in this repository.

### Test Requirements

The AI runner evaluates the following modification tasks:

| ID | Task |
|----|------|
| R1 | Update dashboard placeholder value |
| R2 | Implement real card count from database |
| R3 | Add inventory validation to cart |
| R4 | Implement state-based tax calculation |
| R5 | Add "Total Unique" goal type |
| R6 | Add "Total Above 4" goal type |
| R7 | Implement VIP badge feature |

For detailed information on test configurations and context levels, see the [demo-card-ai-runner README](https://github.com/your-org/demo-card-ai-runner#readme).

---

## Troubleshooting

### Database Connection Issues

**Error**: `ECONNREFUSED` or database not found

**Solution**:
```bash
# Ensure PostgreSQL is running
docker ps | grep postgres

# Check database logs
docker logs postgres

# Verify connection string in rest/src/database.ts
# Default: postgresql://postgres:password1!@localhost:5432/cardapp
```

### Frontend Build Errors

**Error**: Angular CLI or dependency issues

**Solution**:
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

### Port Conflicts

**Error**: Port already in use

**Solution**:
```bash
# Find process using port
lsof -i :3001
lsof -i :4200

# Kill process or change port in configuration
```

### CORS Errors

**Error**: Cross-origin request blocked

The REST API includes CORS headers for all origins in development. Ensure you're accessing the frontend through the correct URL.

---

## Related Projects

- [demo-card-ai-runner](https://github.com/your-org/demo-card-ai-runner) - AI assistant evaluation test harness (provides infrastructure to run this app)

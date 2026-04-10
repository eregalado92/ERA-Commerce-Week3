# ERA Commerce — Backend API

## Overview
REST API for the ERA Commerce internal store. Employees browse products,
place orders, and track deliveries. Admins manage inventory and view reports.

## Tech Stack
- Node.js + Express
- MySQL (products, users, orders)
- MongoDB (reviews, inventory logs)
- bcryptjs (password hashing)
- jsonwebtoken (JWT authentication)

## Setup
1. Clone the repo
2. cd backend
3. npm install
4. Copy .env.example to .env and fill in your values
5. Create ecommerce_db in MySQL and run the schema
6. npm run dev

## Environment Variables
DB_HOST, DB_USER, DB_PASSWORD, DB_NAME
MONGO_URI, JWT_SECRET, JWT_EXPIRES_IN

## API Routes
### Auth
POST /auth/login    — login, returns JWT token
POST /auth/users    — register new user

### Products (requires JWT)
GET  /products                      — all products with category
GET  /products/category/:categoryId — filter by category
GET  /products/:id                  — single product with reviews
POST /products                      — create product (admin only)

### Categories (requires JWT)
GET /categories — all categories with product count

### Orders (requires JWT)
POST /orders      — place an order (uses MySQL transaction)
GET  /orders      — all orders (admin) or own orders (customer)
GET  /orders/my   — current user orders
GET  /orders/:id  — single order with items

### Reviews (requires JWT)
POST /reviews — submit a product review to MongoDB

### Reports (admin only)
GET /reports/sales          — sales summary
GET /reports/top-products   — top selling products
GET /reports/category-sales — revenue by category
GET /inventory              — stock status for all products

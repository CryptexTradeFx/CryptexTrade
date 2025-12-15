# Cryptex FX Trade Platform

A full-stack trading application built with a separate frontend (HTML/CSS/JS) and backend (Node.js/Express/MongoDB).

## Setup Instructions

### 1. Backend Setup (Node.js/MongoDB)

1.  Navigate to the `backend/` directory.
2.  Run `npm install` to install dependencies.
3.  Copy `.env.example` to a new file named `.env` and fill in your MongoDB connection string and JWT secret.
4.  Run `npm start` (or `npm run dev` if you installed `nodemon`) to start the API server.

### 2. Frontend Setup (HTML/CSS/JS)

1.  Open the `frontend/index.html` file directly in your web browser.
2.  Ensure the backend server is running for live prices and authentication to work via API calls in `script.js`.

### 3. Deployment

Refer to `deploy.sh` for one-click deployment scripts (requires configuration of your specific hosting environment CLIs).

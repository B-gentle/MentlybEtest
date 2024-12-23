# Issue Tracking System

This is a Node.js-based backend API for managing projects and issues in an issue tracking system. It includes features such as user authentication, role-based access control, project management, issue tracking, and more.

---

## Features

### User Management
- User Registration
- Login with JWT Authentication
- Role-based Access Control (Admin, Project Manager, Developer)

### Project Management
- Create, List, Update, and Delete Projects

### Issue Management
- Create and List Issues with Filtering and Pagination
- Update Issue Status
- Assign Issues to Users
- Add Comments to Issues

---

## Technologies Used
- **Node.js** with **Express.js** for server-side development
- **MongoDB** as the database
- **JWT** for authentication
- **Docker** for containerization
- **Jest** for testing
- **Cookie-parser** for sending cookie to the client-side

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (optional)
- [Jest](https://jestjs.io/docs/getting-started)
- [Nodemon](npm i -g nodemon)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/issue-tracker.git
   cd issue-tracker


   git clone https://github.com/your-username/issue-tracker.git
   cd issue-tracker
Install dependencies:

bash
Copy code
npm install
Create an .env file and add the following variables:

env
Copy code
PORT=8000
MONGO_URI=available_on_request
JWT_SECRET=your_jwt_secret
Start the development server:

bash
Copy code
node server.js
Access the API at http://localhost:8000.

## API Endpoints
### User
POST /api/users/signup - Register a new user.
POST /api/users/login - Log in and get a JWT.
GET /api/users/profile - Get logged in user profile

### Projects
POST /api/projects - Create a new project (Admin/Project Manager only).
GET /api/projects - List all projects.
PATCH /api/projects/:id - Update project details (Admin/Project Manager only).
DELETE /api/projects/:id - Delete a project (Admin only).

### Issues
POST /api/issues - Create an issue.
GET /api/issues - List issues with filtering and pagination.
PATCH /api/issues/:id - Update issue status.
PUT /api/issues/:id/assign - Assign an issue to a user.
POST /api/issues/:id/comments - Add a comment to an issue.

Testing
Run tests using Jest:

bash
Copy code
npm test
Docker Usage
Build and run the application using Docker Compose
# Task Report Backend

This is the backend part of my Daily Task Report project. It's built using Node.js, Express, and MongoDB. It allows users to register, log in, and manage their daily work reports (tasks). I used JWT for authentication and cookies to store the token securely.

---

## 📦 Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Cookie-Parser
- Bcrypt for password hashing

---

## ✨ Features

- User registration and login
- Passwords are securely hashed using bcrypt
- JWT authentication with HttpOnly cookies
- Create, read, update, and delete tasks
- Each task includes title, description, hours worked, status, and date
- Only logged-in users can manage their own tasks

## 📁 Project Structure
server/
├── controllers/
│ └── userController.js
│ └── taskController.js
├── models/
│ └── user.js
│ └── task.js
├── routes/
│ └── userRouter.js
│ └── taskRouter.js
│ └── index.js
├── middleware/
│ └── authMiddleware.js
│ └── errorMiddleware.js
├── db/
│ └── index.js
├── .env
├── index.js


---

## 🌐 API Routes

### 🔐 Auth Routes (`/api/user`)

| Method | Route           | Description          |
|--------|------------------|----------------------|
| POST   | `/register`      | Register a new user  |
| POST   | `/login`         | Login and receive token in cookie |
| POST   | `/logout`        | Logout (clears cookie) |

### 🧾 Task Routes (`/api/task`) – Protected

| Method | Route         | Description         |
|--------|----------------|---------------------|
| POST   | `/`            | Create a task       |
| GET    | `/`            | Get tasks (paginated) |
| PUT    | `/:id`         | Update a task       |
| DELETE | `/:id`         | Delete a task       |

---

## 🛠️ Setup & Installation

### Step 1: Clone the Repo

```bash
git clone https://github.com/your-username/task-report-backend.git
cd task-report-backend

npm install

Create .env File
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

// Run the Server
npm run dev

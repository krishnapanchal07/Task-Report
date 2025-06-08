# MERN Task Report Application

A full-stack Task Reporting System built using the MERN stack: MongoDB, Express, React, and Node.js.

This app allows users to:

- Register & Login securely
- Add, update, and delete daily task reports
- View their personal task dashboard
- Protected routes ensure only authenticated users access sensitive data

# Folder Structure

Task-Report/
├── server/ # Backend (Node.js, Express, MongoDB)
├── task-App/ # Frontend (React)
│ ├── src/
│ ├── package.json
│ └── node_modules/
└── README.md

# Backend Setup (in `/server` folder)

1.install all dependencies
    npm install

2.Create a .env file

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

3.run server first usiing this command
npm run dev

it will run on http://localhost:3000

# Frontend Setup (in /task-App folder)

1. cd task-App

2. install all dependencies
   npm install

3. run the frontend-app
npm start

it should be in run on http://localhost:3001 because of cors origin

# Features

1 User Registration & Login (with JWT)

2 Add Task (title, description, date, hours, status)

3 Edit/Delete Tasks

4 Protected Dashboard (only logged-in users can access)

5 Logout functionality

6 Error handling & form validation using react-hook-form

7 Clean UI using custom CSS

# Make sure MongoDB is running locally or use MongoDB Atlas

# Both frontend and backend must be running at the same time



# Author
Krishna Panchal

Book Review Platform
Overview
The Book Review Platform is a web application where users can register, log in, and post reviews of their favorite books. Users can also edit and delete their own reviews, view a list of all reviews, and view their profile with all their reviews.

Features
User Authentication
User Registration
User Login
Password Encryption
Book Review Management
Add a Book Review
View Book Reviews
Edit Book Review
Delete Book Review
User Profile
View and edit profile information (username, email)
Display all reviews created by the user
Responsive User Interface
Technologies Used
Frontend: React, Material-UI
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
State Management: Context API
Prerequisites
Node.js (v14 or higher)
MongoDB (local or cloud instance)
npm (v6 or higher)
Installation
Clone the repository:
bash
Copy code
cd book-review-platform
Install dependencies for both the frontend and backend:
bash
Copy code
# In the project root directory, install backend dependencies
cd backend
npm install

# In a separate terminal, install frontend dependencies
cd ../frontend
npm install
Set up environment variables:
Create a .env file in the backend directory with the following content:

makefile
Copy code
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
Replace your-mongodb-connection-string with your actual MongoDB connection string and your-secret-key with a secret key for JWT.

Running the Application
Start the backend server:
bash
Copy code
cd backend
npm start
The backend server will start on http://localhost:5000.

Start the frontend development server:
bash
Copy code
cd frontend
npm start
The frontend server will start on http://localhost:3000.

Usage
Open your browser and navigate to http://localhost:3000.
Register a new account or log in with an existing account.
Add, edit, and delete book reviews.
View the list of all book reviews.
View and edit your profile information.
API Endpoints
Authentication
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
Reviews
POST /api/reviews - Add a new book review (authenticated)
GET /api/reviews - Get all book reviews
GET /api/reviews/:id - Get a book review by ID
PUT /api/reviews/:id - Update a book review (authenticated)
DELETE /api/reviews/:id - Delete a book review (authenticated)
User Profile
GET /api/users/me - Get current user's profile (authenticated)
PUT /api/users/me - Update current user's profile (authenticated)
GET /api/reviews/user/:id - Get reviews by user ID
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under Mahmoud.

Contact
For any questions or feedback, please contact [mahmetwally99@gmail.com].
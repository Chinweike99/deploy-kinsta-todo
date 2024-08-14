# Todo List Application

This is a simple Todo List application built with React on the frontend, Node.js and Express.js on the backend, and PostgreSQL as the database. The application allows users to sign up, log in, and manage their tasks.

## Features

- User authentication (Sign up, Login)
- Create, Read, Update, Delete (CRUD) tasks

## Technologies Used

- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Tokens), bcrypt for password hashing

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-list-app.git
    cd todo-list-app
    ```

2. Install the necessary dependencies:

    - Backend:
      ```bash
      cd server
      npm install
      ```

    - Frontend:
      ```bash
      cd client
      npm install
      ```

3. Set up environment variables:
   
   Create a `.env` file in the `server` directory with the following variables:

    ```env
    PORT=8000
    DATABASE_URL=your_postgresql_connection_string
    JWT_SECRET=your_jwt_secret
    REACT_APP_SERVERURL=http://localhost:8000
    ```

4. Run the application:

    - Backend:
      ```bash
      cd server
      npm start
      ```

    - Frontend:
      ```bash
      cd client
      npm start
      ```

    The frontend will run on `http://localhost:3000` and the backend on `http://localhost:8000`.

## Usage

- **Sign Up:** Create a new account by providing an email and password.
- **Login:** Log in with your email and password.
- **Manage Tasks:** Add, edit, and delete tasks in your Todo List.

## Folder Structure

- `client/`: Contains the React frontend.
- `server/`: Contains the Node.js/Express backend.
- `db/`: PostgreSQL database setup and queries.

## License


*Happy coding!*

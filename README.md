# Token Tracker Application

## Overview
The Token Tracker application is a full-stack application designed to track and manage various tokens. It features a modern frontend built with React and Tailwind CSS, and a robust backend powered by Express and Prisma.

## Project Structure
The project is organized into the following main directories:

- **frontend**: Contains the React application.
- **backend**: Contains the Express server and API logic.
- **shared**: Contains shared types and interfaces used by both frontend and backend.
- **scripts**: Contains utility scripts for development and database setup.
- **docker-compose.yml**: Configuration for running the application in Docker.
- **Dockerfile**: Instructions for building the Docker image.

## Frontend
The frontend is built using React and styled with Tailwind CSS. Key components include:

- **Dashboard**: The main view of the application.
- **TokenList**: Displays a list of tokens.
- **TokenCard**: Shows individual token details.
- **Header**: Navigation and title of the application.

### Setup
To set up the frontend, navigate to the `frontend` directory and run:

```bash
npm install
npm start
```

## Backend
The backend is built with Express and uses Prisma for database interactions. Key components include:

- **TokenController**: Handles requests related to tokens.
- **TokenRoutes**: Defines the API endpoints for token operations.
- **TokenService**: Contains business logic for managing tokens.

### Setup
To set up the backend, navigate to the `backend` directory and run:

```bash
npm install
npm run dev
```

## Database
The application uses a database managed by Prisma. Ensure to set up your database configuration in the `.env` file based on the `.env.example` provided.

## Running the Application
You can run the entire application using Docker. Ensure Docker is installed and running, then execute:

```bash
docker-compose up
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
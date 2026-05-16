#!/bin/bash

# Start the backend server
cd backend
npm install
npm run dev &

# Start the frontend server
cd ../frontend
npm install
npm run start &

# Wait for both servers to be up
wait -n

# Exit with the status of the first process that exits
exit $?
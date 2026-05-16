FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for both frontend and backend
COPY frontend/package.json frontend/package-lock.json ./
COPY backend/package.json backend/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the frontend
RUN npm run build --prefix frontend

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start", "--prefix", "backend"]
#!/bin/bash

# This script sets up the database for the Token Tracker application.
# It runs the necessary migrations and seeds the database with initial data.

# Navigate to the backend directory
cd backend

# Run database migrations
npx prisma migrate deploy

# Seed the database with initial data
npx prisma db seed

echo "Database setup complete."
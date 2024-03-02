# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# COPY package-lock.json /app/package-lock.json

# RUN apk add --no-cache bash
# Adiciona Python, make e g++ para compilar dependências nativas
# RUN apk add --no-cache python3 make g++
RUN apt-get update && apt-get install -y python3 make g++
# Install dependencies
RUN npm install

# Install dependencies
# RUN rm -rf node_modules package-lock.json && npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
# RUN npm run dev

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run the application
# CMD ["npm", "run", "dev"]
# CMD ["create-vite", "npx", "vite", "--host"]
CMD ["./node_modules/.bin/vite", "--host"]

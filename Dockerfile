# Use the official Node.js image as the base image
FROM node:18.19-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm i

# Install dependencies
# RUN rm -rf node_modules package-lock.json && npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
# RUN npm run dev

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "dev"]

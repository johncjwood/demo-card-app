# Use the latest Node.js image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon and ts-node globally
RUN npm install -g nodemon ts-node

# Copy application files
COPY . .

# Expose Express API port
EXPOSE 3001

# Start the Express API in development mode
CMD ["npm", "run", "start:dev"]

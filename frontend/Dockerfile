# Use the latest Node.js image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose Angular development server port
EXPOSE 4200

# Start the Angular development server
CMD ["npm", "start", "--", "--host", "0.0.0.0"]

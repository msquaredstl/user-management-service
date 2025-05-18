# Use the official Node.js LTS image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "src/server.js"]

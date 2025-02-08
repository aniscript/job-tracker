# Use official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]

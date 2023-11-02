# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy your application files to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your Node.js application
CMD [ "node", "index.js" ]
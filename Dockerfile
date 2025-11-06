FROM node:22.12.0-alpine

# Install OpenSSL for Prisma
RUN apk add --no-cache openssl

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy prisma schema
COPY prisma ./prisma

# Generate Prisma Client
RUN npx prisma generate --schema=./prisma/schemas/schema.prisma

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start command (overridden in docker-compose for dev)
CMD ["npm", "run", "start:dev"]
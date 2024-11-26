# Stage 1: Build
FROM node:20-bullseye AS build
WORKDIR /app
COPY . /app
RUN npm install
COPY . .

# Stage 2: Run
FROM node:20-bullseye-slim
WORKDIR /app
COPY --from=build /app .
EXPOSE 4200
CMD ["npm", "start"]

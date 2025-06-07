# Build stage
FROM node:20 AS build

WORKDIR /app

COPY package.json ./
COPY vite.config.js ./
COPY . ./
RUN npm install

COPY . ./
RUN npm run build

# Production stage
FROM nginx:1.27-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


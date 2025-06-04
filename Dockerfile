# Build stage
FROM node:20 AS build

WORKDIR /app

COPY app/package.json ./
# COPY app/package-lock.json ./
COPY app/vite.config.js ./
RUN npm install

COPY app/ ./
RUN npm run build

# Production stage
FROM nginx:1.27-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
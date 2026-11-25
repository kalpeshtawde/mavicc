# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Holiday theme toggle (set VITE_HOLIDAY_MODE=true to enable during the holidays)
ARG VITE_HOLIDAY_MODE=false
ENV VITE_HOLIDAY_MODE=$VITE_HOLIDAY_MODE

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

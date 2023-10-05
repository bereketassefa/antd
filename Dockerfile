FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /var/www/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

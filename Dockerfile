## Build
FROM node:latest AS build
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
# Install app dependencies
RUN npm install
# Bundle app source
COPY . .

RUN npm run build

## Run 
FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

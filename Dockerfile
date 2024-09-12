FROM node:18
RUN mkdir -p /var/app/happiness-backend
WORKDIR /var/app/happiness-backend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3010
CMD [ "npm", "run", "start:prod" ]
FROM node:18
RUN mkdir -p /var/app/happiness-backend-dev
WORKDIR /var/app/happiness-backend-dev
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3011
CMD [ "node", "dist/main.js" ]
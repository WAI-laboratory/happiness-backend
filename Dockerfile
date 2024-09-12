FROM node:18
RUN mkdir -p /var/app/happiness-backend
WORKDIR /var/app/happiness-backend
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3010
CMD [ "node", "dist/main.js" ]
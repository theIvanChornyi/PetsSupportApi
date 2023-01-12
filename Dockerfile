FROM node:18.13.0

WORKDIR /Api

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
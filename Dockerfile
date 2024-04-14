FROM node:alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production && npm cache clean --force

COPY . .

EXPOSE 8081

CMD ["node", "api.js"]

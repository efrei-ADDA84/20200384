FROM node:alpine3.19

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["node", "index.js"]
FROM node:alpine3.19

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@10.5.2 && npm cache clean --force

RUN apk update && apk upgrade && apk add --no-cache openssl

RUN apk add --no-cache tar --version "6.2.1"

COPY . .

RUN npm install dotenv

EXPOSE 3000

USER appuser

CMD ["node", "index.js"]
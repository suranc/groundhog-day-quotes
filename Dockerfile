FROM node:11-alpine

ADD . .

RUN npm install

EXPOSE 1234

CMD node app.js
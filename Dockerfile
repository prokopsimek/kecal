FROM node:8.15

ENV NODE_ENV production
WORKDIR /app

COPY . /app
EXPOSE 3000

CMD yarn start:prod

FROM node:alpine

ENV PORT=8080

EXPOSE 8080

WORKDIR /app

COPY package.json*.json .

RUN yarn

COPY . . 

CMD ["yarn", "dev"]


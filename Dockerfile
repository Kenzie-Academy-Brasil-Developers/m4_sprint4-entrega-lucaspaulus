FROM node:alpine

ENV PORT=8080

EXPOSE 8080

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . . 

CMD ["yarn", "dev"]

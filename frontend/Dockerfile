FROM node:21-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]

FROM node:16

WORKDIR /app

COPY . .

RUN yarn install --production

CMD ["yarn", "run", "start"]

EXPOSE 3000
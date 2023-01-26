##################
# DEVELOPMENT
##################

FROM node:lts-buster-slim AS development

RUN apt-get update && apt-get install libssl-dev ca-certificates procps -y
WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn add -g glob rimraf prisma

RUN yarn install

COPY . .

ENV NODE_ENV development

RUN yarn prisma:gen

RUN yarn build


##################
# PRODUCTION
##################

FROM node:lts-buster-slim AS production

RUN apt-get update && apt-get install libssl-dev ca-certificates -y
WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn add -g glob rimraf prisma

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn prisma:gen

RUN yarn build

CMD ["yarn", "start:prod"]

FROM node:18 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm glob rimraf prisma

RUN npm install

COPY . .

RUN npm run build

FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm nest rimraf @nestjs/cli

RUN npm install --only=production 

COPY . .

RUN npm run build

CMD ["node", "dist/main"]

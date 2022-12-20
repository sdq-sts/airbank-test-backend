# Friday Finance - Backend

## Description
This repository contains code for the test of fullstack developer at Friday Finance

## Technologies used

<p align="center">
  <a href="https://www.docker.com/" target="blank"><img src="assets/docker-logo.png" width="50" alt="Docker Logo" /></a>
  <a href="http://nestjs.com/" target="blank"><img src="assets/nestjs-logo.svg" width="50" alt="Nest Logo" /></a>
  <a href="https://www.postgresql.org/" target="blank"><img src="assets/postgres-logo.png" width="50" alt="Postgres Logo" /></a>
  <a href="https://www.prisma.io/" target="blank"><img src="assets/prisma-logo.svg" width="50" height="50" alt="Prisma Logo" /></a>
  <a href="https://graphql.org/" target="blank"><img src="assets/graphql-logo.png" width="50" alt="Graphql Logo" /></a>
</p>

## Dependencies

You need to have [Docker](https://www.docker.com/) and `docker-compose` installed in your machine in order to build and run this docker image.

## Steps

1. First you need to build and run this image with:

```bash
docker-compose up prod
```

2. After that you need to open another tab in yor terminal and run the database migrations:

```bash
docker-compose exec prod npx prisma migrate dev
```

3. After migrations are done you need to seed the database and this may take a while:

```bash
docker-compose exec prod npx prisma db seed
```

Done, your server is ready!

## Database model

The database model looks like this:

![ERD](assets/_ERD.svg)

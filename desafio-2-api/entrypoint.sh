#!/bin/bash


dockerize -wait tcp://${TYPEORM_HOST}:${TYPEORM_PORT} -timeout 300s sleep 10

echo Configuring api server
npm install
npm install -g @nestjs/cli@8.0.0
echo Starting migration...
npm run typeorm migration:show
npm run typeorm migration:run
echo Starting server...
npm run start:dev
# nuxt-openapi

## front
* nuxt:2.15
* typescript
* openapitools/openapi-generator-cli
* vuex-module-decorators

## api
* ts-node:10.4
* typescript
* typeorm:0.2
* express:4.17
* express-openapi
* openapi-typescript-code-generator

## middleware
* nginx:1.21.4
* mysql:5.7.1

## set up
```
git clone https://github.com/chanfuku/nuxt-openapi.git
cd nuxt-openapi
cp .env.example .env
cp ./front/.env.local ./front/.env
docker-compose up
.
.
.
it will take about 5 min to build...

please visit http://localhost
```

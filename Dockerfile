FROM node:20.10.0-alpine as build

MAINTAINER Andres Olivares

WORKDIR /usr/src/app

ARG environment

COPY . .
#COPY dist ./dist

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/* \
    && apk add --no-cache libcurl alpine-sdk curl-dev \
    && npm install node-libcurl --build-from-source

RUN npm i -g @angular/cli@16
RUN npm i
RUN ng build --configuration $environment

FROM nginx:1.25.3-alpine as production

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/dist/browser .

COPY /nginx.conf /etc/nginx/conf.d/default.conf

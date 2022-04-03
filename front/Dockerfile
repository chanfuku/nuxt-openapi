FROM node:16.13-alpine

RUN apk update && apk add --no-cache openjdk8

# RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python\
#    && python3 -m ensurepip\
#    && pip3 install --no-cache --upgrade pip setuptools\
#    && apk add --update make g++\
#    && rm -rf /var/cache/apk/*

ENV HOST 0.0.0.0

EXPOSE 3000


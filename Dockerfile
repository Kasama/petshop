FROM node:8-alpine

RUN mkdir -p /home/polymer/app
WORKDIR /home/polymer/

COPY package.json /home/polymer

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
	npm install --only=production bower polymer-cli && npm cache clean --force

WORKDIR /home/polymer/app

EXPOSE 3000

COPY bower.json /home/polymer/app

RUN PATH=$(npm bin):$PATH bower --allow-root install

COPY . /home/polymer/app

CMD ../node_modules/.bin/polymer serve -H 0.0.0.0 -p 3000

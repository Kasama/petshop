FROM node:8-alpine

RUN mkdir -p /home/polymer/app
WORKDIR /home/polymer/app

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
	npm install --only=production bower polymer-cli && npm cache clean --force

EXPOSE 8000

COPY bower.json /home/polymer/app

RUN PATH=$(npm bin):$PATH bower --allow-root install

COPY . /home/polymer/app

CMD $(npm bin)/polymer serve -H 0.0.0.0 -p 8000


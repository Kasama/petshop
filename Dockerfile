FROM jefferyb/polymer-cli

RUN bower install

EXPOSE 8000

CMD polymer serve -p 8000

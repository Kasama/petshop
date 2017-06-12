FROM jefferyb/polymer-cli

COPY . /home/polymer/app

# git submodules reference fix
ENV GIT_DIR=/home/polymer/app

RUN bower install

EXPOSE 8000

CMD polymer serve -p 8000

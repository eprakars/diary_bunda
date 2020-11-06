FROM node:10-slim

RUN apt-get -o Acquire::Check-Valid-Until=false update
RUN apt-get update
RUN apt-get -y install wget
RUN wget http://security.ubuntu.com/ubuntu/pool/main/libp/libpng/libpng12-0_1.2.54-1ubuntu1.1_amd64.deb
RUN dpkg -i libpng12-0_1.2.54-1ubuntu1.1_amd64.deb
RUN apt-get install -f
RUN apt-get -y install bzip2 nasm autoconf libtool

WORKDIR /code

ADD src src/
ADD package.json package.json
ADD package-lock.json package-lock.json
ADD .gitignore .gitignore

RUN npm install
# Move test when build image
# RUN npm run test

CMD ["npm", "run", "start:production"]

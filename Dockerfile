FROM node:18

ENV PATH=$PATH:/root/.local/bin
RUN curl -sSL https://get.wasp-lang.dev/installer.sh | sh

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN wasp db migrate-dev

EXPOSE 3000
EXPOSE 3001
ENTRYPOINT ["wasp", "start"]
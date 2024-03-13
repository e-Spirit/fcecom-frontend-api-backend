FROM node:18-alpine

# update npm to next version
RUN npm install -g npm@10.3.0

RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app

COPY package.json .
COPY dist/ dist
COPY config/custom-environment-variables.yml config/default.yml config/
COPY src/utils/inspectConfig.js src/utils/logConfig.js src/utils/

RUN npm install

RUN chown -R app /opt/app
USER app

EXPOSE 3001
CMD [ "node", "." ]
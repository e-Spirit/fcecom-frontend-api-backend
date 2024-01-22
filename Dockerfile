FROM node:18-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY package.json .
COPY . .
RUN npm install
RUN chown -R app /opt/app
USER app
EXPOSE 3001
CMD [ "npm", "run", "start:watch" ]
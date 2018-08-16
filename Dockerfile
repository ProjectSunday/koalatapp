FROM node

COPY ./src/ /app/src/
COPY ./server.js /app/server.js
COPY ./package.json /app/package.json
COPY ./webpack.config.js /app/webpack.config.js
COPY ./.babelrc /app/.babelrc

WORKDIR /app/

CMD [ "npm", "run", "deploy"]

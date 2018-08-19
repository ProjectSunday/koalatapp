FROM node

COPY . /app/

WORKDIR /app/

CMD [ "npm", "run", "deploy"]

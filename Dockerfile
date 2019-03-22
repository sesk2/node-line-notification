FROM ses2/node:8

ENV NODE_PATH=/usr/local/lib/node_modules

RUN apk update
RUN npm install -g axios
RUN npm install -g querystring

WORKDIR /app


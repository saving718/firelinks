FROM node

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm i --legacy-peer-deps

EXPOSE 3000

CMD ["npm", "run", "dev"]
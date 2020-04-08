FROM node:latest

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --chown=node:node package-lock.json package.json tsconfig.json tslint.json ./

RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
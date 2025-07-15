FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

COPY wait-for-it.sh ./

EXPOSE 3000

RUN npm ci --only=production

CMD ["./wait-for-it.sh", "db:3306", "--", "npm", "run", "dev"]
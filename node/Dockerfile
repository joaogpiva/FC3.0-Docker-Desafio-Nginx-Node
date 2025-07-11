FROM node:latest

WORKDIR /usr/src/app

COPY src/ /usr/src/app

COPY wait-for-it.sh /usr/src/app/wait-for-it.sh

EXPOSE 3000

RUN npm ci --only=production

CMD ["./wait-for-it.sh", "db:3306", "--", "node", "index.js"]
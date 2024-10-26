FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

ENV DATABASE_URL="mysql://spoonful_user:gataumalas123@34.128.68.157:3306/spoonful_db"

ENV ACCESS_TOKEN_KEY="bb93b6063ea81de2a3bb41d8f579bb7069819c3c3b5f01dbc24c0d8b5a5cadd8b2c2ef9ecd61c1aea6c43f980e5b5fe6b9ea62e5ec800af21a761efc84dcf631"

RUN npx prisma generate

RUN npx prisma migrate deploy

EXPOSE 3000

CMD [ "npm", "run", "start" ]
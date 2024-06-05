# Spoonful-API

This is part of Bangkit 2024 Spoonful Projects. Here is our documentation for the API

#### API Endpoints

You can look for the API Endpoints [here](https://drive.google.com/file/d/1sasobuB94_2WqQcgg3WAaBmYIPiBxCXM/view?usp=drive_link)

#### Installation & Usage

a. Clone the git repository

```bash
git clone https://github.com/Spoonful-Capstone/Spoonful-API
```

b. Install the npm package

```bash
npm install
```

c. Make .env fila that contain the ACCESS_TOKEN_KEY and DATABASE_URL

```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

d. Initiate the prisma ORM

```bash
npx prisma init
npx prisma migrate dev --name migration_name
```

e. You can run the API

```bash
npm run start
```

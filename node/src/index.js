import mysql from 'mysql2/promise';
import express from 'express';
import { fakerPT_BR as faker } from '@faker-js/faker';

const app = express();
const port = 3000;

const connection = await mysql.createConnection({
  host: 'db_daora',
  user: 'root',
  password: 'senha_daora',
  database: 'database_daora',
});

app.get('/', async (req, res) => {
  const name = faker.person.fullName();

  await connection.query(
    'INSERT INTO people (name) VALUES (?)',
    name
  );

  const [results] = await connection.query(
    'SELECT name FROM `people`'
  );

  let page = "<h1>Full Cycle Rocks!</h1>";

  page += "<ul>"
  for (const result of results) {
    page += `<li>${result.name}</li>`
  }
  page += "</ul>"

  res.send(page);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

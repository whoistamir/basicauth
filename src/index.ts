import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3010;
const app = express();
app.use(express.json());

import { sequelize } from './db';
import { users } from './models/user';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  let existingUser = await users.findAll({
    where: {
      username: username,
    },
  });

  if (existingUser.length) {
    // console.log('Existing user:' + existingUser);
    return res.status(409).json({ message: 'Username already exists' });
  }

  const user = await users.create({
    username,
    email,
    password,
  });

  res.json(user);
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Succesfully connected to database...');
  })
  .catch((err) => {
    console.log('Unable to connect to the database.');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

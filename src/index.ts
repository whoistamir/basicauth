import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import session from 'express-session';
import connect from 'connect-session-sequelize';

const port = process.env.PORT || 3010;
const app = express();
app.use(express.json());

import { sequelize } from './db';
import { users } from './models/users';

const SequelizeStore = connect(session.Store);
const store = new SequelizeStore({
  db: sequelize,
});

app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

sequelize.sync();

app.get('/', (req: any, res: any) => {
  req.session.isAuth = true;
  res.send('Hello World!');
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Succesfully connected to database...');
  })
  .catch((err) => {
    console.log('Unable to connect to the database...');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

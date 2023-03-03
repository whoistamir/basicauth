/**
 * Using PG
 */

// import { Pool } from 'pg';

// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   database: process.env.POSTGRES_DB,
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
// });

// export { pool };

/**
 * Using Sequelize
 */

import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(
  `${process.env.POSTGRES_DB}`,
  `${process.env.POSTGRES_USER}`,
  `${process.env.POSTGRES_PASSWORD}`,
  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
  }
);

export { sequelize };

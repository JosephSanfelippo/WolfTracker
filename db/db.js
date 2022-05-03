const { Pool } = require('pg');
// require('dotenv').config();

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE
});


pool
  .connect()
  .then(() => console.log(`WolfTracker connected to port ${process.env.PG_PORT}`))
  .catch((err) => console.log('err', err));

  module.exports = pool;
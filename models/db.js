// starting a new instace of pg promise for psql DB connection
// note that we are doing this helper file inside of models to
// have access to it on Heroku deployment
require('dotenv').config();
const pgp = require('pg-promise')();

const config = process.env.DATABASE_URL || {
  host:       process.env.PG_HOST,
  port:       process.env.PG_PORT,
  database:   process.env.PG_DATABASE,
  user:       process.env.PG_USER,
  password:   process.env.PG_PASS
}

// instanciating pgp with the correct config and exporting it
const db = pgp(config);

// sending this out
module.exports = db;

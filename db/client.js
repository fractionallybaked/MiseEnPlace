// Connect to DB
const { Client } = require('pg');
const DB_NAME = 'half-baked'
console.log("DB_URL: ", process.env.DATABASE_URL)
const DB_URL = process.env.DATABASE_URL || `postgres://localhost:5432/${ DB_NAME }`;
const client = new Client(DB_URL);

// export
module.exports = {
  client
}
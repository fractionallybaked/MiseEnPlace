// code to build and initialize DB goes here
const {
  client
} = require('./client');

const {
  //db methods
} = require('./')

async function dropTables() {
  try {
    console.log("Dropping All Tables...");
    // drop all tables, in the correct order
    client.query(`
  DROP TABLE IF EXISTS cart;
  DROP TABLE IF EXISTS types;
  DROP TABLE IF EXISTS products;
  DROP TABLE IF EXISTS users;
  `);
  } catch (error) {
    console.error("Error while dropping tables");
    throw error;
  }
}

async function createTables() {
  console.log("Starting to build tables...");
  // create all tables, in the correct order
  try {
    await client.query(`
  
   CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    "isAdmin" boolean default false
   ); 
   CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    photo varchar(255) NOT NULL,
    "typeId" INTEGER REFERENCES types(id)
   );
   CREATE TABLE types (
    id SERIAL PRIMARY KEY,
    name varchar(255) UNIQUE NOT NULL
   );
   CREATE TABLE cart(
    id SERIAL PRIMARY KEY,
    "productId" INTEGER REFERENCES products(id),
    "userId" INTEGER REFERENCES users(id),
    quantity INTEGER NOT NULL,
    "itemTotal" INTEGER,
    purchased BOOLEAN default false,
    UNIQUE("productId", "userId")
   );    
  `);

  } catch (error) {
    console.error("Error building tables");
    throw error;
  }
}



async function buildTables() {
  try {
    client.connect();
    await dropTables();
    await createTables();
  } catch (error) {
    throw error;
  }
} 

async function populateInitialData() {
  try {
    // create useful starting data
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
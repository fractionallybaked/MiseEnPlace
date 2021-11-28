// code to build and initialize DB goes here
const { client } = require("./client");

const { createUser, createProduct, createType, addItemToCart } = require("./");
const productsSeed = require('./productSeed');
async function dropTables() {
  try {
    console.log("Dropping All Tables...");
    // drop all tables, in the correct order
    await client.query(`
      DROP TABLE IF EXISTS cart;
      DROP TABLE IF EXISTS product_type;
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
        "isAdmin" BOOLEAN DEFAULT false, 
        password varchar(255) NOT NULL
      ); 
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        price INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        photo varchar(255) NOT NULL
      );
      CREATE TABLE types (
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL
      );
      CREATE TABLE product_type(
        "productId" INTEGER REFERENCES products(id),
        "typeId" INTEGER REFERENCES types(id)
      );
      CREATE TABLE cart(
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id),
        "userId" INTEGER REFERENCES users(id),
        quantity INTEGER NOT NULL,
        "itemTotal" INTEGER,
        purchased BOOLEAN default false
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

async function createInitialUsers() {
  console.log("Starting to create users...");
  try {
    const usersToCreate = [
      { username: "bob", password: "iliketurtles", isAdmin: true },
      { username: "emelie", password: "fornarnia!", isAdmin: true },
      { username: "kendra", password: "darthvaderrules", isAdmin: true },
      { username: "ed", password: "ilovebakedgoods", isAdmin: false },
    ];
    const users = await Promise.all(usersToCreate.map(createUser));

    console.log("Users created:");
    console.log(users);
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function createInitialTypes() {
  try {
    console.log("starting to create types...");

    const typesToCreate = [
      {
        name: "cake",
      },
      {
        name: "cookie",
      },
      {
        name: "tea",
      },
      {
        name: "coffee",
      },
      {
        name: "beverages",
      },
      {
        name: "baked goods",
      },
    ];

    const types = await Promise.all(typesToCreate.map(createType));
    console.log("types created:");
    console.log(types);

    console.log("Finished creating types!");
  } catch (error) {
    console.error("Error creating types!");
    throw error;
  }
}

async function createInitialProducts() {
  try {
    console.log("Starting to create products...");
    
    const products = await Promise.all(productsSeed.map(createProduct));

    console.log("products created:");
    console.log(products);

    console.log("Finished creating products!");
  } catch (error) {
    console.error("Error creating products!");
    throw error;
  }
}

async function createInitialCarts() {
  console.log("Starting to create carts...");
  try {
    const cartsToCreate = [
      { productId: "1", userId: "1", quantity: 1, purchased: false },
      { productId: "2", userId: "2", quantity: 4, purchased: false },
      { productId: "4", userId: "3", quantity: 13, purchased: false },
    ];
    const carts = await Promise.all(cartsToCreate.map(addItemToCart));

    console.log("Carts created:");
    console.log(carts);
    console.log("Finished creating carts!");
  } catch (error) {
    console.error("Error creating carts!");
    throw error;
  }
}

async function populateInitialData() {
  try {
    await createInitialUsers();
    await createInitialProducts();
    await createInitialCarts();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());

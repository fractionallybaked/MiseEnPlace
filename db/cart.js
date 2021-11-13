const client = require("./client");
const { getProductById } = require("./products");

async function getCartByUser(userId) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
            SELECT *
            FROM cart
            WHERE "userId"=$1;
            `,
      [userId]
    );
    return cart;
  } catch (err) {
    throw err;
  }
}

//Need to add up total

async function updateCart({ id, productId, quantity }) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
            UPDATE cart
            SET quantity=$3
            WHERE id=$1 AND "productId"=$2
            RETURNING *;
            `,
      [id, productId, quantity]
    );
    return cart;
  } catch (err) {
    throw err;
  }
}

//

async function deleteCartItem({ userId, productId, id }) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
            DELETE
            FROM cart
            WHERE "productId"=$2 AND "userId"=$1 AND id=$3
            RETURNING *;
            `,
      [userId, productId, id]
    );
    return cart;
  } catch (err) {
    throw err;
  }
}

//Need to add up total

async function addItemtoCart({ id, productId, userId, quantity, purchased }) {
  const newProd = await getProductById(productId);
  const prodPrice = newProd.price;

  try {
    const {
      rows: [cart],
    } = await client.query(
      `
            INSERT INTO cart(id, "productId", "userId", quantity, purchased, "itemTotal")
            VALUES($1, $2, $3, $4, $5, $6)
            RETURNING *;
            `,
      [id, productId, userId, quantity, purchased, prodPrice]
    );
    return cart;
  } catch (err) {
    throw err;
  }
}

//

async function checkoutCart(userId) {
  const userCart = await getCartByUser(userId);
  const cartId = userCart.id;
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
      UPDATE cart
      SET purchased=true
      WHERE "userId"=$1 and id=$2
      RETURNING *
      `,
      [userId, cartId]
    );
    return cart;
  } catch (err) {
    throw err;
  }
}

//

module.exports = {
  getCartByUser,
  updateCart,
  deleteCartItem,
  addItemtoCart,
  checkoutCart,
};

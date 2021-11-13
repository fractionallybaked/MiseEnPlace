const { client } = require("./client");
const { getProductsById } = require("./products");

async function getCartByUser(userId) {
  try {
    const { rows: cart } = await client.query(
      `
            SELECT *
            FROM cart
            WHERE "userId"=$1;
            `,
      [userId]
    );
    console.log(cart);
    return cart;
  } catch (err) {
    throw err;
  }
}

//

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

//

async function addItemToCart({ productId, userId, quantity, purchased }) {
  const newProd = await getProductsById(productId);
  const prodPrice = newProd.price;

  try {
    const {
      rows: [cart],
    } = await client.query(
      `
            INSERT INTO cart("productId", "userId", quantity, purchased, "itemTotal")
            VALUES($1, $2, $3, $4, $5)
            RETURNING *;
            `,
      [productId, userId, quantity, purchased, prodPrice]
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
  addItemToCart,
  checkoutCart,
};

const { client } = require("./client");
const { getProductsById } = require("./products");

async function getCartByUser(userId) {
  try {
    const { rows: cart } = await client.query(
      `
            SELECT *
            FROM cart
            WHERE "userId"=$1 AND purchased=false;
            `,
      [userId]
    );
    return cart;
  } catch (err) {
    throw err;
  }
}

//

async function updateCart({ userId, productId, quantity }) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
            UPDATE cart
            SET quantity=$3
            WHERE "userId"=$1 AND "productId"=$2 AND purchased=false
            RETURNING *;
            `,
      [userId, productId, quantity]
    );
    return cart;
  } catch (err) {
    throw err;
  }
}

//

async function deleteCartItem({ productId, userId }) {
  try {
    const {
      rows: [cart],
    } = await client.query(
      `
            DELETE
            FROM cart
            WHERE "productId"=$1 AND "userId"=$2 AND purchased=false
            RETURNING *;
            `,
      [productId, userId]
    );
    return cart;
  } catch (err) {
    throw err;
  }
}

//

async function addItemToCart({ productId, userId, quantity }) {
  const newProd = await getProductsById(productId);

  const prodPrice = newProd.price;

  try {
    const {
      rows: [cart],
    } = await client.query(
      `
            INSERT INTO cart("productId", "userId", quantity, "itemTotal")
            VALUES($1, $2, $3, $4)
            RETURNING *;
            `,
      [productId, userId, quantity, prodPrice]
    );
    return cart;
  } catch (err) {
    throw err;
  }
}

//

async function checkoutCart(userId) {
  const userCart = await getCartByUser(userId);

  try {
    if (userCart.length) {
      const {
        rows: [cart],
      } = await client.query(
        `
      UPDATE cart
      SET purchased=true
      WHERE "userId"=$1 and purchased=false
      RETURNING *;
      `,
        [userId]
      );
      return cart;
    } else {
      throw Error("No items in cart");
    }
  } catch (err) {
    throw err;
  }
}

//

async function getAllProductsByUser(userId) {
  try {
    const { rows: cart } = await client.query(
      `
  SELECT *
  FROM cart
  WHERE "userId"=$1 AND purchased=true
  RETURNING *;
  `,
      [userId]
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
  getAllProductsByUser,
};

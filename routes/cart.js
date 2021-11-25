const express = require("express");
const cartRouter = express.Router();
const { requireUser } = require("./utilities.js");

const {
  getCartByUser,
  updateCart,
  deleteCartItem,
  addItemToCart,
  checkoutCart,
  getAllProductsByUser,
} = require("../db");

//

cartRouter.get("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const userCart = await getCartByUser(userId);
    res.send(userCart);
  } catch (err) {
    next(err);
  }
});

//

cartRouter.post("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const { productId, quantity, purchased } = req.body;
  try {
    const updatedCart = await addItemToCart({
      productId,
      userId,
      quantity,
    });
    res.send(updatedCart);
  } catch (err) {
    next(err);
  }
});

//

cartRouter.patch("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const userCart = await getCartByUser(userId);
  const cartId = userCart[0].id;
  const { productId, quantity } = req.body;

  try {
    const newCart = await updateCart({
      id: cartId,
      productId,
      quantity,
    });
    res.send(newCart);
  } catch (err) {
    next(err);
  }
});

//

cartRouter.delete("/:userId", async (req, res, next) => {
  const userId = req.params.userId;
  const userCart = await getCartByUser(userId);
  const cartId = userCart.id;
  const productId = req.body;

  try {
    const deletedItem = await deleteCartItem({ userId, productId, cartId });
    return deletedItem;
  } catch (err) {
    next(err);
  }
});

//

cartRouter.patch("/:userId/checkout", async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const boughtCart = await checkoutCart(userId);
    res.send(boughtCart);
  } catch (err) {
    next(err);
  }
});

//

cartRouter.get("/:userId/history", async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const purchHistory = await getAllProductsByUser(userId);
    res.send(purchHistory);
  } catch (err) {
    next(err);
  }
});

//

module.exports = cartRouter;

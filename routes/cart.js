const express = require("express");
const cartRouter = express.Router();
const { requireUser } = require("./utilities.js");

const {
  getCartByUser,
  updateCart,
  deleteCartItem,
  addItemtoCart,
  checkoutCart,
} = require("../db");

//

cartRouter.get("/cart/:userId", requireUser, async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const userCart = await getCartByUser(userId);
    res.send(userCart);
  } catch (err) {
    next(err);
  }
});

//

cartRouter.post("/cart/:userId", requireUser, async (req, res, next) => {
  const userId = req.params.userId;
  const userCart = await getCartByUser(userId);
  const cartId = userCart.id;
  const { productId, quantity, isPurchased } = req.body;
  try {
    const updatedCart = await addItemtoCart({
      cartId,
      productId,
      userId,
      quantity,
      isPurchased,
    });
    res.send(updatedCart);
  } catch (err) {
    next(err);
  }
});

//

cartRouter.patch("/cart/:userId", requireUser, async (req, res, next) => {
  const userId = req.params.userId;
  const userCart = await getCartByUser(userId);
  const cartId = userCart.id;
  const { productId, quantity, purchased } = req.body;

  try {
    const newCart = await updateCart({
      cartId,
      productId,
      quantity,
      purchased,
    });
    res.send(newCart);
  } catch (err) {
    next(err);
  }
});

//

cartRouter.delete("/cart/:userId", requireUser, async (req, res, next) => {
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

cartRouter.patch(
  "/cart/:userId/checkout",
  requireUser,
  async (req, res, next) => {
    const userId = req.params.userId;
    try {
      const boughtCart = await checkoutCart(userId);
      res.send(boughtCart);
    } catch (err) {
      next(err);
    }
  }
);

//

module.exports = cartRouter;

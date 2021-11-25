const express = require("express");
const cartRouter = express.Router();

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
  const { productId, quantity } = req.body;
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
      userId,
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
  console.log("REQ BODY", req.body);
  const { productId } = req.body;
  console.log("ROUTES", productId, userId);

  try {
    await deleteCartItem({ productId, userId });
    res.sendStatus(204);
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

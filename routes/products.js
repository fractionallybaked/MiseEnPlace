const express = require("express");
const productsRouter = express.Router();
const { requireUser } = require("./utils");
const {
    getAllProducts,
    getProductById,
    createProduct
} = require("../db");

productsRouter.get("/", async (req, res, next) => {
    try {
        const allProducts = await getAllProducts();

        res.send(allProducts);
    } catch ({ name, message }) {
        next({ name, message });
    }
});

productsRouter.get("/:productId", async (req, res, next) => {
    const { productId: id } = req.params;
    try {
        const product = await getProductById(id);

        res.send(product);
    } catch ({ name, message }) {
        next({ name, message });
    }
});

productsRouter.post("/", requireUser async (req, res, next) => {
    const { name, description, price, photo, typeId } = req.body;
    const { id } = req.user;

    try {
        const user = await getUserById(id);

        if (user.isAdmin) {
            const newProduct = await createProduct({ name, description, price, photo, typeId });
            res.send(newProduct);
        } else {
            next({
                name: "UnauthorizedUserError",
                message: "You must be an admin to add a new product"
            });
        }

    } catch ({ name, message }) {
        next({ name, message });
    }
});


module.exports = productsRouter;
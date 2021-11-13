const express = require("express");
const productsRouter = express.Router();
const { requireUser } = require("./utils");
const {
    getAllProducts,
    getProductsById,
    createProduct,
    editProduct,
    destoryProduct,
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
        const products = await getProductsById(id);

        res.send(products);
    } catch ({ name, message }) {
        next({ name, message });
    }
});

productsRouter.post("/", requireUser, async (req, res, next) => {
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

productsRouter.patch('/', requireUser, async (req, res, next) => {
    const { ...fields } = req.body;
    const { id } = req.user;
    try {
        const user = await getUserById(id);
        if (user.isAdmin) {
            const updatedProduct = await editProduct({ id, ...fields });
            res.send(updatedProduct);
        } else {
            next({
                name: "UnauthorizedUserError",
                message: "You must be an admin to add a new product"
            });
        }

    } catch (error) {
        console.error(error);
    }
});

productsRouter.delete('/:productId', requireUser, async (req, res, next) => {
    const { id } = req.user;
    const { productId } = req.params;

    try {
        const user = await getUserById(id);

        if (user.isAdmin) {
            const deletedProduct = await destoryProduct(productId);
            res.send({ ...deletedProduct, success: true });
        } else {
            next({
                name: "UnauthorizedUserError",
                message: "You must be an admin to delete a product"
            });
        }

    } catch (error) {
        console.error(error);
    }
})
module.exports = productsRouter;
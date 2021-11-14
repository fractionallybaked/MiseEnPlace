const express = require("express");
const productsRouter = express.Router();
const { requireUser } = require("./utilities");
const {
    getAllProducts,
    getProductsById,
    createProduct,
    editProduct,
    destoryProduct,
    getUserById,
    addTypeToProduct,
    createType,
} = require("../db");

productsRouter.get("/", async (req, res, next) => {
    try {
        const allProducts = await getAllProducts();

        res.send({ allProducts });
    } catch ({ name, message }) {
        next({ name, message });
    }
});

productsRouter.get("/:productId", async (req, res, next) => {
    const { productId: id } = req.params;
    try {
        const products = await getProductsById(id);

        res.send({ products });
    } catch ({ name, message }) {
        next({ name, message });
    }
});

productsRouter.post("/", requireUser, async (req, res, next) => {
    const { name, description, price, quantity, photo, type = "" } = req.body;
    const { id } = req.user;
    const typeArr = type.trim().split(/\s+/);
    const productData = {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        photo: photo,
        type: type
    }

    if (typeArr.length) {
        productData.type = typeArr;
    }

    try {
        const user = await getUserById(id);

        if (user.isAdmin) {
            const newProduct = await createProduct(productData);
            if (newProduct) {
                res.send({ newProduct });
            } else {
                const error = new Error("Missing product info")
                next(error)
            }

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

productsRouter.post('/:productId/types', requireUser, async (req, res, next) => {
    const { productId } = req.params;
    const { types } = req.body;
    const { id } = req.user;
    try {
        const user = await getUserById(id)
        if (user.isAdmin) {
            const typeList = await createType(types);
            const updatedProduct = await addTypeToProduct(productId, typeList);
            res.send({ updatedProduct });
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

productsRouter.patch('/:productId', requireUser, async (req, res, next) => {
    const { ...fields } = req.body;
    const { productId } = req.params;
    const { id } = req.user;

    try {
        const user = await getUserById(id);
        if (user.isAdmin) {
            const updatedProduct = await editProduct({ productId, ...fields });
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
});

module.exports = productsRouter;
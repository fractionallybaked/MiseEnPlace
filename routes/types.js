const express = require("express");
const { getAllTypes, getProductsByType } = require("../db");
const typesRouter = express.Router();

typesRouter.get('/', async (req, res) => {
    try {
        const types = await getAllTypes();

        res.send({ "types": types });
    } catch ({ name, message }) {
        next({ name, message });
    }
});

typesRouter.get('/:typeName/products', async (req, res) => {
    const { typeName } = req.params;
    try {
        const productsByType = await getProductsByType(typeName);

        res.send({ productsByType });
    } catch ({ name, message }) {
        next({ name, message });
    }
});

module.exports = typesRouter;
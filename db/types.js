const { client } = require("./client");
const { getProductsById } = require("./products");

async function getAllTypes() {
    try {
        const { rows: types } = await client.query(`
        SELECT *
        FROM types;
        `);
        return types;
    } catch (error) {
        console.error(error);
    }
}


async function getTypeById(id) {
    try {
        const { rows: [type] } = await client.query(`
        SELECT *
        FROM types
        WHERE id = $1;
        `, [id]);

        return type;
    } catch (error) {
        console.error(error);
    }
}

async function createType({ name }) {
    try {
        const { rows: [type] } = await client.query(`
        INSERT INTO types (name)
        VALUES ($1)
        RETURNING *;
        `, [name]);

        return type;
    } catch (error) {
        console.error(error);
    }
}

async function createProductType(productId, typeId) {
    try {
        await client.query(`
INSERT INTO product_type("productId", "typeId")
VALUES ($1, $2)
ON CONFLICT ("productId", "typeId") DO NOTHING;
`, [productId, typeId]);

    } catch (error) {
        throw error;
    }
}
async function addTypeToProduct(productId, productList) {
    try {
        const createProductTypePromises = productList.map(
            type => createProductType(productId, type.id)
        );
        await Promise.all(createProductTypePromises);
        return await getProductsById(productId);

    } catch (error) {
        throw error;
    }
}

async function destroyType(id) {

}

module.exports = {
    getAllTypes,
    getTypeById,
    createType
}

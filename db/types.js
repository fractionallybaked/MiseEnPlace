const { client } = require("./client");

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

async function createProductType(productId, typeId) {
    try {
        await client.query(`
        INSERT INTO product_type("productId", "typeId")
        VALUES ($1, $2)
`, [productId, typeId]);

    } catch (error) {
        throw error;
    }
}

async function destroyType(id) {
    try {
        await client.query(`
            DELETE
            FROM product_type
            WHERE "typeId" = $1
            `, [id]);

        const { rows: [deletedType] } = await client.query(`
            DELETE 
            FROM types
            WHERE id=$1
            RETURNING *;
            `, [id]);

        return deletedProduct;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllTypes,
    getTypeById,
   
    createProductType,
    
    destroyType
}

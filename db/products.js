const client = require("./client");

async function getAllProducts() {
    try {
        const { rows: allProducts } = await client.query(`
        SELECT *
        FROM products;
        `);
        return allProducts;
    } catch (error) {
        console.error(error);
    }
}

async function getProductsById(id) {
    try {
        const { rows: products } = await client.query(`
        SELECT *
        FROM products
        WHERE id = $1;
        `, [id]);

        return products;
    } catch (error) {
        console.error(error);
    }
}

async function getProductsByType(typeId) {
    try {
        const { rows: products } = await client.query(`
        SELECT *
        FROM products
        WHERE "typeId" = $1;
        `, [typeId]);

        return products;
    } catch (error) {
        console.error(error);
    }
}

async function createProduct({ name, description, price, photo, typeId }) {
    try {
        const { rows: [product] } = await client.query(`
        INSERT INTO products (name, description, price, photo, "typeId")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
        `, [name, description, price, photo, typeId]);

        return product;
    } catch (error) {
        console.error(error);
    }
}

function dbFields(fields) {
    const insert = Object.keys(fields)
        .map((key, index) => `"${key}"=$${index + 1}`)
        .join(", ");

    const select = Object.keys(fields)
        .map((_, index) => `$${index + 1}`)
        .join(", ");

    const vals = Object.values(fields);
    return { insert, select, vals };
}

async function editProduct({ id, ...fields }) {
    const { insert, vals } = dbFields(fields);
    try {
        const { rows: [updatedProduct] } = await client.query(`
        UPDATE products
        SET ${insert}
        WHERE "id" = ${id}
        RETURNING *;
        `, vals);

        return updatedProduct;
    }

async function destoryProduct(id) {
        try {
            const { rows: [deletedProduct] } = await client.query(`
            DELETE 
            FROM products
            WHERE id=$1
            RETURNING *;
            `, [id]);

            return deletedProduct;
        } catch (error) {
            throw error;
        }

    }

    module.exports = {
        getAllProducts,
        getProductsById,
        getProductsByType,
        createProduct,
        editProduct,
        destoryProduct,
    }



const { client } = require("./client");
const { createProductType } = require("./types");

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

async function createProduct({
    name,
    description,
    price,
    quantity,
    photo,
    type = [], 
}) {
    try {
        const { rows: [product] } = await client.query(`
        INSERT INTO products (name, description, price, quantity, photo)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
        `, [name, description, price, quantity, photo]);

        const typeList = await createType(type);
        
        return await addTypeToProduct(product.id, typeList);
    } catch (error) {
        console.error(error);
    }
}

async function createType(typeList) {

    if (typeList.length === 0) {
        return;
    }

    const insertValues = typeList.map(
        (_, index) => `$${index + 1}`).join('), (');

    const selectValues = typeList.map(
        (_, index) => `$${index + 1}`).join(', ');
       
    try {
        await client.query(`
        INSERT INTO types(name)
        VALUES(${insertValues})
        ON CONFLICT (name) DO NOTHING;
        `, typeList);

        const { rows } = await client.query(`
        SELECT * FROM types
        WHERE name
        IN (${selectValues});
        `, typeList);

        return rows;
    } catch (error) {
        console.error(error);
    }
}

async function addTypeToProduct(productId, typeList) {
    try {
        
        const createProductTypePromises = typeList.map(
            type => createProductType(productId, type.id)
        );
        await Promise.all(createProductTypePromises);
        return await getProductsById(productId);

    } catch (error) {
        throw error;
    }
}

async function getProductsById(id) {
    try {
        const { rows: [product] } = await client.query(`
        SELECT *
        FROM products
        WHERE id = $1;
        `, [id]);
        // new stuff to add types to product
        const { rows: types } = await client.query(`
        SELECT types.*
        FROM types
        JOIN product_type ON types.id = product_type."typeId"
        WHERE product_type."productId" = $1
        `, [id]);

        product.type = types;
        return product;
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
    const {type} = fields;
    delete fields.type;
    const { insert, vals } = dbFields(fields);
    try {
        const { rows: [updatedProduct] } = await client.query(`
        UPDATE products
        SET ${insert}
        WHERE "id" = ${id}
        RETURNING *;
        `, vals);

        return updatedProduct;

    } catch (error) {

        throw error;
    }
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



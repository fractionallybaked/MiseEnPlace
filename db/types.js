const {client} = require("./client");

async function getAllTypes(){
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


async function getTypeById(id){
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

async function createType({name}){
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

async function addTypeToProduct(id, productId){

}

async function destroyType(id){

}

module.exports = {
    getAllTypes,
    getTypeById,
    createType
}

const express = require("express");
const { getAllTypes } = require("../db");
const typesRouter = express.Router(); 

typesRouter.get('/', async (req, res)=>{
try{
const types = await getAllTypes();

res.send({"types": types});
}catch ({ name, message }) {
    next({ name, message });
}
});
module.exports = typesRouter
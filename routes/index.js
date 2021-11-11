const express = require("express");
const apiRouter = express.Router();
const jwt = require("jsonwebtoken");
const {JWT_SECRET = "neverTell"} = process.env

// attach other routers from files in this api directory (users, activities...)
const usersRouter = require("./users");
const productsRouter = require("./products")
const typesRouter = require("./types")
const cartRouter = require("./cart")

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!"
  });
});

apiRouter.get('/health', async (req, res)=>{
  try{
    res.send({message:"connected!"})
  }catch(error){
      console.error(error);
      next(error)
  }
});

apiRouter.use(async (req, res, next) => {
  const prefix = 'Bearer ';
  const auth = req.header('Authorization');
  
  if (!auth) { // nothing to see here
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    
    try {
      const parsedToken = jwt.verify(token, JWT_SECRET);
      
      const id = parsedToken && parsedToken.id
      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch (error) {
      next(error);
    }
  } else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with ${ prefix }`
    });
  }
});

apiRouter.use('/users', usersRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/types', typesRouter);
apiRouter.use('/cart', cartRouter)

module.exports = apiRouter;

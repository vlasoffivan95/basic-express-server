const express = require("express");
const userRouter = require("./userRouter")
const rootRouter = express.Router()

rootRouter.use('/users',userRouter)



module.exports = rootRouter;

const express = require("express");
const userRouter = require("./userRouter")
const rootRouter = express.Router()

rootRouter.use(userRouter)



module.exports = rootRouter;

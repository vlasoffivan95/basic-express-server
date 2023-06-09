const express = require("express");
const userRouter = express.Router();
const { validateUserMW } = require("../middlewares/userMW");
const usersController = require("../controllers/user.controller");

userRouter
  .route("/")
  .get(usersController.getUsers)
  .post(validateUserMW, usersController.createUser);

userRouter
  .route("/:userId")
  .get(usersController.getUser)
  .delete(usersController.deleteUser)
  .put(usersController.updateUser);

module.exports = userRouter;

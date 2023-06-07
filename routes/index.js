const express = require("express");
const router = express.Router();
const { validateUserMW } = require("../middlewares/userMW");
const usersController = require("../controllers/user.controller");

router
  .route("/users")
  .get(usersController.getUsers)
  .post(validateUserMW, usersController.createUser);

router
  .route("/users/:userId")
  .get(usersController.getUser)
  .delete(usersController.deleteUser)
  .put(usersController.updateUser);

module.exports = router;

const express = require("express");
const { validateUserMW } = require("./middlewares/userMW");
const usersController = require("./controllers/user.controller");
const app = express();
// const bodyParser = express.json();
app.use(express.json());

app
  .route("/users")
  .get(usersController.getUsers)
  .post(validateUserMW, usersController.createUser);

app
  .route("/users/:userId")
  .get(usersController.getUser)
  .delete(usersController.deleteUser)
  .put(usersController.updateUser);

// app.get("/users", usersController.getUsers);
// app.get("/users/:userId", usersController.getUser);
// // app.post("/users", validateUserMW, usersController.createUser);
// app.delete("/users/:userId", usersController.deleteUser);
// app.put("/users/:userId", usersController.updateUser);

module.exports = app;

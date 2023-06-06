const express = require("express");
const { validateUserMW } = require("./middlewares/userMW");
const usersController = require("./controllers/user.controller");

const app = express();
const PORT = 5001;
const bodyParser = express.json();

app.get("/users", usersController.getUsers);
app.get("/users/:userId", usersController.getUser);
app.post("/users", bodyParser, validateUserMW, usersController.createUser);
app.delete("/users/:userId", usersController.deleteUser);
app.put("/users/:userId", bodyParser, usersController.updateUser);

app.listen(PORT);

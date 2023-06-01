const express = require("express");
const { validateUserMW } = require("./middlewares/userMW");
const usersController = require("./controllers/user.controller");

const app = express();
const PORT = 5001;

app.get("/users", usersController.getUsers);

const bodyParser = express.json();

app.post("/users", bodyParser, validateUserMW, usersController.createUser);

app.listen(PORT);

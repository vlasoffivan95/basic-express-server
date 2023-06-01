const express = require("express");
const { validateUserMW } = require("./middlewares/userMW");

const app = express();
const PORT = 5001;
const usersDB = [];

app.get("/users", (req, res) => {
  res.send(usersDB);
});

const bodyParser = express.json();

app.post(
  "/users",
  bodyParser,
  validateUserMW,


);

app.listen(PORT);

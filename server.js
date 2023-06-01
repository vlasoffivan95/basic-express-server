const express = require("express");
const yup = require("yup");
const app = express();

const PORT = 5001;
const usersDB = [];

app.get("/users", (req, res) => {
  res.send(usersDB);
});

const bodyParser = express.json();
const USER_CREATE_SCHEMA = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

app.post(
  "/users",
  bodyParser,
  async (req, res, next) => {
    try {
      await USER_CREATE_SCHEMA.validate(req.body);
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  async (req, res) => {
    res.send("created");
  }
);

app.listen(PORT);

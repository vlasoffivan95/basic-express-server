const express = require("express");
const app = express();

const PORT = 5001;
const usersDB = []

app.get("/users", (req, res) => {
  res.send([{ id: 1 }, { id: 2 }]);
});

app.post(
  "/users",
  (req, res, next) => {
    console.log("first middleware");
    req.isValid = true
    next()
  },
  (req, res, next) => {
    console.log("second middleware");
    console.log(req.isValid)
    next()
  },
  (req, res) => {
    console.log("final func");
    usersDB.push(user)
    res.send("user created");
  }
);

app.get("/test*", (req, res) => {
  res.send(`request.path is ${req.path} and requests.method`);
});

// app.post("/users");
// app.put("/users");
// app.delete("/users");

app.listen(PORT);

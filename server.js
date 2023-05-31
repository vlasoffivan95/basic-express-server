const express = require("express");
const app = express();

const PORT = 5001;

app.get("/users", (req, res) => {
  res.send([{ id: 1 }, { id: 2 }]);
});


  app.get("/test*", (req, res) => {
    res.send(`request.path is ${req.path} and requests.method`);
  });

app.listen(PORT);

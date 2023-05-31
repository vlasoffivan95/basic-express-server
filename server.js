const express = require("express");
const app = express();

const PORT = 5001;

app.get("/users", (req, res) => {
  res.send([{ id: 1 }, { id: 2 }]);
});

app.listen(PORT);

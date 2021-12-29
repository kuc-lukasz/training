const express = require("express");

const app = express();
const port = 3000;

let someVar = 10;

app.get("/", (req, res) => {
  res.send({ message: someVar });
  someVar++;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

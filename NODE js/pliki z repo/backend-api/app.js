const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/get-students", (req, res) => {});

app.get("/api/get-students/:id", (req, res) => {
  const { id } = req.params;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

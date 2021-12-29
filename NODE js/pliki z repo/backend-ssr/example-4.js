const express = require("express");

const app = express();
const port = 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div>
      Jestem stroną główną!
    </div>

    <script>
      console.log('Cześć!')
    </script>
  </body>
</html>
`;

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

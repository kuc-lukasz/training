const fs = require("fs");
const path = require("path");

const content = "Mój pierwszy zapisany plik!";

fs.writeFile(path.resolve(__dirname, "save.txt"), content, (error) => {
  if (error) {
    console.warn(error);
  }
});

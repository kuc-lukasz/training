const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname, "data.json"), (error, data) => {
//   if (error) {
//     console.warn(error);
//   }
//   console.log(data);
// });

fs.readFile(path.join(__dirname, "data.json"), "utf8", (error, data) => {
  const newArray = []
  if (data) { 
    const newData = JSON.parse(data).
    map(data => {
      return `${data.name} ${data.surname} ${data.grades.reduce((prv, curr)=> prv + curr,0)/data.grades.length}`
    })
    
   console.log(newData)
  } if (error) {
    console.warn(error)
    
  }
  
});



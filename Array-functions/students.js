const students = [
    { name: "Zbigniew", tasksDone: 150, hoursSpent: 160 },
    { name: "Krystyna", tasksDone: 1, hoursSpent: 1 },
    { name: "Krzysztof", tasksDone: 100, hoursSpent: 80 },
    { name: "Seba", tasksDone: 200, hoursSpent: 40 },
    { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
  ];
  
  const requirements = {
    minHoursSpent: 80,
    minTasksDone: 100,
  };

  function checkJuniorReg (){
      const goodStudents = [];
      const badStudents = []

      const validator = student => student.tasksDone >= requirements.minHoursSpent && student.hoursSpent >= requirements.minHoursSpent 

      students.forEach(student => {
          if(validator(student)){
            goodStudents.push(student.name)
          } else {
              badStudents.push(student.name)
          }
      })
      return `Dobrzy studencji: ${goodStudents.join(", ")}\nŹli studenci: ${badStudents.join(" ,")}`
  } 
 
  console.log(checkJuniorReg())
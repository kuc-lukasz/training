// Zwrocic tablice grup 

const groups = [
    {
      id: 1,
      name: "G1",
      studentIds: [2, 1],
    },
  ];

  const students = 
  [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Steve",
    },
  ]

  getGroupsWithStudent = (array1, array2) => {
      array1.map((group)=> 

  console.log(getGroupsWithStudent(groups, students))
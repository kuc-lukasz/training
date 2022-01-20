const fs = require("fs");

const data = fs.readFileSync("../server/db.json");

const dataAsObjects = JSON.parse(data);
const employees = dataAsObjects.employees;

const deals = employees.map((employee) => {
  return {
    id: employee.id,
    deals: employee.deals,
  };
});

// wyciagniecie wszystkich poza czescia deals
const newEmployees = employees.map(({ deals, ...employee }) => {
  return employee;
});

const result = {
  employees: newEmployees,
  deals,
};

const text = JSON.stringify(result);

// zapisanie nowych danych
fs.writeFileSync("../server/db.json", text);

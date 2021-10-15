import {
    totalOfPositives,
    filter,
    reduce,
    checkJuniorReq,
  } from "./main.js";
  import { test, strictEqual, deepEqual } from "../testing.js";
  
  test("total of positive numbers", () => {
    strictEqual(totalOfPositives([-1, 1, 2, 3]), 6);
    strictEqual(totalOfPositives([]), 0);
    strictEqual(totalOfPositives([-1, -2]), 0);
  });
  
  test("our own filter", () => {
    deepEqual(
      filter([1, 2, 3, 4, 5], (x) => x % 2 === 0),
      [2, 4]
    );
  
    deepEqual(
      filter([1, 2, 3, 4, 5], (x) => x > 2),
      [3, 4, 5]
    );
  });
  
  test("our own reduce", () => {
    strictEqual(
      reduce([1, 2, 3], (total, next) => total + next, 0),
      6
    );
  
    strictEqual(
      reduce([1, 8, 3], (max, next) => (max > next ? max : next), -Infinity),
      8
    );
  
    strictEqual(
      reduce(
        ["Foo", "Carrot", "Blach"],
        (longest, next) => (longest.length > next.length ? longest : next)
      ),
      "Carrot"
    );
  });
  
  test("recruiting junior devs", () => {
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
  
    deepEqual(checkJuniorReq(students, requirements), {
      good: ["Zbigniew", "Krzysztof"],
      bad: ["Krystyna", "Seba", "Dagmara"],
    });
  });
  
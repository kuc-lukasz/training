import { test, strictEqual, deepEqual } from "../testing.js";
import {
  getGroupsWithStudents,
  getStudentNamesAlphabetically,
  getStudentsWithNamesAndNotesAverage,
  getStudentsWithNamesAndTopNotes,
  getStudentTopNotes,
} from "./complex-transformations.js";

test("getStudentNamesAlphabetically", () => {
  deepEqual(
    getStudentNamesAlphabetically([
      { name: "Steve" },
      { name: "Becky" },
      { name: "John" },
    ]),
    ["Becky", "John", "Steve"]
  );
});

test("getStudentTopNotes", () => {
  deepEqual(
    getStudentTopNotes([
      {
        id: 1,
        name: "Jacek",
        notes: [5, 3, 4, 2, 5, 5],
      },
      {
        id: 2,
        name: "Ewa",
        notes: [2, 3, 3, 3, 2, 5],
      },
      {
        id: 3,
        name: "Zygmunt",
        notes: [2, 2, 4, 4, 3, 3],
      },
    ]),
    [5, 5, 4]
  );
});

test("getStudentsWithNamesAndTopNotes", () => {
  deepEqual(
    getStudentsWithNamesAndTopNotes([
      { name: "John", notes: [3, 5, 4] },
      { name: "Max", notes: [1, 4, 6] },
      { name: "Zygmund", notes: [1, 2, 3] },
    ]),
    [
      { name: "John", topNote: 5 },
      { name: "Max", topNote: 6 },
      { name: "Zygmund", topNote: 3 },
    ]
  );
});

test("getStudentsWithNamesAndNotesAverage", () => {
  deepEqual(
    getStudentsWithNamesAndNotesAverage([{ name: "John", notes: [3, 5, 4] }]),
    [{ name: "John", avgNote: 4 }]
  );
});

test("getGroupsWithStudents", () => {
  deepEqual(
    getGroupsWithStudents(
      [
        {
          id: 1,
          name: "G1",
          studentIds: [2, 1],
        },
      ],
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
    ),
    [
      {
        id: 1,
        name: "G1",
        students: [
          {
            id: 2,
            name: "Steve",
          },
          {
            id: 1,
            name: "John",
          },
        ],
      },
    ]
  );
});
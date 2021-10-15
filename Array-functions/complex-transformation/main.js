/**
 *
 * @param {Array<{ name: string }>} students
 */
 export const getStudentNamesAlphabetically = (students) => {
    //   return students.sort((a, b) => a.name > b.name ? 1 : -1).map(s => s.name)
    return students.map(({ name }) => name).sort();
  };
  
  /**
   *
   * @param {Array<{ notes: number[] }>} students
   */
  export const getStudentTopNotes = (students) =>
    students.map(({ notes }) => Math.max(...notes));
  
  /**
   *
   * @param {Array<{ name: string; notes: number[] }>} students
   */
  export const getStudentsWithNamesAndTopNotes = (students) =>
    students.map(({ name, notes }) => ({
      // shorthand for: `name: name`
      name,
      topNote: Math.max(...notes),
    }));
  
  /**
   *
   * @param {Array<{ name: string; notes: number[] }>} students
   */
  export const getStudentsWithNamesAndNotesAverage = (students) =>
    students.map(({ name, notes }) => ({
      // shorthand for: `name: name`
      name,
      avgNote: notes.reduce((total, next) => total + next, 0) / notes.length,
    }));
  
  /**
   *
   * @param {Array<{ id: number; name: string; studentIds: number[] }>} groups
   * @param {Array<{ id: number; name: string; notes: number[] }>} students
   */
  export const getGroupsWithStudents = (groups, students) =>
    groups.map(({ studentIds, ...group }) => ({
      ...group,
      students: studentIds.map((studentId) =>
        students.find(({ id }) => id === studentId)
      ),
    }));
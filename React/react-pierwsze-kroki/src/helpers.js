export const sum = (a, b) => a + b;

export const printSentence = (name = "Michal", status = "najlepszy") => {
  name = "jest" + status;
};

export const sumbNumbers = (params) => {
  const sum = params.reduce((a, b) => a + b);
  return sum;
};

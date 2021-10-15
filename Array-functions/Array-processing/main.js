export const totalOfPositives = (numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i += 1) {
      const number = numbers[i];
      if (number > 0) {
        result = result + number;
      }
    }
  
    return result;
  };
  
  export const filter = (items, predicate) => {
    //   return items.filter(predicate)
  
    let result = [];
    for (let i = 0; i < items.length; i += 1) {
      if (predicate(items[i])) {
        result.push(items[i]);
      }
    }
  
    return result;
  };
  
  export const reduce = (items, reductor, initialValue) => {
    // return items.reduce(reductor, initialValue)
  
    let result = initialValue === undefined ? items[0] : initialValue;
    for (let i = initialValue === undefined ? 1 : 0; i < items.length; i += 1) {
      result = reductor(result, items[i]);
    }
  
    return result;
  };
  
  export const checkJuniorReq = (candidates, { minHoursSpent, minTasksDone }) => {
    const isGood = ({ tasksDone, hoursSpent }) => {
      const enoughTasks = tasksDone >= minTasksDone;
      const enoughTimeSpent = hoursSpent >= minHoursSpent;
      return enoughTasks && enoughTimeSpent;
    };
  
    const isBad = (candidate) => !isGood(candidate);
    const getName = ({ name }) => name;
  
    const getNames = (checkType) => () =>
      candidates.filter(checkType).map(getName);
  
    const getGoodNames = getNames(isGood);
    const getBadNames = getNames(isBad);
  
    const good = getGoodNames();
    const bad = getBadNames();
  
    return {
      good,
      bad,
    };
  };
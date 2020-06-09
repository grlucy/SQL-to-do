export const toDoTextAction = (term) => {
  return {
    type: "SUBMIT",
    payload: term,
  };
};

export const toDoListAction = (listArray) => {
  return {
    type: "LIST",
    payload: listArray,
  };
};

export const listLengthAction = (num) => {
  return {
    type: "TOTAL",
    payload: num,
  };
};

export const completeLengthAction = (num) => {
  return {
    type: "SUM_COMPLETE",
    payload: num,
  };
};

export const percentageAction = (num) => {
  return {
    type: "PERCENTAGE",
    payload: num,
  };
};

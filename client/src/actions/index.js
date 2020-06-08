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

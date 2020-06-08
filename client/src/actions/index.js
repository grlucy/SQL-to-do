export const toDoTextAction = (term) => {
  return {
    type: "SUBMIT",
    payload: term,
  };
};

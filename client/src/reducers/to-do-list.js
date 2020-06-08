const toDoListReducer = (state = [], action) => {
  switch (action.type) {
    case "LIST":
      return [...action.payload];
    default:
      return state;
  }
};

export default toDoListReducer;

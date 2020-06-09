const percentageReducer = (state = 0, action) => {
  switch (action.type) {
    case "PERCENTAGE":
      return action.payload;
    default:
      return state;
  }
};

export default percentageReducer;

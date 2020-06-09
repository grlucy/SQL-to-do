const completeLengthReducer = (state = 0, action) => {
  switch (action.type) {
    case "SUM_COMPLETE":
      return action.payload;
    default:
      return state;
  }
};

export default completeLengthReducer;

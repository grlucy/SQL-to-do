const clearAllReducer = (state = false, action) => {
  switch (action.type) {
    case "CLEAR_ALL":
      return !state;
    default:
      return state;
  }
};

export default clearAllReducer;

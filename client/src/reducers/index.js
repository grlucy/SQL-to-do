import { combineReducers } from "redux";

import toDoTextReducer from "./to-do-text";
import toDoListReducer from "./to-do-list";
import listLengthReducer from "./list-length";
import completeLengthReducer from "./complete-length";
import percentageReducer from "./percentage";
import clearAllReducer from "./clear-all";

const allReducers = combineReducers({
  toDoText: toDoTextReducer,
  toDoList: toDoListReducer,
  listLength: listLengthReducer,
  completeLength: completeLengthReducer,
  percentage: percentageReducer,
  clearAll: clearAllReducer,
});

export default allReducers;

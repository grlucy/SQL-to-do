import { combineReducers } from "redux";

import toDoTextReducer from "./to-do-text";
import toDoListReducer from "./to-do-list";
import listLengthReducer from "./list-length";
import completeLengthReducer from "./complete-length";
import percentageReducer from "./percentage";

const allReducers = combineReducers({
  toDoText: toDoTextReducer,
  toDoList: toDoListReducer,
  listLength: listLengthReducer,
  completeLength: completeLengthReducer,
  percentage: percentageReducer,
});

export default allReducers;

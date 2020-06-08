import { combineReducers } from "redux";

import toDoTextReducer from "./to-do-text";
import toDoListReducer from "./to-do-list";

const allReducers = combineReducers({
  toDoText: toDoTextReducer,
  toDoList: toDoListReducer,
});

export default allReducers;

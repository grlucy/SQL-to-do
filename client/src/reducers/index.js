import { combineReducers } from "redux";

import toDoTextReducer from "./to-do-text";

const allReducers = combineReducers({
  toDoText: toDoTextReducer,
});

export default allReducers;

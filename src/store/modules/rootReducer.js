import { combineReducers } from "redux";

import githubReducer from "./github/reducer";
import utilsReducer from "./utils/reducer";

export default combineReducers({
  githubReducer,
  utilsReducer,
});

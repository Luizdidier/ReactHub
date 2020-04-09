import { all } from "redux-saga/effects";

import githubReducer from "./github/sagas";

export default function* rootSaga() {
  return yield all([githubReducer]);
}

import { all, fork } from "redux-saga/effects";

//  saga
import list from "./list";

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(list)
  ]);
};

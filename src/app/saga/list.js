import { takeLatest, put, call } from "redux-saga/effects";

import ActionCreators, { Types } from "../action/actionCreator";
import {getListApi} from "../api/list";

export function* getList(action) {
  const { searchTerm } = action;
  if (searchTerm) {
    try {
      const response = yield call(getListApi, searchTerm);
      yield put(ActionCreators.listSuccess(response.data));
    } catch (err) {
      yield put(
        ActionCreators.listFailure("Can't find your song", err)
      );
    }
  } else {
    yield put(
      ActionCreators.listFailure("No song found")
    );
  }
}

export default function* listWatcher() {
  yield takeLatest(Types.LIST_REQUEST, getList);
}

import { all } from "redux-saga/effects";
import AuthSaga from "./authSagas";
import IssueSaga from "./issueSaga";

export default function* rootSaga() {
  yield all([AuthSaga(), IssueSaga()]);
}

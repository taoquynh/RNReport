import { all } from "redux-saga/effects";
import AuthSaga from "./authSagas";

export default function* rootSaga() {
  yield all([AuthSaga()]);
}

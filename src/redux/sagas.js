import { all } from "redux-saga/effects";
import usersSaga from "./users/saga"

export default function* () {
  yield all([usersSaga()]);
}
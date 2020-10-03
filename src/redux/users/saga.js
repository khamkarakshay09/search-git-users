import { all, put, takeLatest, call } from "redux-saga/effects";
import {
  getUsersService,
  getUserService,
  getReposService,
  getRepoService,
} from "../../services/user.service";
import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REPOS_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_REPO_REQUEST,
  GET_USER_REPO_SUCCESS,
  GET_USER_REPO_FAILURE,
} from "./actions";

export function* getUsersSaga() {
  yield takeLatest(GET_USERS_REQUEST, function* () {
    try {
      const response = yield call(getUsersService);
      yield put({ type: GET_USERS_SUCCESS, payload: response.data });
    } catch (e) {
      yield put({ type: GET_USERS_FAILURE });
    }
  });
}

export function* getUserSaga() {
  yield takeLatest(GET_USER_REQUEST, function* ({ payload }) {
    try {
      const response = yield call(getUserService, payload.user);
      yield put({ type: GET_USER_SUCCESS, payload: response.data });
      const reposResponse = yield call(getReposService, payload.user);
      yield put({ type: GET_USER_REPOS_SUCCESS, payload: reposResponse.data });
    } catch (e) {
      yield put({ type: GET_USER_FAILURE });
    }
  });
}

export function* getUserRepoSaga() {
  yield takeLatest(GET_USER_REPO_REQUEST, function* ({ payload }) {
    try {
      const response = yield call(getRepoService, payload.user, payload.repo);
      yield put({
        type: GET_USER_REPO_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({ type: GET_USER_REPO_FAILURE });
    }
  });
}

export default function* () {
  yield all([getUsersSaga(), getUserSaga(), getUserRepoSaga()]);
}

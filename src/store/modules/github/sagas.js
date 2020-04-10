import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  getUserSucesso,
  getUserFalha,
  getRepositorySucesso,
  getRepositoryFalha,
  getSingleUserSucesso,
  getSingleUserFalha,
} from "./actions";
import { apiGithub } from "../../../services/api";

export function* getUser({ payload }) {
  try {
    const response = yield call(apiGithub.get, `/search/users?q=${payload}`);
    yield put(getUserSucesso(response.data));
  } catch (err) {
    yield put(getUserFalha(err));
  }
}

export function* getSingleUser({ payload }) {
  try {
    const response = yield call(apiGithub.get, `/users/${payload}`);
    yield put(getSingleUserSucesso(response.data));
  } catch (err) {
    yield put(getSingleUserFalha(err));
  }
}

export function* getRepository({ payload }) {
  try {
    const response = yield call(
      apiGithub.get,
      `/search/repositories?q=${payload}`
    );
    yield put(getRepositorySucesso(response.data));
  } catch (err) {
    yield put(getRepositoryFalha(err));
  }
}

export default all([
  takeLatest("@githubReducer/GET_USER", getUser),
  takeLatest("@githubReducer/GET_SINGLE_USER", getSingleUser),
  takeLatest("@githubReducer/GET_REPOSITORY", getRepository),
]);

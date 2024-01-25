import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { login } from '@domain/api';

import { setLogin, setToken } from '@containers/Client/actions';
import { LOGIN } from './constants';

function* doLogin({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const resLogin = yield call(login, dataUser);
    const token = resLogin?.data?.token;
    const user = resLogin?.data?.user;
    yield put(setToken(token));
    yield put(setLogin(true));

    cbSuccess && cbSuccess(user);
  } catch (error) {
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(LOGIN, doLogin);
}

import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { register } from '@domain/api';

import { REGISTER } from './constants';

function* doRegister({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(register, dataUser);
    const user = {
      email: 'test',
    };
    cbSuccess && cbSuccess(user);
  } catch (error) {
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(REGISTER, doRegister);
}

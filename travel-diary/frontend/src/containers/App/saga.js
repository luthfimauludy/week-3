import { takeLatest, call, put } from 'redux-saga/effects';

import { register } from '@domain/api';
import { showPopup, setLoading } from '@containers/App/actions';
import { REGISTER } from '@containers/App/constants';

function* doRegister() {
  yield put(setLoading(true));
  try {
    yield call(register);
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

export default function* appSaga() {
  yield takeLatest(REGISTER, doRegister);
}

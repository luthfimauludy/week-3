import { LOGIN } from './constants';

export const setLogin = (dataUser) => ({
  type: LOGIN,
  dataUser,
});

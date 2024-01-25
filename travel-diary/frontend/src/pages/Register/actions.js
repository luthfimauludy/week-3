import { REGISTER } from './constants';

export const setRegister = (dataUser) => ({
  type: REGISTER,
  dataUser,
});

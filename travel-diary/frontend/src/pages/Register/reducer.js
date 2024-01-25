import { produce } from 'immer';
import { REGISTER } from './constants';

export const initialState = {
  register: {},
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REGISTER:
        draft.register = action.register;
        break;
      default:
        break;
    }
  });

export default homeReducer;

import { produce } from "immer";
import { SET_STEP, SET_ORDER } from "./constant";

export const initialState = {
  step: 1,
  order: {},
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP:
        draft.step = action.step;
        break;
      case SET_ORDER:
        draft.order = action.order;
        break;
      default:
        break;
    }
  });

export default homeReducer;

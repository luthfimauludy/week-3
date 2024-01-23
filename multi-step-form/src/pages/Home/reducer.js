import { produce } from "immer";
import {
  SET_ADDONS,
  SET_INFO,
  SET_PLAN,
  SET_STEP,
  SET_SUMMARY,
} from "./constant";

export const initialState = {
  step: 1,
  personalInfo: null,
  plan: null,
  addOns: null,
  summary: null,
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP:
        draft.step = action.step;
        break;
      case SET_INFO:
        draft.personalInfo = action.personalInfo;
        break;
      case SET_PLAN:
        draft.plan = action.plan;
        break;
      case SET_ADDONS:
        draft.addOns = action.addOns;
        break;
      case SET_SUMMARY:
        draft.summary = action.summary;
        break;
      default:
        break;
    }
  });

export default homeReducer;

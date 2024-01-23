import {
  SET_ADDONS,
  SET_INFO,
  SET_PLAN,
  SET_STEP,
  SET_SUMMARY,
} from "./constant";

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});

export const setPersonalInfo = (personalInfo) => ({
  type: SET_INFO,
  personalInfo,
});

export const setPlan = (plan) => ({
  type: SET_PLAN,
  plan,
});

export const setAddOns = (addOns) => ({
  type: SET_ADDONS,
  addOns,
});

export const setSummary = (summary) => ({
  type: SET_SUMMARY,
  summary,
});

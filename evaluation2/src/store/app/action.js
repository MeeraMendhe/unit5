import { APPLY, JOB_DATA } from "./actionTypes";

export const jobData = (payload) => {
  console.log(payload);
  return {
    type: JOB_DATA,
    payload: payload
  };
};

export const apply = (payload) => {
  return {
    type: APPLY,
    payload: payload
  };
};

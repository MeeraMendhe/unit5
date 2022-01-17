import { LOGIN } from "./actionTypes";

export const login = (payload) => {
  return {
    type: LOGIN,
    payload: payload
  };
};

import { LOGIN } from "./actionTypes";

const init = {
  isAuth: false,
  isAdmin: false
};

export const authReducer = (state = init, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        isAuth: true,
        isAdmin:
          payload.password === "admin" && payload.email === "admin@gmail.com"
            ? true
            : false
      };
    }
    default:
      return state;
  }
};

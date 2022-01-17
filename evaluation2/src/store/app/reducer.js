import { JOB_DATA, APPLY } from "./actionTypes";

const initial = {
  data: [],
  ap: []
};

export const app = (state = initial, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case JOB_DATA: {
      return {
        ...state,
        data: [...state.data, payload]
      };
    }

    case APPLY: {
      return {
        ...state,
        ap: [...state.ap, payload]
      };
    }

    default:
      return state;
  }
};

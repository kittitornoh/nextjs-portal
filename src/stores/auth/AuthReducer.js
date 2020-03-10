import { AUTHENTICATE } from "./authTypes";

// initial state
const initialState = {
  token: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}

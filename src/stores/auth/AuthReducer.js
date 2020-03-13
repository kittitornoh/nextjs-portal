import { AUTHENTICATE, DEAUTHENTICATE } from "./authTypes";

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
    case DEAUTHENTICATE:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
}

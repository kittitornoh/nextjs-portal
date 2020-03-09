import { REQUEST_AUTH_FINISHED, REQUEST_DEAUTH_FINISHED } from "./AuthTypes";

// initial state
const initialState = {
  token: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AUTH_FINISHED:
      return {
        ...state,
        token: action.payload
      };
    case REQUEST_DEAUTH_FINISHED:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
}

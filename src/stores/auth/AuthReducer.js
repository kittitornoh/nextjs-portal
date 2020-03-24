import { AUTHENTICATE, AUTHENTICATE_ERROR, DEAUTHENTICATE } from './AuthTypes';

// initial state
const initialState = {
	token: null,
	error: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case AUTHENTICATE:
			return {
				...state,
				token: action.payload,
				error: null
			};
		case AUTHENTICATE_ERROR:
			return {
				...state,
				token: null,
				error: action.payload
			};
		case DEAUTHENTICATE:
			return {
				...state,
				token: null,
				error: null
			};
		default:
			return state;
	}
}

import {
	AUTHENTICATE,
	AUTHENTICATE_ERROR,
	DEAUTHENTICATE,
	CLIENT_AUTHENTICATE,
	CLIENT_AUTHENTICATE_ERROR,
	CLIENT_DEAUTHENTICATE,
} from './AuthTypes';

// initial state
const initialState = {
	token: null,
	client_token: null,
	error: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case AUTHENTICATE:
			return {
				...state,
				token: action.payload,
				error: null,
			};
		case AUTHENTICATE_ERROR:
			return {
				...state,
				token: null,
				error: action.payload,
			};
		case DEAUTHENTICATE:
			return {
				...state,
				token: null,
				error: null,
			};
		case CLIENT_AUTHENTICATE:
			return {
				...state,
				client_token: action.payload,
				error: null,
			};
		case CLIENT_AUTHENTICATE_ERROR:
			return {
				...state,
				client_token: null,
				error: action.payload,
			};
		case CLIENT_DEAUTHENTICATE:
			return {
				...state,
				client_token: null,
				error: null,
			};
		default:
			return state;
	}
}

import { GET_PROFILE, GET_PROFILE_ERROR } from './ProfileTypes';

// initial state
const initialState = {
	profile: null,
	error: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_PROFILE:
			return {
				...state,
				profile: action.payload,
			};
		case GET_PROFILE_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
}

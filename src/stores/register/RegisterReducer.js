import { REGISTER, REGISTER_ERROR } from './RegisterTypes';

// initial state
const initialState = {
	error: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case REGISTER:
			return {
				...state,
				error: null
				// #TODO: submit payload
			};
		case REGISTER_ERROR:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
}

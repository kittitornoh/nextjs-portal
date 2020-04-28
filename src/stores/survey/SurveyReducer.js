import {
	FETCH_SURVEY,
	FETCH_SURVEYS,
	FETCH_SURVEY_ERROR,
	FETCH_SURVEYS_ERROR,
} from './SurveyTypes';

const initialState = {
	surveys: null,
	survey: null,
	error: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_SURVEY:
			return {
				...state,
				survey: action.payload,
				error: null,
			};
		case FETCH_SURVEYS:
			return {
				...state,
				surveys: action.payload,
				error: null,
			};
		case FETCH_SURVEY_ERROR:
			return {
				...state,
				survey: null,
				error: action.payload,
			};
		case FETCH_SURVEYS_ERROR:
			return {
				...state,
				surveys: null,
				error: action.payload,
			};
		default:
			return state;
	}
}

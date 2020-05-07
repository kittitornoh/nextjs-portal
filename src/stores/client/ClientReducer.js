import {
	FETCH_SURVEY,
	FETCH_SURVEYS,
	FETCH_SURVEY_ERROR,
	FETCH_SURVEYS_ERROR,
	FETCH_COUNTRY,
	FETCH_COUNTRY_ERROR,
	FETCH_COUNTY,
	FETCH_COUNTY_ERROR,
	FETCH_STATE,
	FETCH_STATE_ERROR,
} from './ClientTypes';

const initialState = {
	surveys: null,
	survey: null,
	countries: null,
	states: null,
	counties: null,
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
		case FETCH_COUNTRY:
			return {
				...state,
				countries: action.payload,
				error: null,
			};
		case FETCH_COUNTRY_ERROR:
			return {
				...state,
				countries: null,
				error: action.payload,
			};
		case FETCH_STATE:
			return {
				...state,
				states: action.payload,
				error: null,
			};
		case FETCH_STATE_ERROR:
			return {
				...state,
				states: null,
				error: action.payload,
			};
		case FETCH_COUNTY:
			return {
				...state,
				counties: action.payload,
				error: null,
			};
		case FETCH_COUNTY_ERROR:
			return {
				...state,
				counties: null,
				error: action.payload,
			};
		default:
			return state;
	}
}

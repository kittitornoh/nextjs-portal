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
	SURVEY_SUBMISSION,
	SURVEY_SUBMISSION_ERROR,
	REGISTER_PARTICIPANT,
	REGISTER_PARTICIPANT_ERROR,
	FETCH_ETHNICITY,
	FETCH_ETHNICITY_ERROR,
	FETCH_GENDERS,
	FETCH_GENDERS_ERROR,
	FETCH_RACE,
	FETCH_RACE_ERROR,
} from './ClientTypes';

const initialState = {
	surveys: null,
	survey: null,
	countries: null,
	states: null,
	counties: null,
	error: null,
	participantId: null,
	surveyResults: null,
	ethnicity: null,
	genders: null,
	race: null,
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
		case FETCH_ETHNICITY:
			return {
				...state,
				ethnicity: action.payload,
				error: null,
			};
		case FETCH_ETHNICITY_ERROR:
			return {
				...state,
				ethnicity: null,
				error: action.payload,
			};
		case FETCH_GENDERS:
			return {
				...state,
				genders: action.payload,
				error: null,
			};
		case FETCH_GENDERS_ERROR:
			return {
				...state,
				genders: null,
				error: action.payload,
			};
		case FETCH_RACE:
			return {
				...state,
				race: action.payload,
				error: null,
			};
		case FETCH_RACE_ERROR:
			return {
				...state,
				race: null,
				error: action.payload,
			};
		case REGISTER_PARTICIPANT:
			return {
				...state,
				participantId: action.payload,
			};
		case REGISTER_PARTICIPANT_ERROR:
			return {
				...state,
				participantId: null,
				error: action.payload,
			};
		case SURVEY_SUBMISSION:
			return {
				...state,
				error: null,
				surveyResults: action.payload,
			};

		case SURVEY_SUBMISSION_ERROR:
			return {
				...state,
				surveyResults: null,
				error: action.payload,
			};
		default:
			return state;
	}
}

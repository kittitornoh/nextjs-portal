import axios from 'axios';
import environment from '../../environments/development';
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
	REGISTER_PARTICIPANT,
	REGISTER_PARTICIPANT_ERROR,
	SURVEY_SUBMISSION,
	SURVEY_SUBMISSION_ERROR,
	FETCH_ETHNICITY,
	FETCH_ETHNICITY_ERROR,
	FETCH_GENDERS,
	FETCH_GENDERS_ERROR,
	FETCH_RACE,
	FETCH_RACE_ERROR,
} from './ClientTypes';
import { authenticateClient, deauthenticateClient } from '../auth/AuthActions';

const api = environment.api.client;

// survey actions
export const getSurveys = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get(api.surveys.surveys, config)
		.then((res) => {
			dispatch({ type: FETCH_SURVEYS, payload: res.data.data });
		})
		.catch((err) => {
			console.error(err);
		});
};

export const getSurvey = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get(api.surveys.survey + '1', config)
		.then((res) => {
			dispatch({ type: FETCH_SURVEY, payload: res.data.data });
		})
		.catch((err) => {
			console.error(err);
		});
};

// country action
export const getCountries = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get(api.country, config)
		.then((res) => dispatch({ type: FETCH_COUNTRY, payload: res.data.data }));
};

// state action
export const getStates = (token, country) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get(`${api.state}${country}`, config)
		.then((res) => dispatch({ type: FETCH_STATE, payload: res.data.data }));
};

// county action
export const getCounties = (token, state) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get(`${api.county}${state}`, config)
		.then((res) => dispatch({ type: FETCH_COUNTY, payload: res.data.data }));
};

// register participant action
export const registerParticipant = (token, participant) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.post(api.surveyParticipants.storeSurveyParticipant, participant, config)
		.then((res) => {
			dispatch({ type: REGISTER_PARTICIPANT, payload: res.data.data.id });
		})
		.catch((error) => {
			console.error(error);
			dispatch({ type: REGISTER_PARTICIPANT_ERROR, payload: error.response });
		});
};

// submit survey action
export const submitSurvey = (token, data) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.post(api.surveySubmission.storeSurveyAndAnswers, data, config)
		.then((res) => {
			//console.log(res);
			dispatch({ type: SURVEY_SUBMISSION, payload: res.data.data.risk_level });
		})
		.catch((error) => {
			console.error(error);
			dispatch({ type: SURVEY_SUBMISSION_ERROR, payload: error.response });
		});
};

// ethnicity actions
export const getEthnicity = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get(api.ethnicity, config)
		.then((res) => {
			dispatch({ type: FETCH_ETHNICITY, payload: res.data.data });
		})
		.catch((error) => {
			console.error(error);
			dispatch({ type: FETCH_ETHNICITY_ERROR, payload: error.response });
		});
};

// gender actions
export const getGender = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get(api.gender, config)
		.then((res) => {
			dispatch({ type: FETCH_GENDERS, payload: res.data.data });
		})
		.catch((error) => {
			console.error(error);
			dispatch({ type: FETCH_GENDERS_ERROR, payload: error.response });
		});
};

// race actions
export const getRace = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get(api.race, config)
		.then((res) => {
			dispatch({ type: FETCH_RACE, payload: res.data.data });
		})
		.catch((error) => {
			console.error(error);
			dispatch({ type: FETCH_RACE_ERROR, payload: error.response });
		});
};

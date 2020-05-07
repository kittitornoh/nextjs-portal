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
} from './ClientTypes';
import { authenticateClient, deauthenticateClient } from '../auth/AuthActions';

const api = environment.api;

// survey actions
export const getSurveys = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get(api.client.surveys.surveys, config)
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
		.get(api.client.surveys.survey + '1', config)
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
		.get(api.client.country, config)
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
		.get(`${api.client.state}${country}`, config)
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
		.get(`${api.client.county}${state}`, config)
		.then((res) => dispatch({ type: FETCH_COUNTY, payload: res.data.data }));
};

// register participant action
export const registerParticipant = (participant) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.post(api.client.registerParticipant, config)
		.then((res) => console.log(res));
};

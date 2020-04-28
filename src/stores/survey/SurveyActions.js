import axios from 'axios';
import environment from '../../environments/development';
import {
	FETCH_SURVEY,
	FETCH_SURVEYS,
	FETCH_SURVEYS_ERROR,
	FETCH_SURVEY_ERROR,
} from './SurveyTypes';
import { authenticateClient, deauthenticateClient } from '../auth/AuthActions';

const api = environment.api;

export const getSurveys = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios.get(api.client.surveys.surveys, config).then((res) => {
		dispatch({ type: FETCH_SURVEYS, payload: res.data.data });
	});
};

export const getSurvey = (token) => (dispatch) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios.get(api.client.surveys.survey + '1', config).then((res) => {
		dispatch({ type: FETCH_SURVEY, payload: res.data.data });
	});
};
